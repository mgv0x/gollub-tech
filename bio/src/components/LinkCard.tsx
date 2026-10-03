import React from 'react';
import type { BioLink } from '../config/bioLinks';

interface LinkCardProps {
  link: BioLink;
  index?: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, index = 0 }) => {
  // Stagger dinâmico para animação de entrada ordenada
  const staggerClass = `stagger-${Math.min(index + 3, 5)}`;

  // Ícone fallback elegante baseado no tipo do link caso não haja ícone específico
  const renderIcon = () => {
    if (link.icon) {
      return (
        <img
          src={link.icon}
          alt={`Ícone ${link.title}`}
          width="40"
          height="40"
          className="link-custom-icon"
        />
      );
    }

    switch (link.type) {
      case 'app':
        return (
          <div className="link-type-icon app">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
              <path d="M12 18h.01"/>
            </svg>
          </div>
        );
      case 'project':
        return (
          <div className="link-type-icon project">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
        );
      case 'social':
        return (
          <div className="link-type-icon social">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className="link-type-icon other">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" x2="22" y1="12" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
        );
    }
  };

  return (
    <a
      href={link.url || '#'}
      target={link.url ? '_blank' : undefined}
      rel={link.url ? 'noopener noreferrer' : undefined}
      className={`link-card touch-card animate-entry ${staggerClass}`}
      id={`link-card-${link.id}`}
      aria-label={`${link.title}${link.description ? `: ${link.description}` : ''}`}
    >
      <div className="link-content-left">
        <div className="link-icon-box">{renderIcon()}</div>
        <div className="link-text-box">
          <span className="link-title">{link.title}</span>
          {link.description && (
            <span className="link-description">{link.description}</span>
          )}
        </div>
      </div>

      <div className="link-arrow-box" aria-hidden="true">
        <svg
          className="link-arrow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>

      <style>{`
        .link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          width: 100%;
          min-height: 64px;
          padding: 14px 18px;
          background-color: var(--surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          box-shadow: 0 4px 16px -4px rgba(8, 6, 26, 0.4);
          cursor: pointer;
        }

        @media (hover: hover) {
          .link-card:hover {
            background-color: var(--surface-hover);
            border-color: var(--border-card-hover);
            box-shadow: 0 8px 24px -6px rgba(124, 58, 237, 0.16);
          }

          .link-card:hover .link-arrow {
            transform: translate(2px, -2px);
            color: var(--white);
          }
        }

        .link-content-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          flex: 1;
        }

        .link-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .link-custom-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          object-fit: cover;
          display: block;
        }

        .link-type-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(167, 139, 250, 0.18);
          color: var(--electric-violet);
        }

        .link-text-box {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          text-align: left;
        }

        .link-title {
          font-family: var(--font-title);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .link-description {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 400;
          color: var(--text-muted);
          line-height: 1.35;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .link-arrow-box {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .link-arrow {
          color: var(--electric-violet);
          transition: transform var(--transition-fast), color var(--transition-fast);
        }

        @media (max-width: 360px) {
          .link-card {
            padding: 12px 14px;
            min-height: 58px;
          }
          .link-title {
            font-size: 0.9375rem;
          }
          .link-description {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </a>
  );
};
