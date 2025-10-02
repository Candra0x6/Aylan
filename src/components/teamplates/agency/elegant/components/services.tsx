import Reveal from "./reveal"

const services = [
  {
    title: "Premium Branding",
    desc: "Positioning, identity systems, and brand guidelines that convey trust and distinction.",
  },
  {
    title: "Growth Strategy",
    desc: "Research-driven funnels, pricing, and offers to unlock sustainable revenue expansion.",
  },
  {
    title: "Performance Marketing",
    desc: "Full-funnel campaigns with rigorous experimentation and clear ROI tracking.",
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header">
          <h2 id="services-heading" className="font-serif text-3xl md:text-4xl text-foreground">
            Services for Ambitious Founders
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Crafted to elevate your market perception and accelerate growth.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="h-full">
              <article className="h-full rounded-lg border border-border bg-card p-6 hover:shadow-sm transition-shadow">
                <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <div className="mt-6 h-px bg-border" aria-hidden="true" />
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm text-foreground underline underline-offset-4 decoration-accent hover:opacity-80"
                >
                  Learn more
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
