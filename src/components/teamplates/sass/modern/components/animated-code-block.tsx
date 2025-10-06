"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const codeSnippets = [
  {
    title: "Deploy in seconds",
    code: `import { deploy } from '@devflow/cli'

await deploy({
  project: './my-app',
  environment: 'production',
  scaling: 'auto'
})

// ✅ Deployed in 2.3s`,
  },
  {
    title: "Scale automatically",
    code: `// Auto-scaling configuration
export default {
  scaling: {
    minInstances: 1,
    maxInstances: 100,
    targetCPU: 70
  }
}

// 🚀 Handles 10M+ requests`,
  },
  {
    title: "Integrate everything",
    code: `import { a } from '@devflow/sdk'

const user = await getUSer()
const data = await db.query('users')
const file = await storage.upload(image)

// 🔗 200+ integrations ready`,
  },
]

export function AnimatedCodeBlock() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    let currentIndex = 0
    setDisplayedCode("")
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)

        // Wait 2 seconds then move to next snippet
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        }, 2000)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentSnippet])

  return (
    <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-muted-foreground ml-2">{codeSnippets[currentSnippet].title}</span>
      </div>
      <div className="p-4">
        <pre className="font-mono text-sm leading-relaxed">
          <code className="text-foreground">
            {displayedCode}
            {isTyping && <span className="animate-pulse">|</span>}
          </code>
        </pre>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none"></div>
    </Card>
  )
}
