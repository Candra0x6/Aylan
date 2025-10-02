export function Hero() {
  return (
    <section className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-4">Design & Strategy</p>
        <h1 className="text-pretty text-4xl md:text-6xl font-light tracking-tight">
          Clarity for professionals. We craft calm, effective brands and digital experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
          Minimal interfaces, measured words, meaningful results.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a href="#work" className="link-underline text-sm">
            View work
          </a>
          <a href="#contact" className="link-underline text-sm">
            Start a project
          </a>
        </div>
      </div>
      <div className="bg-accent/60 h-[1px] w-full" aria-hidden />
    </section>
  )
}