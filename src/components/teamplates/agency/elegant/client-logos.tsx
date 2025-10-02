import Reveal from "./reveal"

const logos = ["AURUM", "NOVA CAPITAL", "LYRA LABS", "MERIDIAN", "ALTO & CO"]

export default function ClientLogos() {
  return (
    <section aria-label="Client logos" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="text-accent font-serif tracking-widest text-base md:text-lg"
              aria-label={`Client ${name}`}
            >
              {name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}