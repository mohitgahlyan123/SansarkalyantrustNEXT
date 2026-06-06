'use client'

import { useState, useEffect } from 'react'
import { AdminLayout } from '@/components/admin/admin-layout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

export default function DonationsPage() {
  const [donations, setDonations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    fetchDonations()
  }, [])

  const fetchDonations = async () => {
    try {
      const response = await fetch('/api/donations')
      const data = await response.json()
      setDonations(data)
      const total = data.reduce((sum: number, d: any) => sum + (d.amount || 0), 0)
      setTotalAmount(total)
    } catch (error) {
      console.error('Failed to fetch donations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteDonation = async (id: string) => {
    if (!confirm('Delete this donation record?')) return
    setDonations(donations.filter((d) => d._id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Donations</h1>
          <Card className="px-6 py-3 bg-green-50 dark:bg-green-950">
            <p className="text-sm text-muted-foreground">Total Raised</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              ₹{totalAmount.toLocaleString('en-IN')}
            </p>
          </Card>
        </div>

        {loading ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">Loading donations...</p>
          </Card>
        ) : donations.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No donations yet</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {donations.map((donation) => (
              <Card key={donation._id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">{donation.donorName}</h3>
                    <p className="text-sm text-muted-foreground">{donation.donorEmail}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">
                        ₹{donation.amount?.toLocaleString('en-IN')}
                      </p>
                      <p className={`text-xs font-medium ${
                        donation.status === 'completed'
                          ? 'text-green-600'
                          : donation.status === 'pending'
                          ? 'text-orange-600'
                          : 'text-red-600'
                      }`}>
                        {donation.status}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteDonation(donation._id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
