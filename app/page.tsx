import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Heart, Stethoscope, BookOpen, Sprout, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-32 md:py-48 bg-primary overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl px-4 relative z-10">
            <div className="space-y-8 max-w-3xl">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                  Sansar Kalyan Trust
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
                  Har Daan Ek Pehchaan
                </h2>
              </div>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                Empowering communities through education, health, and environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/donate">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 px-8 py-3 h-auto rounded-lg">
                    <Heart className="h-5 w-5" />
                    Donate Now
                  </Button>
                </Link>
                <Link href="/volunteer">
                  <Button className="bg-white hover:bg-white/90 text-primary font-semibold gap-2 px-8 py-3 h-auto rounded-lg border-2 border-white">
                    Join as Volunteer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section id="causes" className="w-full py-20 md:py-32 bg-card">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Focus Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We work across multiple sectors to create sustainable impact in communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Healthcare */}
              <Card className="p-8 hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Healthcare
                </h3>
                <p className="text-muted-foreground mb-4">
                  Providing medical support, health camps, and awareness programs to rural areas.
                </p>
                <Link href="#" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>

              {/* Education */}
              <Card className="p-8 hover:shadow-lg transition-shadow border-secondary/20">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Education
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supporting education through scholarships, skill development, and mentorship programs.
                </p>
                <Link href="#" className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all gap-1">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>

              {/* Community Growth */}
              <Card className="p-8 hover:shadow-lg transition-shadow border-accent/20">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Community Growth
                </h3>
                <p className="text-muted-foreground mb-4">
                  Building sustainable livelihoods and environmental conservation initiatives.
                </p>
                <Link href="#" className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all gap-1">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary via-primary to-secondary text-white">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Every contribution, no matter how small, helps us reach more people in need. Together, we can transform lives and build stronger communities.
            </p>
            <Link href="/donate">
              <Button className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-2 h-auto gap-2">
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section id="blog" className="w-full py-20 md:py-32 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Updates
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed about our work, stories, and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20" />
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      Blog Post {i}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Impact Story {i}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Read about how our initiatives are making a real difference in communities across India.
                    </p>
                    <Link href="#" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all gap-1 text-sm">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="#blog">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
