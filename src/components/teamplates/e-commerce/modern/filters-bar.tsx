"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FiltersBar({
  categories,
  active,
  onChange,
}: {
  categories: string[]
  active: string
  onChange: (cat: string) => void
}) {
  return (
    <nav
      aria-label="Quick filters"
      className="sticky top-[var(--filters-offset,3.25rem)] z-40 border-b bg-background/80 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex snap-x snap-mandatory overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-2">
          {categories.map((c) => {
            const selected = c === active
            return (
              <Button
                key={c}
                variant={selected ? "default" : "ghost"}
                onClick={() => onChange(c)}
                aria-pressed={selected}
                className={cn(
                  "snap-start rounded-full px-4 font-semibold",
                  selected ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                {c}
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}