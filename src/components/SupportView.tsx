import React from 'react'
import './SupportView.css'

interface SupportViewProps {
  onBack?: () => void
}

export const SupportView: React.FC<SupportViewProps> = ({ onBack }) => {
  return (
    <div className="support-page">
      <div className="support-container">
        
      <div className="dismiss-bar-container" onClick={onBack} style={{ cursor: 'pointer' }} aria-label="Go back">
        <div className="dismiss-bar"></div>
      </div>

      <header className="support-header">
        <h1 className="support-title">Support Center</h1>
        <p className="support-subtitle">Find community help, submit billing tickets, or report client issues.</p>
      </header>

      <div className="support-grid">
        
        <div className="support-card">
          <div className="support-card-icon-wrapper">
            <svg viewBox="0 0 127.14 96.36" width="22" height="22" fill="currentColor">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,69.43,69.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,72.9,0c.82.71,1.68,1.4,2.58,2a69.43,69.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,32.58-18.83C129,54.65,123.5,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
            </svg>
          </div>
          <h3 className="support-card-title">Community Discord</h3>
          <p className="support-card-desc">
            Connect with other players and staff helpers. Perfect for quick queries, client configuration sharing, and real-time multiplayer lobbies.
          </p>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="support-action-btn shimmer-btn">
            <span>Join Discord</span>
          </a>
        </div>

        <div className="support-card">
          <div className="support-card-icon-wrapper">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.25" />
              <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="support-card-title">Store & Billing Ticket</h3>
          <p className="support-card-desc">
            Having payment delivery or account verification issues? Open a formal billing ticket directly to reach our client administrators.
          </p>
          <button className="support-action-btn standard-btn">
            <span>Create Ticket</span>
          </button>
        </div>

        <div className="support-card">
            <div className="support-card-icon-wrapper">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" opacity="0.25" />
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                <path d="M9 9h6M9 13h4" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="support-card-title">Bug & Crash Report</h3>
            <p className="support-card-desc">
              Found a bug or experiencing launching crashes? Submit a report with crash logs to help our development team identify and resolve it.
            </p>
            <button className="support-action-btn standard-btn">
              <span>Report Bug</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
