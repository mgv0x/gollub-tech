import React from 'react';
import deviceImg from '../assets/gollub_device_3d.png';

export default function Hero({ onOpenDemo }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '200px',
        paddingBottom: '120px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Copy & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="fade-up">
            
            <h1 style={{ margin: 0, color: '#FFFFFF' }}>
              Precisão<br />térmica<br />industrial.
            </h1>

            <p style={{ maxWidth: '480px', margin: 0, fontSize: '1.25rem' }}>
              Infraestrutura de monitoramento contínuo 24/7. Instalação profissional inclusa e energia ininterrupta para a sua operação.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingTop: '16px' }}>
              <button onClick={onOpenDemo} className="btn-primary">
                Falar com Engenharia
              </button>
            </div>
          </div>

          {/* Right Column: Clean 3D Render & Sharp Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="fade-up">
            
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <img
                src={deviceImg}
                alt="Gollub Monitor 3D Device Render"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '32px',
                  boxShadow: '0 40px 120px rgba(0, 0, 0, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: '#0a0a0a',
                }}
              />

              {/* Overlay Sharp Premium Card */}
              <div
                className="premium-card"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '-40px',
                  padding: '24px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  zIndex: 3,
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                    Leitura em tempo real
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '16px', letterSpacing: '-0.05em' }}>
                    -18.4 °C 
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#000', backgroundColor: '#FFFFFF', padding: '6px 12px', borderRadius: '999px', letterSpacing: '0' }}>
                      Estável
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
            gap: 80px;
          }
        }
      `}</style>
    </section>
  );
}
