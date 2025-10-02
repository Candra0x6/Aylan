const logos = [
  "/abstract-client-logo.png",
  "/abstract-client-logo.png",
  "/abstract-client-logo.png",
  "/abstract-client-logo.png",
  "/abstract-client-logo.png",
  "/abstract-client-logo.png",
]

export function ClientLogos() {
  return (
    <section aria-label="Client logos" className="py-10 md:py-12 border-t">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src || "/placeholder.svg"}
              alt="Client logo"
              className="h-6 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
