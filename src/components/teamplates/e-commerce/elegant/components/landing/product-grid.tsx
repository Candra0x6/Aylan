"use client"

import { ProductCard } from "./product-card"

const products = [
  {
    id: "brand-kit",
    name: "Luxury Brand Kit",
    price: "$149",
    image: "/luxury-brand-kit-flatlay.jpg",
    tag: "Editor’s Pick",
  },
  {
    id: "commerce-theme",
    name: "E‑Commerce Theme",
    price: "$199",
    image: "/premium-ecommerce-theme-mockup.jpg",
  },
  {
    id: "photo-pack",
    name: "Lifestyle Photo Pack",
    price: "$89",
    image: "/moody-lifestyle-office-photos.jpg",
  },
  {
    id: "automation",
    name: "Workflow Automation Kit",
    price: "$129",
    image: "/automation-dashboard-dark-ui.jpg",
    tag: "New",
  },
  {
    id: "pitch-deck",
    name: "Investor Pitch Deck",
    price: "$99",
    image: "/investor-pitch-deck-slides.jpg",
  },
  {
    id: "analytics",
    name: "Founder Analytics",
    price: "$169",
    image: "/analytics-dashboard-dark-luxury.jpg",
  },
]

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div key={p.id} className="rounded-xl shadow-[0_10px_30px_-12px_rgb(0_0_0/0.45)] ring-1 ring-black/5">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}
