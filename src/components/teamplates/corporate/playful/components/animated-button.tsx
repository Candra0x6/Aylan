"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react"

type Props = React.ComponentProps<typeof Button> & { bounceOnClick?: boolean }

export function AnimatedButton({ className, bounceOnClick = true, onClick, children, ...rest }: Props) {
  const [pulse, setPulse] = useState(false)

  return (
    <Button
      {...rest}
      onClick={(e) => {
        if (bounceOnClick) {
          setPulse(true)
          setTimeout(() => setPulse(false), 450)
        }
        onClick?.(e)
      }}
      className={cn(
        "rounded-full px-6 py-5 font-medium transition-all duration-300",
        "bg-primary text-primary-foreground hover:bg-accent hover:text-foreground",
        "shadow-sm hover:shadow-md active:shadow",
        "press-bounce",
        pulse && "hover-bounce",
        className,
      )}
    >
      {children}
    </Button>
  )
}
