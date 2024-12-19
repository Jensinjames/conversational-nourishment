import Dashboard from './components/Dashboard'
import VoiceSimulator from './components/VoiceSimulator'
import OrderTracker from './components/OrderTracker'
import DataHandshake from './components/DataHandshake'

export default function Home() {
  return (
    <main>
      <Dashboard />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <VoiceSimulator />
        <OrderTracker />
        <DataHandshake />
      </div>
    </main>
  )
}

