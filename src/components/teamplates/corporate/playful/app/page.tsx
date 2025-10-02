import { Hero } from "@/components/hero"
import { IconNav } from "@/components/icon-nav"
import { CommunityStories } from "@/components/community-stories"
import { PollQuiz } from "@/components/poll-quiz"
import { MilestoneProgress } from "@/components/milestone-progress"

export default function Page() {
  return (
    <main className="min-h-dvh bg-background">
      <IconNav />
      <Hero />
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <CommunityStories />
      </section>
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-secondary rounded-t-[2rem]">
        <PollQuiz />
      </section>
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <MilestoneProgress />
      </section>
      <footer className="px-4 md:px-8 lg:px-12 py-10 text-center text-sm text-muted-foreground">
        Made with care by PlayCo. All copy is placeholder.
      </footer>
    </main>
  )
}
