type Item = {
  title: string
  category: string
  img: string
  alt: string
}

const items: Item[] = [
  {
    title: "North & Co.",
    category: "Brand + Web",
    img: "/brand-case-study.jpg",
    alt: "Case study preview for North & Co.",
  },
  {
    title: "Sable Finance",
    category: "Product Design",
    img: "/modern-data-dashboard.png",
    alt: "Product dashboard preview for Sable Finance",
  },
  {
    title: "Quiet Studio",
    category: "Identity",
    img: "/identity-system.jpg",
    alt: "Identity system preview for Quiet Studio",
  },
  {
    title: "Linea Legal",
    category: "Website",
    img: "/minimal-website.jpg",
    alt: "Website preview for Linea Legal",
  },
  {
    title: "Anchor HR",
    category: "Content",
    img: "/content-design.jpg",
    alt: "Content design preview for Anchor HR",
  },
  {
    title: "Morrow Partners",
    category: "Strategy",
    img: "/strategy-deck.jpg",
    alt: "Strategy deck preview for Morrow Partners",
  },
]

export function PortfolioGrid() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-10 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Selected work</h2>
          <a href="#contact" className="link-underline text-sm">
            Work with us
          </a>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-lg border bg-card">
              <img
                src={item.img || "/placeholder.svg"}
                alt={item.alt}
                className="h-56 sm:h-56 md:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-light">{item.title}</h3>
                  <p className="text-xs text-foreground/60">{item.category}</p>
                </div>
                <span aria-hidden className="text-xs text-foreground/60">
                  View
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}