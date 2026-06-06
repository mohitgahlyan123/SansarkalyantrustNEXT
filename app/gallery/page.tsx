import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import Link from 'next/link'

export const metadata = {
  title: 'Gallery | Sansar Kalyan Trust',
  description: 'View photos and images from our community events and initiatives.',
}

// Placeholder gallery items - will be replaced with API call in Phase 2
const galleryItems = [
  {
    id: 1,
    title: 'Health Camp - June 2024',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 2,
    title: 'Education Program Session',
    image: '/placeholder.svg?height=500&width=400',
  },
  {
    id: 3,
    title: 'Tree Plantation Drive',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 4,
    title: 'Community Gathering',
    image: '/placeholder.svg?height=500&width=400',
  },
  {
    id: 5,
    title: 'Food Distribution',
    image: '/placeholder.svg?height=400&width=300',
  },
  {
    id: 6,
    title: 'Volunteer Team',
    image: '/placeholder.svg?height=500&width=400',
  },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <PageHero
          title="Gallery"
          subtitle="Moments from our camps, drives, and community work."
        />

        {/* Masonry Gallery */}
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Link key={item.id} href="/gallery">
                  <div className="group cursor-pointer overflow-hidden rounded-lg hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video overflow-hidden bg-muted rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm text-foreground font-medium mt-3 line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
