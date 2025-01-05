"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const DataHandshake: React.FC = () => {
  const [status, setStatus] = useState('Idle')
  const [log, setLog] = useState<string[]>([])

  const simulateHandshake = async () => {
    setStatus('Initiating')
    setLog(['Initiating handshake...'])

    try {
      const response = await fetch('/api/handshake')
      const data = await response.json()

      setLog(prevLog => [...prevLog, ...data.steps])
      setStatus(data.success ? 'Success' : 'Failed')
    } catch (error) {
      setLog(prevLog => [...prevLog, 'Error occurred during handshake'])
      setStatus('Failed')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Handshake Simulator</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={simulateHandshake} className="mb-4">Simulate Handshake</Button>
        <p className="mb-2"><strong>Status:</strong> {status}</p>
        <div className="h-48 overflow-y-auto p-2 border rounded">
          {log.map((step, index) => (
            <p key={index} className="mb-1">{step}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default DataHandshake