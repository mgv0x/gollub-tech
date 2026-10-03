import React, { useMemo } from 'react';
import { BrandHeader } from './components/BrandHeader';
import { FeaturedLinkCard } from './components/FeaturedLinkCard';
import { LinkCard } from './components/LinkCard';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { bioLinks, type BioLink } from './config/bioLinks';

export const App: React.FC = () => {
  // Regra fundamental: filtrar apenas links publicados e ordenar pelo campo 'order'
  const activeLinks = useMemo(() => {
    return bioLinks
      .filter((link) => link.published)
      .sort((a, b) => a.order - b.order);
  }, []);

  // Separar links em destaque (ex: Auto em Dia) e links regulares
  const featuredLinks = useMemo(() => {
    return activeLinks.filter((link) => link.featured);
  }, [activeLinks]);

  const regularLinks = useMemo(() => {
    return activeLinks.filter((link) => !link.featured);
  }, [activeLinks]);

  // Agrupamento por categorias para escalabilidade futura (nunca exibe categorias vazias)
  const categoryGroups = useMemo(() => {
    const groups: { [key: string]: BioLink[] } = {};
    regularLinks.forEach((link) => {
      const cat = link.category || 'outros';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(link);
    });
    return groups;
  }, [regularLinks]);

  const hasMultipleCategories = Object.keys(categoryGroups).length > 1;

  const categoryLabels: Record<string, string> = {
    apps: 'Aplicativos',
    projects: 'Projetos',
    social: 'Redes Sociais',
    links: 'Links Adicionais',
    outros: 'Links'
  };

  return (
    <main className="bio-container" id="main-content">
      {/* 1. Header Oficial: Símbolo Gollub + Título + Subtítulos */}
      <BrandHeader />

      {/* 2. Seção de Links em Destaque (Auto em Dia como protagonista da 1ª versão) */}
      {featuredLinks.length > 0 && (
        <section className="featured-links-section" aria-label="Aplicativos em Destaque">
          {featuredLinks.map((link) => (
            <FeaturedLinkCard key={link.id} link={link} />
          ))}
        </section>
      )}

      {/* 3. Seção de Links Regulares (preparada para expansão futura sem refatoração) */}
      {regularLinks.length > 0 && (
        <section className="regular-links-section" aria-label="Links e Projetos">
          {hasMultipleCategories ? (
            Object.entries(categoryGroups).map(([catKey, items]) => (
              <div key={catKey} className="category-group">
                <h3 className="category-title">{categoryLabels[catKey] || catKey}</h3>
                <div className="category-links">
                  {items.map((link, idx) => (
                    <LinkCard key={link.id} link={link} index={idx} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="regular-links-list">
              {regularLinks.map((link, idx) => (
                <LinkCard key={link.id} link={link} index={idx} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* 4. Redes Sociais Centralizadas (renderizadas somente se configuradas) */}
      <SocialLinks />

      {/* 5. Footer Oficial Gollub */}
      <Footer />

      <style>{`
        .featured-links-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .regular-links-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .regular-links-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .category-title {
          font-family: var(--font-title);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding-left: 4px;
          margin: 0;
        }

        .category-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </main>
  );
};

export default App;
