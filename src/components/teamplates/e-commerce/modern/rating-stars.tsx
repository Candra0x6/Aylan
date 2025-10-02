import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function RatingStars({
  rating,
  reviews,
  className,
}: {
  rating: number
  reviews?: number
  className?: string
}) {
  const full = Math.floor(rating)
  const stars = Array.from({ length: 5 }, (_, i) => i < full)

  return (
    <div className={cn("flex items-center gap-2", className)} aria-label={`Rated ${rating} out of 5`}>
      <div className="flex">
        {stars.map((isFull, i) => (
          <Star key={i} className={cn("h-4 w-4", isFull ? "fill-primary text-primary" : "text-muted-foreground")} />
        ))}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-muted-foreground">{reviews.toLocaleString()} reviews</span>
      )}
    </div>
  )
}