"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, Zap, Shield, Code, Cpu } from "lucide-react"

const integrations = [
  { name: "Database", icon: Database, color: "bg-blue-500", connections: ["API", "Auth"] },
  { name: "Cloud", icon: Cloud, color: "bg-green-500", connections: ["Database", "CDN"] },
  { name: "API", icon: Zap, color: "bg-yellow-500", connections: ["Database", "Auth", "CDN"] },
  { name: "Auth", icon: Shield, color: "bg-red-500", connections: ["Database", "API"] },
  { name: "CDN", icon: Code, color: "bg-purple-500", connections: ["Cloud", "API"] },
  { name: "Edge", icon: Cpu, color: "bg-cyan-500", connections: ["CDN", "Cloud"] },
]

export function IntegrationDiagram() {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null)

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 relative overflow-hidden">
      <div className="grid grid-cols-3 gap-8 relative">
        {integrations.map((integration, index) => {
          const Icon = integration.icon
          const isHovered = hoveredIntegration === integration.name
          const isConnected = hoveredIntegration && integration.connections.includes(hoveredIntegration)

          return (
            <div
              key={integration.name}
              className="relative flex flex-col items-center group cursor-pointer"
              onMouseEnter={() => setHoveredIntegration(integration.name)}
              onMouseLeave={() => setHoveredIntegration(null)}
            >
              <div
                className={`
                w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                ${integration.color} ${isHovered ? "scale-110 animate-pulse-glow" : "scale-100"}
                ${isConnected ? "ring-4 ring-primary/50" : ""}
              `}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className={`mt-2 transition-all duration-300 ${
                  isHovered || isConnected ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {integration.name}
              </Badge>

              {/* Connection lines */}
              {isHovered &&
                integration.connections.map((connection) => {
                  const targetIndex = integrations.findIndex((i) => i.name === connection)
                  if (targetIndex === -1) return null

                  return (
                    <div
                      key={connection}
                      className="absolute top-8 w-0.5 h-16 bg-primary/60 animate-pulse"
                      style={{
                        transform: `rotate(${(targetIndex - index) * 60}deg)`,
                        transformOrigin: "center top",
                      }}
                    />
                  )
                })}
            </div>
          )
        })}
      </div>

      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
    </Card>
  )
}
