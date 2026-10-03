import React from 'react';

export default function BenefitsGrid() {
  const benefits = [
    {
      title: 'Tempo Real',
      desc: 'Visão exata e imediata de cada equipamento na planta.',
    },
    {
      title: 'Auditoria Histórica',
      desc: 'Logs imutáveis de anos de operação para vigilância sanitária.',
    },
    {
      title: 'Alerta Ativo',
      desc: 'Notificações via telefone no primeiro desvio de padrão térmico.',
    },
    {
      title: 'Sem Interrupções',
      desc: 'Infraestrutura independente. Sua rede elétrica e internet podem cair, a Gollub não.',
    },
  ];

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Confiabilidade implacável.
          </h2>
        </div>

        {/* Bento-like Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}
          className="fade-up"
        >
          {benefits.map((b, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: '1px solid var(--border-bright)',
                paddingLeft: '32px'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{b.title}</h3>
              <p style={{ margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
