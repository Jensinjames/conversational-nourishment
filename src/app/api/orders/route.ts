import { NextResponse } from 'next/server'

const generateOrder = () => ({
  id: Math.random().toString(36).substr(2, 9),
  status: ['Pending', 'Preparing', 'Ready', 'Delivered'][Math.floor(Math.random() * 4)],
  items: ['Glazed Donut', 'Chocolate Donut', 'Strawberry Donut', 'Vanilla Donut']
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 3) + 1)
})

export async function GET() {
  const orders = Array.from({ length: 5 }, generateOrder)

  return NextResponse.json({ orders })
}

