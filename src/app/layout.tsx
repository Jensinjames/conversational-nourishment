import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Gerald's Donuts Voice Agent Sandbox",
  description: 'Sandbox environment for testing voice agent interactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Gerald's Donuts Voice Agent Sandbox</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}

