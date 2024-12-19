"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Order = {
  id: string
  status: string
  items: string[]
}

export default function OrderTracker() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/orders')
      const data = await response.json()
      setOrders(data.orders)
    }

    fetchOrders()
    const interval = setInterval(fetchOrders, 5000) // Refresh every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-auto">
          {orders.map((order) => (
            <div key={order.id} className="mb-4 p-2 border rounded">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Items:</strong> {order.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

