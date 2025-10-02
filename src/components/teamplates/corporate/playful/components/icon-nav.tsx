"use client"
import Link from "next/link"
import type React from "react"

function NavIcon({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/40 text-foreground"
      aria-hidden="true"
    >
      {children}
      <span className="sr-only">{title}</span>
    </span>
  )
}

export function IconNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-3 px-4 md:px-8 py-3">
        <Link href="/" className="flex items-center gap-2">
          <NavIcon title="Home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3z" />
            </svg>
          </NavIcon>
          <span className="font-display text-lg">PlayCo</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="#stories"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 bg-card border hover:bg-primary/30 transition-colors"
          >
            <svg
              className="h-5 w-5 text-foreground group-hover:text-primary-foreground"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16v14l-6-3-6 3z" />
            </svg>
            <span className="hidden sm:inline text-sm">Stories</span>
          </Link>
          <Link
            href="#poll"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 bg-card border hover:bg-accent transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10h3v10H7zM14 4h3v16h-3z" />
            </svg>
            <span className="hidden sm:inline text-sm">Polls</span>
          </Link>
          <Link
            href="#progress"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 bg-card border hover:bg-secondary transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18Zm1 9V6h-2v8h6v-2h-4Z" />
            </svg>
            <span className="hidden sm:inline text-sm">Progress</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
