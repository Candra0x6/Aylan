export function MascotIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg className={`animate-wiggle ${className}`} viewBox="0 0 120 120" role="img" aria-label="Friendly mascot">
      <defs>
        <clipPath id="rounded">
          <rect x="0" y="0" width="120" height="120" rx="30" ry="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#rounded)">
        <rect width="120" height="120" fill="currentColor" style={{ color: "var(--primary)" }} />
        <circle cx="60" cy="60" r="34" fill="var(--accent)" />
        <circle cx="45" cy="55" r="5" fill="var(--foreground)" />
        <circle cx="75" cy="55" r="5" fill="var(--foreground)" />
        <rect x="50" y="70" width="20" height="6" rx="3" fill="var(--foreground)" />
        <ellipse cx="60" cy="96" rx="38" ry="8" fill="oklch(0.94 0.01 260)" />
        <path d="M90 20c-8 2-10 8-7 14 6-3 9-7 7-14Z" fill="var(--secondary)" />
        <path d="M30 20c8 2 10 8 7 14-6-3-9-7-7-14Z" fill="var(--secondary)" />
      </g>
    </svg>
  )
}