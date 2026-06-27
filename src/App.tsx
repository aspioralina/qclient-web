import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TermsOfService } from './components/TermsOfService'
import { StatusView } from './components/StatusView'
import { FAQView } from './components/FAQView'
import { HomeView } from './components/HomeView'
import { SupportView } from './components/SupportView'

function App() {
  const [view, setView] = useState<'home' | 'terms' | 'status' | 'faq' | 'support'>('home')

  const [particles] = useState(() => 
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${14 + Math.random() * 16}s`,
      size: `${4 + Math.round(Math.random() * 8)}px`
    }))
  )

  const renderContent = () => {
    switch (view) {
      case 'terms':
        return <TermsOfService onBack={() => setView('home')} />
      case 'status':
        return <StatusView onBack={() => setView('home')} />
      case 'faq':
        return <FAQView onBack={() => setView('home')} />
      case 'support':
        return <SupportView onBack={() => setView('home')} />
      case 'home':
      default:
        return <HomeView onNavigate={(targetView) => setView(targetView)} />
    }
  }

  return (
    <div className="app-container">
      <div className="minecraft-particles" aria-hidden="true">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      <Header onNavigate={(targetView) => setView(targetView)} currentView={view} />
      <div className="main-content-layout">
        {renderContent()}
      </div>
      <Footer onNavigate={(targetView) => setView(targetView)} />
    </div>
  )
}

export default App

