import { validateSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { AdminLayout } from '@/components/admin/admin-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, Calendar, Image, MessageSquare, Users, Heart } from 'lucide-react'

async function getDashboardStats() {
  // Mock stats - will be replaced with actual database queries
  return {
    campaigns: 4,
    events: 3,
    blogPosts: 3,
    galleryItems: 3,
    contactMessages: 0,
    volunteerApps: 0,
    donations: 0,
  }
}

export const metadata = {
  title: 'Admin Dashboard | Sansar Kalyan Trust',
  description: 'Admin dashboard for managing NGO content',
}

export default async function AdminDashboard() {
  const session = await validateSession()

  if (!session) {
    redirect('/login')
  }

  const stats = await getDashboardStats()

  const statCards = [
    {
      label: 'Active Campaigns',
      value: stats.campaigns,
      icon: Heart,
      href: '/admin/campaigns',
      color: 'bg-blue-50 dark:bg-blue-950',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      label: 'Events',
      value: stats.events,
      icon: Calendar,
      href: '/admin/events',
      color: 'bg-green-50 dark:bg-green-950',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Blog Posts',
      value: stats.blogPosts,
      icon: FileText,
      href: '/admin/blog',
      color: 'bg-purple-50 dark:bg-purple-950',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      label: 'Gallery Items',
      value: stats.galleryItems,
      icon: Image,
      href: '/admin/gallery',
      color: 'bg-orange-50 dark:bg-orange-950',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      label: 'Contact Messages',
      value: stats.contactMessages,
      icon: MessageSquare,
      href: '/admin/contacts',
      color: 'bg-red-50 dark:bg-red-950',
      iconColor: 'text-red-600 dark:text-red-400',
    },
    {
      label: 'Volunteer Apps',
      value: stats.volunteerApps,
      icon: Users,
      href: '/admin/volunteers',
      color: 'bg-indigo-50 dark:bg-indigo-950',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
    },
  ]

  return (
    <AdminLayout userName={session.name}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {session.name}!</h2>
          <p className="text-white/90">
            Manage your NGO content, campaigns, and community interactions from here.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statCards.map((card) => {
            const Icon = card.icon
            return (
              <Link key={card.href} href={card.href}>
                <Card className={`p-6 hover:shadow-md transition-shadow cursor-pointer ${card.color}`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{card.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{card.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Content Management</h3>
            <div className="space-y-2">
              <Link href="/admin/campaigns">
                <Button variant="outline" className="w-full justify-start">
                  Manage Campaigns
                </Button>
              </Link>
              <Link href="/admin/events">
                <Button variant="outline" className="w-full justify-start">
                  Manage Events
                </Button>
              </Link>
              <Link href="/admin/blog">
                <Button variant="outline" className="w-full justify-start">
                  Manage Blog Posts
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Community Management</h3>
            <div className="space-y-2">
              <Link href="/admin/contacts">
                <Button variant="outline" className="w-full justify-start">
                  View Contact Messages
                </Button>
              </Link>
              <Link href="/admin/volunteers">
                <Button variant="outline" className="w-full justify-start">
                  Review Volunteer Apps
                </Button>
              </Link>
              <Link href="/admin/donations">
                <Button variant="outline" className="w-full justify-start">
                  View Donations
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
