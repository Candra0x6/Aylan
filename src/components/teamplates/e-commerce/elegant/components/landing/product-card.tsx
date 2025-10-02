"use client"

import { Card, CardContent } from "@/components/ui/card"

type Product = {
  id: string
  name: string
  price: string
  image: string
  tag?: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="bg-card/60 border-border/60 overflow-hidden group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-muted-foreground mt-1">{product.price}</p>
          </div>
          {product.tag ? (
            <span className="rounded-full border px-2 py-0.5 text-xs tracking-wide border-[color:var(--accent)] text-[color:var(--accent)]">
              {product.tag}
            </span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
