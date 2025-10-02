"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/projects",
    description: "List all projects",
    code: `curl -X GET "https://api.devflow.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
    response: `{
  "projects": [
    {
      "id": "proj_123",
      "name": "My App",
      "status": "deployed",
      "url": "https://my-app.devflow.app"
    }
  ]
}`,
  },
  {
    method: "POST",
    endpoint: "/api/projects",
    description: "Create a new project",
    code: `curl -X POST "https://api.devflow.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My New App",
    "framework": "nextjs",
    "region": "us-east-1"
  }'`,
    response: `{
  "id": "proj_456",
  "name": "My New App",
  "status": "creating",
  "created_at": "2024-01-15T10:30:00Z"
}`,
  },
  {
    method: "POST",
    endpoint: "/api/deployments",
    description: "Deploy a project",
    code: `curl -X POST "https://api.devflow.com/v1/deployments" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "project_id": "proj_123",
    "branch": "main",
    "environment": "production"
  }'`,
    response: `{
  "id": "dep_789",
  "status": "building",
  "url": "https://my-app-git-main.devflow.app",
  "estimated_duration": "45s"
}`,
  },
]

export function ApiDocumentation() {
  const [openSections, setOpenSections] = useState<string[]>([])
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const toggleSection = (endpoint: string) => {
    setOpenSections((prev) => (prev.includes(endpoint) ? prev.filter((s) => s !== endpoint) : [...prev, endpoint]))
  }

  const copyCode = async (code: string, endpoint: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(endpoint)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-500"
      case "POST":
        return "bg-blue-500"
      case "PUT":
        return "bg-yellow-500"
      case "DELETE":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {apiEndpoints.map((api) => (
        <Card key={api.endpoint} className="border-border/50">
          <Collapsible open={openSections.includes(api.endpoint)} onOpenChange={() => toggleSection(api.endpoint)}>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getMethodColor(api.method)} text-white`}>{api.method}</Badge>
                    <code className="font-mono text-sm bg-muted px-2 py-1 rounded">{api.endpoint}</code>
                  </div>
                  {openSections.includes(api.endpoint) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
                <p className="text-muted-foreground text-left">{api.description}</p>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <CardContent className="pt-0 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Request</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyCode(api.code, api.endpoint)}
                      className="h-8 px-2"
                    >
                      {copiedCode === api.endpoint ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <pre className="font-mono text-sm overflow-x-auto">
                        <code>{api.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Response</h4>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <pre className="font-mono text-sm overflow-x-auto">
                        <code>{api.response}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  )
}
