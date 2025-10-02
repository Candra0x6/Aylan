"use client"

type Review = {
  id: string
  name: string
  role: string
  avatar: string
  quote: string
  rating: number
}

const reviews: Review[] = [
  {
    id: "r1",
    name: "Ava Martinez",
    role: "Founder, LUMÉ",
    avatar: "/placeholder-user.jpg",
    quote: "Every touchpoint looks premium now. The tools are thoughtfully designed and saved our team weeks.",
    rating: 5,
  },
  {
    id: "r2",
    name: "Noah Patel",
    role: "Co‑Founder, Fastr",
    avatar: "/placeholder-user.jpg",
    quote: "Polish and performance without compromises. Our conversion rate improved within days.",
    rating: 5,
  },
  {
    id: "r3",
    name: "Sofia Kim",
    role: "Creative Director",
    avatar: "/placeholder-user.jpg",
    quote: "A rare blend of aesthetics and utility. It helped us level up our entire brand experience.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1 text-[color:var(--accent)]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className={i < count ? "opacity-100" : "opacity-30"}
        >
          <path d="M12 17.3l-6.16 3.67 1.64-7.03L2 8.9l7.19-.62L12 1.8l2.81 6.48L22 8.9l-5.48 5.04 1.64 7.03z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <div>
      <header className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Loved by modern founders</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
          Real customers, real results. Credibility that compounds—design that earns trust.
        </p>
      </header>
      <ul className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.id} className="rounded-xl border border-border/60 bg-card/60 p-6">
            <div className="flex items-center gap-3">
              <img
                src={r.avatar || "/placeholder.svg"}
                alt={`${r.name} avatar`}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium leading-tight">{r.name}</p>
                <p className="text-xs text-muted-foreground leading-tight">{r.role}</p>
              </div>
            </div>
            <Stars count={r.rating} />
            <p className="mt-3 leading-relaxed text-pretty">“{r.quote}”</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
