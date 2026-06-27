import React, { useState, useEffect } from 'react'
import './FAQView.css'

interface FAQViewProps {
  onBack: () => void
}

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    question: 'What is qclient?',
    answer: 'qclient is a premium, high-performance Minecraft client built for modern PvP and general gameplay. It features advanced optimization modules, custom HUD modifications, and built-in anti-cheat integration to provide the smoothest frame rates and gameplay experience.'
  },
  {
    question: 'Is qclient free to use?',
    answer: 'Yes, the core qclient application is completely free to download and use. We offer optional cosmetic store upgrades (like custom cloaks, wings, and emotes) to customize your character appearance and support our development.'
  },
  {
    question: 'How do I install qclient?',
    answer: 'Simply download and run our unified desktop launcher. Select your desired game version, configure your memory allocations if needed, and click launch. The launcher handles all asset downloads and configurations automatically.'
  },
  {
    question: 'Is qclient compliant with Minecraft\'s EULA?',
    answer: 'Yes, qclient is fully compliant with Mojang\'s End User License Agreement. We do not provide any gameplay-altering cheats, hacks, or unfair advantages. Our modifications are strictly focused on customization, FPS optimization, and general quality-of-life improvements.'
  },
  {
    question: 'What game versions are supported?',
    answer: 'Currently, qclient supports major release versions starting from 1.8.9, 1.12.2, 1.16.5, 1.20, and supports automated updates for the newest modern Minecraft releases as they launch.'
  }
]

export const FAQView: React.FC<FAQViewProps> = ({ onBack }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <div className="dismiss-bar-container" onClick={onBack}>
        <div className="dismiss-bar" role="button" aria-label="Go Back"></div>
      </div>

      <div className="faq-container">
        
        <header className="faq-header">
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-meta">
            <span className="faq-sub">Help & Support</span>
          </div>
        </header>

        <main className="faq-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
                <button className="faq-question-btn" onClick={() => toggleFAQ(index)}>
                  <span className="faq-question">{faq.question}</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18" 
                    className="faq-arrow-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer-container">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </main>

      </div>
    </div>
  )
}
