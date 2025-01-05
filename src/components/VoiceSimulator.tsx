"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const VoiceSimulator: React.FC = () => {
  const [input, setInput] = useState('')
  const [conversation, setConversation] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setConversation([...conversation, `User: ${input}`])
    
    const response = await fetch('/api/voice-agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input })
    })
    
    const data = await response.json()
    setConversation([...conversation, `User: ${input}`, `Agent: ${data.response}`])
    setInput('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Interaction Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-auto mb-4 p-2 border rounded">
          {conversation.map((message, index) => (
            <p key={index} className="mb-2">{message}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <Button type="submit">Send</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default VoiceSimulator