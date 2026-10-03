import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Mapeamento Térmico',
      desc: 'Nossa equipe analisa a planta da sua operação para definir os pontos exatos de medição industrial.',
    },
    {
      number: '02',
      title: 'Setup Presencial',
      desc: 'Nossos engenheiros realizam a instalação com cabeamento elétrico definitivo. Sem interrupção da sua operação.',
    },
    {
      number: '03',
      title: 'Controle Absoluto',
      desc: 'Sua infraestrutura passa a transmitir telemetria 24/7 com alertas imediatos na nuvem.',
    },
  ];

  return (
    <section id="como-funciona" className="section-spacing" style={{ position: 'relative', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Implementação White-Glove.
          </h2>
          <p style={{ fontSize: '1.5rem', color: '#888', maxWidth: '600px', marginTop: '24px' }}>
            Não enviamos caixas para você montar. Assumimos a responsabilidade técnica de ponta a ponta.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
          className="fade-up"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-bright)'
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.05em',
                  opacity: 0.2
                }}
              >
                {step.number}
              </div>

              <div>
                <h3 style={{ marginBottom: '16px' }}>{step.title}</h3>
                <p style={{ margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
