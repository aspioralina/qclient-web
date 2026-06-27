import React from 'react'
import './HomeView.css'

interface HomeViewProps {
  onNavigate?: (view: 'home' | 'terms' | 'status' | 'faq') => void
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {


  return (
    <div className="home-page-view">
      
      <div className="bg-glow bg-glow-left"></div>
      <div className="bg-glow bg-glow-right"></div>

      <div className="home-content">
        
        <section className="hero-section">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">qclient 2026 Edition is live</span>
          </div>
          <h1 className="hero-headline">
            Elevate your <br />
            Minecraft experience.
          </h1>
          <p className="hero-subtext">
            Designed for competitive PvP and peak hardware optimization. Boost your FPS, 
            customize your HUD layout, and play with zero lag.
          </p>

          <div className="hero-cta-group">
            <a 
              href="#download" 
              className="hero-download-btn"
              onClick={(e) => {
                e.preventDefault();
                alert('Starting launcher download...');
              }}
            >
              Download Launcher
            </a>
            <a 
              href="#faq" 
              className="hero-faq-btn"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('faq');
                }
              }}
            >
              Learn More
            </a>
          </div>
        </section>



        <section className="features-section">
          <h2 className="section-title">Built for Peak Performance</h2>
          <div className="features-grid">
            
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" opacity="0.25" />
                  <path d="M13 6L8 13h5l-1 5 5-6h-5l1-5z" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="feature-title">Unmatched FPS Boost</h3>
              <p className="feature-desc">
                Engineered rendering optimizations and memory allocation patches providing extremely stable, high frame rates.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" opacity="0.25" />
                  <circle cx="12" cy="12" r="2.5" strokeWidth="2" />
                  <line x1="12" y1="3" x2="12" y2="7" strokeWidth="2" />
                  <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
                  <line x1="3" y1="12" x2="7" y2="12" strokeWidth="2" />
                  <line x1="17" y1="12" x2="21" y2="12" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="feature-title">Rich PvP Modifications</h3>
              <p className="feature-desc">
                Includes WASD Keystrokes, Armor Status indicators, Custom Crosshairs, CPS Counter, and coordinates HUD.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0.25" />
                  <path d="M9 11.5l2 2 4.5-4.5" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="feature-title">Anti-Cheat Compliance</h3>
              <p className="feature-desc">
                Fully compliant with major multiplayer server guidelines and EULA policies. Renders modifications fairly.
              </p>
            </div>

          </div>
        </section>

        <section className="cosmetics-section">
          <div className="cosmetics-header">
            <h2 className="section-title">Exclusive Cosmetics</h2>
            <p className="section-sub">Personalize your in-game model with highly optimized assets.</p>
          </div>

          <div className="cosmetics-grid">
            
            <div className="cosmetic-card">
              <div className="cosmetic-preview-box cloak-bg">
                <div className="badge-cosmetic">Cloak</div>
              </div>
              <div className="cosmetic-details">
                <h4 className="cosmetic-name">Lunar Eclipse Cape</h4>
                <span className="cosmetic-price">Available</span>
              </div>
            </div>

            <div className="cosmetic-card">
              <div className="cosmetic-preview-box wings-bg">
                <div className="badge-cosmetic">Wings</div>
              </div>
              <div className="cosmetic-details">
                <h4 className="cosmetic-name">Angelic Wings</h4>
                <span className="cosmetic-price">Available</span>
              </div>
            </div>

            <div className="cosmetic-card">
              <div className="cosmetic-preview-box emotes-bg">
                <div className="badge-cosmetic">Emotes</div>
              </div>
              <div className="cosmetic-details">
                <h4 className="cosmetic-name">Victory Wave Dance</h4>
                <span className="cosmetic-price">Available</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  )
}
