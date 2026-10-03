import React from 'react';
import gollubSymbol from '../assets/gollub-symbol.svg';

export const BrandHeader: React.FC = () => {
  return (
    <header className="brand-header animate-entry stagger-1">
      {/* Símbolo Oficial Gollub com halo de iluminação extremamente sutil */}
      <div className="logo-wrapper">
        <div className="logo-glow" aria-hidden="true" />
        <img
          src={gollubSymbol}
          alt="Símbolo Oficial Gollub"
          width="54"
          height="54"
          className="brand-symbol"
        />
      </div>

      {/* Nome Oficial da Marca */}
      <div className="brand-titles">
        <h1 className="brand-name">GOLLUB</h1>
        <p className="brand-tagline">Tecnologia que vira produto.</p>
        <p className="brand-subtitle">Apps e projetos criados pela Gollub.</p>
      </div>

      <style>{`
        .brand-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          padding-top: 8px;
        }

        .logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
        }

        .logo-glow {
          position: absolute;
          inset: -6px;
          border-radius: var(--radius-full);
          background: radial-gradient(circle, rgba(124, 58, 237, 0.28) 0%, rgba(124, 58, 237, 0.05) 55%, transparent 75%);
          pointer-events: none;
          z-index: 0;
        }

        .brand-symbol {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          object-fit: contain;
          display: block;
        }

        .brand-titles {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .brand-name {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.625rem;
          line-height: 1.15;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--white);
          margin: 0;
        }

        .brand-tagline {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 1.0625rem;
          line-height: 1.4;
          color: var(--text-secondary);
          margin: 0;
        }

        .brand-subtitle {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.4;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 360px) {
          .brand-name {
            font-size: 1.45rem;
            letter-spacing: 0.14em;
          }
          .brand-tagline {
            font-size: 0.95rem;
          }
          .brand-subtitle {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </header>
  );
};
