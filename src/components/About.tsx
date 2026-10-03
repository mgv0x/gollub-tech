import React from 'react';

export default function About() {
  const pillars = [
    {
      title: 'Engenharia de precisão.',
      desc: 'Hardware desenhado do zero para ambientes comerciais críticos.',
    },
    {
      title: 'Alta disponibilidade.',
      desc: 'Redundância global. Uptime contínuo de telemetria.',
    },
    {
      title: 'Decisões preditivas.',
      desc: 'Notificações ativadas no milissegundo do desvio.',
    },
  ];

  return (
    <section id="sobre" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Padrão industrial.<br />
            Velocidade de software.
          </h2>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
          className="fade-up"
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderTop: '1px solid var(--border-bright)',
                paddingTop: '32px'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
