"use client"
import Image from "next/image"

const stories = [
  {
    name: "Avery",
    title: "How playful tools helped our PTA",
    body: "We used PlayCo boards to run a bake sale. Families voted on flavors and shared photos!",
  },
  {
    name: "Jordan",
    title: "Neighborhood cleanup wins",
    body: "Our block party organized a cleanup with a quick poll and progress bars to track bags collected.",
  },
  {
    name: "Mina",
    title: "Book club that sticks",
    body: "We gamified reading with quizzes and badges — participation doubled in two months.",
  },
]

export function CommunityStories() {
  return (
    <div id="stories" className="mx-auto max-w-6xl">
      <h2 className="font-display text-3xl md:text-5xl mb-6 text-balance">Community stories</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stories.map((s, i) => (
          <article key={i} className="rounded-3xl border bg-card p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={`/community-avatar-.jpg?height=80&width=80&query=community avatar ${i + 1}`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium">{s.name}</p>
                <p className="text-muted-foreground">Community member</p>
              </div>
            </div>
            <h3 className="mt-4 font-display text-xl">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-primary/40 px-3 py-1 text-xs">#playful</span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs">#together</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}