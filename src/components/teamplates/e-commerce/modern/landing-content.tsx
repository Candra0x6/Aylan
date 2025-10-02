"use client"

import { useMemo, useState } from "react"
import { HeroCarousel } from "./hero-carousel"
import { FiltersBar } from "./filters-bar"
import { ProductCard, type Product } from "./product-card"
import { SiteHeader } from "./site-header"

const SLIDES = [
  {
    id: "s1",
    title: "Shop Fresh. Shop Fast.",
    subtitle: "Trending essentials delivered with unbeatable convenience.",
    imgSrc: "/modern-sneakers-and-bag.jpg",
    cta: { label: "Shop New Arrivals", href: "#products" },
  },
  {
    id: "s2",
    title: "Bold Looks for Everyday",
    subtitle: "Curated picks that elevate your daily fits.",
    imgSrc: "/streetwear-collection.jpg",
    cta: { label: "Explore Collections", href: "#products" },
  },
  {
    id: "s3",
    title: "Home Style, Simplified",
    subtitle: "Cozy textures and clean lines to refresh your space.",
    imgSrc: "/modern-home-decor.png",
    cta: { label: "Discover Home", href: "#products" },
  },
]

const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Aero Knit Sneakers",
    price: 89.99,
    rating: 5,
    reviews: 1240,
    category: "Men",
    image: "/knit-sneakers.jpg",
  },
  {
    id: "p2",
    title: "Everyday Tote Bag",
    price: 59.0,
    rating: 4,
    reviews: 860,
    category: "Women",
    image: "/canvas-tote-bag.png",
  },
  {
    id: "p3",
    title: "Ribbed Lounge Set",
    price: 74.5,
    rating: 5,
    reviews: 432,
    category: "Women",
    image: "/lounge-set.jpg",
  },
  {
    id: "p4",
    title: "Minimalist Wall Clock",
    price: 39.99,
    rating: 4,
    reviews: 211,
    category: "Home",
    image: "/minimal-wall-clock.png",
  },
  {
    id: "p5",
    title: "Classic Denim Jacket",
    price: 98.0,
    rating: 5,
    reviews: 978,
    category: "Men",
    image: "/classic-denim-jacket.png",
  },
  {
    id: "p6",
    title: "Acrylic Vase Set",
    price: 45.0,
    rating: 4,
    reviews: 310,
    category: "Home",
    image: "/acrylic-vase-set.jpg",
  },
  {
    id: "p7",
    title: "Mesh Cap",
    price: 22.0,
    rating: 4,
    reviews: 129,
    category: "Accessories",
    image: "/mesh-cap.jpg",
  },
  {
    id: "p8",
    title: "Leather Wallet",
    price: 65.0,
    rating: 5,
    reviews: 540,
    category: "Accessories",
    image: "/leather-wallet.jpg",
  },
  {
    id: "p9",
    title: "Oversized Hoodie",
    price: 79.0,
    rating: 5,
    reviews: 1300,
    category: "Women",
    image: "/oversized-hoodie.png",
  },
]

export default function LandingContent() {
  const categories = useMemo(() => ["All", "New", "Women", "Men", "Accessories", "Home"], [])
  const [active, setActive] = useState("All")

  const filtered = useMemo(() => {
    if (active === "All" || active === "New") return PRODUCTS
    return PRODUCTS.filter((p) => p.category === active)
  }, [active])

  return (
    <div>
      {/* Sticky site header */}
      <SiteHeader />

      {/* Hero */}
      <HeroCarousel slides={SLIDES} />

      {/* Quick Filters (sticky) */}
      <FiltersBar categories={categories} active={active} onChange={setActive} />

      {/* Product Grid (masonry) */}
      <main id="products" className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-balance text-2xl md:text-3xl font-extrabold">Trending Now</h2>
          <a
            href="#"
            className="hidden md:inline-block rounded-full bg-accent px-5 py-3 font-semibold text-accent-foreground hover:opacity-90"
          >
            View All
          </a>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}