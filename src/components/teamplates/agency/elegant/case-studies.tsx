import Reveal from "./reveal"

type Metric = {
  label: string
  before: string
  after: string
}

type Case = {
  company: string
  summary: string
  metrics: Metric[]
}

const cases: Case[] = [
  {
    company: "Lyra Labs",
    summary:
      "Repositioned the brand and rebuilt acquisition funnels for a DTC wellness startup entering premium retail.",
    metrics: [
      { label: "Revenue", before: "$120k/qtr", after: "$395k/qtr" },
      { label: "CAC", before: "$72", after: "$41" },
      { label: "Email CTR", before: "1.2%", after: "3.9%" },
    ],
  },
  {
    company: "Meridian",
    summary: "Introduced pricing tiers and added a conversion-optimized onboarding, boosting activation and LTV.",
    metrics: [
      { label: "Activation", before: "28%", after: "54%" },
      { label: "LTV", before: "$410", after: "$820" },
      { label: "Churn", before: "4.8%", after: "2.6%" },
    ],
  },
  {
    company: "Alto & Co",
    summary: "Full identity refresh and performance campaigns to expand from regional to national awareness.",
    metrics: [
      { label: "ROAS", before: "1.6x", after: "3.4x" },
      { label: "Organic Traffic", before: "—", after: "+230%" },
      { label: "Retail Partners", before: "12", after: "29" },
    ],
  },
]

function MetricRow({ m }: { m: Metric }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">{m.label}</span>
      <div className="flex items-center gap-3">
        <span className="text-sm line-through text-muted-foreground">{m.before}</span>
        <span className="text-sm font-medium text-foreground">{m.after}</span>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal as="header">
          <h2 id="case-heading" className="font-serif text-3xl md:text-4xl text-foreground">
            Case Studies
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Before-and-after results that demonstrate brand value and business impact.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.company} delay={i * 120} className="h-full">
              <article className="h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-xl text-foreground">{c.company}</h3>
                <p className="mt-3 text-muted-foreground">{c.summary}</p>
                <div className="mt-6 h-px bg-border" aria-hidden="true" />
                <div className="mt-2">
                  {c.metrics.map((m) => (
                    <MetricRow key={m.label} m={m} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}