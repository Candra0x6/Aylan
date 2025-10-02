"use client"

export function FeaturedLogos() {
  const items = [
    { name: "Forbes", src: "/placeholder-logo.svg" },
    { name: "TechCrunch", src: "/placeholder-logo.svg" },
    { name: "Fast Company", src: "/placeholder-logo.svg" },
    { name: "WSJ", src: "/placeholder-logo.svg" },
    { name: "Bloomberg", src: "/placeholder-logo.svg" },
  ]
  return (
    <div className="container mx-auto px-4 py-10 md:py-12">
      <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-6">Featured in</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
        {items.map((l) => (
          <div key={l.name} className="flex items-center justify-center">
            <img
              src={l.src || "/placeholder.svg"}
              alt={`${l.name} logo`}
              className="h-6 md:h-7 contrast-0 brightness-150 opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
