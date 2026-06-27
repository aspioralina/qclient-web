import React from 'react'
import './Header.css'

interface HeaderProps {
  onNavigate?: (view: 'home' | 'terms' | 'status' | 'faq' | 'support') => void
  currentView?: 'home' | 'terms' | 'status' | 'faq' | 'support'
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        
        <div className="header-brand" onClick={() => onNavigate && onNavigate('home')}>
          <span className="brand-name">qclient</span>
        </div>

        <nav className="header-nav">
          <a 
            href="#store" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Store page mockup: Coming Soon!');
            }}
          >
            Store
          </a>
          <a 
            href="#downloads" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Downloads page mockup: Coming Soon!');
            }}
          >
            Downloads
          </a>
          <a 
            href="#status" 
            className={`nav-link ${currentView === 'status' ? 'active' : ''}`}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('status');
              }
            }}
          >
            Status
          </a>
          <a 
            href="#faq" 
            className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('faq');
              }
            }}
          >
            FAQ
          </a>
        </nav>

        <div className="header-actions">
          <a 
            href="#download" 
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              alert('Starting launcher download...');
            }}
          >
            Download
          </a>
        </div>

      </div>
    </header>
  )
}
