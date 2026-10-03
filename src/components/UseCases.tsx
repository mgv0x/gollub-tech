import React from 'react';

export default function UseCases() {
  const markets = [
    { name: 'Padarias e Confeitarias', desc: 'Preservação contínua de fermentação e matrizes de pães especiais.' },
    { name: 'Redes de Fast Food', desc: 'Conformidade de temperatura exigida por auditorias globais da franquia.' },
    { name: 'Indústria Farmacêutica', desc: 'Precisão máxima para armazenamento de medicamentos termolábeis.' },
    { name: 'Cadeia Logística', desc: 'Controle de grandes volumes de câmaras de estocagem frigorífica.' },
  ];

  return (
    <section id="mercados" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Escalável para<br />qualquer setor.
          </h2>
        </div>

        {/* Markets Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
          className="fade-up"
        >
          {markets.map((m, idx) => (
            <div
              key={idx}
              style={{
                padding: '40px',
                borderRight: idx !== markets.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                background: '#0a0a0a',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
              className="market-cell"
            >
              <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#FFFFFF' }}>{m.name}</h3>
              <p style={{ fontSize: '1rem', color: '#888', margin: 0, lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .market-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          }
        }
      `}</style>
    </section>
  );
}
