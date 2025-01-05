import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { input } = await request.json()

  // Simulate voice agent response
  const responses = [
    "Thank you for your order. Can I help you with anything else?",
    "I can add that to your order. Anything else?",
    "Your order has been placed. It will be ready for pickup in 15 minutes.",
    "I'm sorry, I didn't understand that. Could you please repeat?",
    "Gerald's Donuts appreciates your business. Have a great day!"
  ]

  const response = responses[Math.floor(Math.random() * responses.length)]

  return NextResponse.json({ response })
}

