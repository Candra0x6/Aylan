const services = [
  {
    title: "Brand Strategy",
    desc: "Positioning, messaging, and naming that clarify your value.",
  },
  {
    title: "Identity & Design",
    desc: "Systems with restraint. Logos, type, and guidelines.",
  },
  {
    title: "Web & Product",
    desc: "Accessible, fast interfaces that feel effortless.",
  },
  {
    title: "Content",
    desc: "Editorial frameworks and voice for consistent communication.",
  },
  {
    title: "Research",
    desc: "Qualitative insight to inform decisions that matter.",
  },
  {
    title: "Advisory",
    desc: "On-call support for founders and teams.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">Services</h2>
          <p className="mt-2 text-foreground/70 max-w-2xl leading-relaxed">
            Clear structure, fewer steps, better outcomes.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-5">
              <h3 className="font-light">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
