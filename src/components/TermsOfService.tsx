import React, { useEffect } from 'react'
import './TermsOfService.css'

interface TermsOfServiceProps {
  onBack: () => void
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="dismiss-bar-container" onClick={onBack}>
        <div className="dismiss-bar" role="button" aria-label="Go Back"></div>
      </div>

      <div className="terms-container">
        
        <header className="terms-header">
          <div className="terms-meta">
            <span className="last-updated">Last updated: June 27, 2026</span>
          </div>
        </header>

        <main className="terms-content">
          <h1 className="terms-title">Terms of Service</h1>
          
          <section className="terms-section">
            <h2 className="section-title">1. Acceptance of Terms</h2>
            <p className="section-text">
              By accessing, installing, or using the <strong>qclient</strong> platform, software, and services (collectively, "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not access or use the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">2. License Grant</h2>
            <p className="section-text">
              Subject to your compliance with these Terms, qclient grants you a personal, worldwide, non-assignable, and non-exclusive license to use the software provided to you as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services as provided, in the manner permitted by these Terms.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">3. User Conduct</h2>
            <p className="section-text">
              You agree not to use the Service in any way that is unlawful, harmful, or violates the rules of third-party platforms (including but not limited to Minecraft end-user license agreements and server guidelines). Reverse engineering, unauthorized modification, or distribution of qclient binary files is strictly prohibited.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">4. Disclaimer of Warranties</h2>
            <p className="section-text">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">5. Limitation of Liability</h2>
            <p className="section-text">
              IN NO EVENT SHALL QCLIENT, SANCTIONED, OR THEIR RESPECTIVE ENTITIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES arising out of or related to your use of or inability to use the Service.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">6. Governing Law & Amendments</h2>
            <p className="section-text">
              These terms shall be governed by and construed in accordance with local regulations, without regard to conflict of law principles. We reserve the right to modify these terms at any time. Your continued use of the Service following any modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

        </main>
        
      </div>
    </div>
  )
}
