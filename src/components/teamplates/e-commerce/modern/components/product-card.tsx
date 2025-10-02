import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingStars } from "./rating-stars"
import { cn } from "@/lib/utils"
import { ShoppingCart } from "lucide-react"

export type Product = {
  id: string
  title: string
  price: number
  rating: number
  reviews: number
  category: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      className={cn(
        "group mb-4 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-transform duration-300",
        "hover:-translate-y-1 hover:shadow-md",
        "break-inside-avoid",
      )}
    >
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {product.category}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm md:text-base font-semibold leading-snug text-pretty">{product.title}</h3>
          <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-sm font-bold">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <RatingStars rating={product.rating} reviews={product.reviews} className="mt-2" />
        <div className="mt-3">
          <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
