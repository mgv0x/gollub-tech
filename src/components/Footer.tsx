import React from 'react';
import Logo from './Logo';

export default function Footer({ onOpenDemo }) {
  return (
    <footer
      style={{
        background: '#000000',
        paddingTop: '120px',
        paddingBottom: '40px',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '80px',
            paddingBottom: '80px',
          }}
          className="footer-grid"
        >
          {/* Brand Info Column */}
          <div>
            <Logo size="medium" />

            <p style={{ marginTop: '32px', color: '#888', fontSize: '1.125rem', maxWidth: '340px', lineHeight: 1.6 }}>
              Engenharia IoT focada em telemetria térmica industrial.
            </p>
          </div>

          {/* Column 1: Produto */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '24px' }}>
              Infraestrutura
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><a href="#dispositivo" style={{ color: '#888', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s ease' }}>Hardware & Sensor</a></li>
              <li><a href="#plataforma" style={{ color: '#888', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s ease' }}>Painel de Controle</a></li>
              <li><a href="#como-funciona" style={{ color: '#888', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s ease' }}>Instalação Profissional</a></li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '24px' }}>
              Contato
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><button onClick={onOpenDemo} style={{ background: 'none', border: 'none', color: '#FFFFFF', padding: 0, cursor: 'pointer', fontSize: '1rem', textAlign: 'left', fontWeight: 600 }}>Falar com Engenharia</button></li>
              <li><a href="#" style={{ color: '#888', textDecoration: 'none', fontSize: '1rem', transition: 'color 0.2s ease' }}>Documentação Técnica</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: '#555',
            fontSize: '0.9rem',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            © {new Date().getFullYear()} Gollub Tecnologia Industrial.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .footer-grid a:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </footer>
  );
}
