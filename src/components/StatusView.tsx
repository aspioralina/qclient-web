import React, { useEffect } from 'react'
import './StatusView.css'

interface StatusViewProps {
  onBack: () => void
}

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'outage'
  description: string
}

const SERVICES: ServiceStatus[] = [
  {
    name: 'Authentication & Logins',
    status: 'operational',
    description: 'Validates Minecraft accounts and login sessions.'
  },
  {
    name: 'Cosmetics Store & Inventory',
    status: 'operational',
    description: 'Retrieves client cosmetics, cloaks, and emotes.'
  },
  {
    name: 'Player & Stats API',
    status: 'operational',
    description: 'Handles server database connections and player profiles.'
  },
  {
    name: 'Assets & Distribution CDN',
    status: 'operational',
    description: 'Serves client updates, patch files, and cache files.'
  },
  {
    name: 'Multiplayer Session Lobby',
    status: 'operational',
    description: 'Manages in-game multiplayer friend lists and lobbies.'
  }
]

export const StatusView: React.FC<StatusViewProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="status-page">
      <div className="dismiss-bar-container" onClick={onBack}>
        <div className="dismiss-bar" role="button" aria-label="Go Back"></div>
      </div>

      <div className="status-container">
        
        <header className="status-header">
          <h1 className="status-title">System Status</h1>
          <div className="status-meta">
            <span className="live-indicator">LIVE</span>
            <span className="last-checked">Last checked: Just now</span>
          </div>
        </header>

        <div className="global-status-banner">
          <div className="status-indicator-pulse"></div>
          <span className="banner-text">All Systems Operational</span>
        </div>

        <main className="services-list">
          {SERVICES.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header-row">
                <h3 className="service-name">{service.name}</h3>
                <div className="service-status-badge">
                  <span className="status-dot"></span>
                  <span className="status-text">Operational</span>
                </div>
              </div>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </main>

      </div>
    </div>
  )
}
