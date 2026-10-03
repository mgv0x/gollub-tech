import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bio-footer animate-entry stagger-5">
      <div className="footer-brand">GOLLUB</div>
      <p className="footer-tagline">Tecnologia que vira produto.</p>
      <div className="footer-copyright">© 2026 Gollub</div>

      <style>{`
        .bio-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 6px;
          padding-top: 24px;
          padding-bottom: 12px;
          margin-top: auto;
        }

        .footer-brand {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.8125rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          line-height: 1.2;
        }

        .footer-tagline {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 400;
          color: var(--text-dim);
          margin: 0;
          line-height: 1.4;
        }

        .footer-copyright {
          font-family: var(--font-body);
          font-size: 0.6875rem;
          font-weight: 400;
          color: #475569;
          margin-top: 4px;
        }
      `}</style>
    </footer>
  );
};
