import React from 'react';
import type { BioLink } from '../config/bioLinks';
import defaultAppIcon from '../assets/auto-em-dia-icon.png';
import defaultAppScreen from '../assets/auto-em-dia-screen.png';

interface FeaturedLinkCardProps {
  link: BioLink;
}

export const FeaturedLinkCard: React.FC<FeaturedLinkCardProps> = ({ link }) => {
  const iconSrc = link.icon || defaultAppIcon;
  const screenSrc = link.image || defaultAppScreen;
  const buttonLabel = link.buttonText || 'BAIXAR NA GOOGLE PLAY';

  return (
    <div className="featured-card-wrapper animate-entry stagger-2">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-card touch-card"
        id={`featured-card-${link.id}`}
        aria-label={`${link.title} - ${link.description} - ${buttonLabel}`}
      >
        {/* Badge Sutil de Categoria */}
        <div className="featured-badge-row">
          <span className="featured-badge">
            <span className="status-dot" aria-hidden="true" />
            {link.badge || 'Aplicativo Oficial'}
          </span>
        </div>

        {/* Bloco Central: Ícone do App */}
        <div className="app-icon-container">
          <img
            src={iconSrc}
            alt={`Ícone do aplicativo ${link.title}`}
            width="72"
            height="72"
            className="app-icon"
          />
        </div>

        {/* Título com Seta de Ação Externa */}
        <div className="app-title-row">
          <h2 className="app-title">{link.title}</h2>
          <svg
            className="arrow-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>

        {/* Descrição do App */}
        {link.description && (
          <p className="app-description">{link.description}</p>
        )}

        {/* Preview sutil da interface do aplicativo (screenshot real) */}
        {screenSrc && (
          <div className="screen-preview-container" aria-hidden="true">
            <div className="screen-frame">
              <img
                src={screenSrc}
                alt="Demonstração visual do aplicativo Auto em Dia"
                className="screen-image"
                loading="lazy"
              />
              <div className="screen-fade-overlay" />
            </div>
          </div>
        )}

        {/* Botão de Chamada para Ação (Google Play CTA) */}
        <div className="cta-button-container">
          <div className="cta-button">
            {/* Ícone discreto oficial da Google Play Store */}
            <svg
              className="google-play-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3.609 1.814L13.793 12 3.61 22.186a2.213 2.213 0 0 1-.61-1.577V3.391c0-.606.223-1.168.609-1.577zm11.256 11.258l2.368-2.369-12.015-6.9a2.127 2.127 0 0 0-1.071-.284l10.718 9.553zm0 1.856L4.148 24.481c.333.012.695-.084 1.07-.298l12.016-6.9-2.369-2.355zm1.59-1.589l3.528 2.035c1.077.621 1.077 1.636 0 2.257l-3.528 2.035-2.072-2.072 2.072-2.255z" />
            </svg>
            <span className="cta-text">{buttonLabel}</span>
          </div>
        </div>
      </a>

      <style>{`
        .featured-card-wrapper {
          width: 100%;
        }

        .featured-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--surface);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-xl);
          padding: 24px 20px 22px;
          box-shadow: 0 16px 36px -12px rgba(8, 6, 26, 0.7),
                      0 0 0 1px rgba(124, 58, 237, 0.08);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        @media (hover: hover) {
          .featured-card:hover {
            border-color: var(--border-card-hover);
            box-shadow: 0 20px 42px -10px rgba(124, 58, 237, 0.22),
                        0 0 0 1px rgba(167, 139, 250, 0.25);
          }

          .featured-card:hover .arrow-icon {
            transform: translate(2px, -2px);
            color: var(--white);
          }

          .featured-card:hover .cta-button {
            background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
            box-shadow: 0 8px 24px -4px rgba(124, 58, 237, 0.45);
          }
        }

        .featured-badge-row {
          margin-bottom: 16px;
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(124, 58, 237, 0.12);
          border: 1px solid rgba(167, 139, 250, 0.22);
          border-radius: var(--radius-full);
          font-family: var(--font-body);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--electric-violet);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10B981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
        }

        .app-icon-container {
          margin-bottom: 16px;
          position: relative;
        }

        .app-icon {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          object-fit: cover;
          box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.6),
                      0 0 0 1px rgba(255, 255, 255, 0.1);
          background-color: #121028;
          display: block;
        }

        .app-title-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .app-title {
          font-family: var(--font-title);
          font-size: 1.375rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--white);
          margin: 0;
          line-height: 1.2;
        }

        .arrow-icon {
          color: var(--electric-violet);
          transition: transform var(--transition-fast), color var(--transition-fast);
          flex-shrink: 0;
        }

        .app-description {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 400;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0 0 18px 0;
          max-width: 320px;
        }

        /* Screen Preview */
        .screen-preview-container {
          width: 100%;
          max-width: 300px;
          margin: 0 auto 20px;
        }

        .screen-frame {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: #060413;
          height: 125px;
          box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.7);
        }

        .screen-image {
          width: 100%;
          height: auto;
          display: block;
          transform: translateY(-98px);
        }

        .screen-fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55px;
          background: linear-gradient(to top, var(--surface) 0%, rgba(15, 11, 36, 0.5) 60%, transparent 100%);
          pointer-events: none;
        }

        /* CTA Button */
        .cta-button-container {
          width: 100%;
          padding-top: 4px;
        }

        .cta-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          background: linear-gradient(135deg, var(--gollub-purple) 0%, #5B21B6 100%);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 6px 20px -4px rgba(124, 58, 237, 0.35);
          transition: background var(--transition-normal), box-shadow var(--transition-normal);
        }

        .google-play-icon {
          color: var(--white);
          flex-shrink: 0;
        }

        .cta-text {
          font-family: var(--font-title);
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--white);
          text-transform: uppercase;
        }

        @media (max-width: 360px) {
          .featured-card {
            padding: 20px 16px 18px;
          }
          .app-icon {
            width: 64px;
            height: 64px;
          }
          .app-title {
            font-size: 1.25rem;
          }
          .app-description {
            font-size: 0.875rem;
          }
          .screen-preview-container {
            max-height: 120px;
          }
          .cta-button {
            padding: 12px 16px;
          }
          .cta-text {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  );
};
