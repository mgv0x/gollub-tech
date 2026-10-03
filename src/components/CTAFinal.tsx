import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CTAFinal({ onOpenDemo }) {
  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 80px',
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '16px'
          }}
          className="fade-up"
        >
          <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }} className="cta-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '32px', color: '#000000', letterSpacing: '-0.05em' }}>
                Converse com nossos engenheiros.
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
              <p style={{ fontSize: '1.25rem', color: '#555', margin: 0, lineHeight: 1.6 }}>
                Realizamos a análise técnica da sua planta gratuitamente e apresentamos o cronograma de instalação para sua empresa.
              </p>

              <button
                onClick={onOpenDemo}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px 48px',
                  background: '#000000',
                  color: '#FFFFFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s ease',
                  borderRadius: '999px',
                  gap: '12px'
                }}
              >
                Solicitar Avaliação <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
