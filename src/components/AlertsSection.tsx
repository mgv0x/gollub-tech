import React from 'react';

export default function AlertsSection() {
  const alertChannels = [
    { name: 'WhatsApp', desc: 'Link direto para análise de contingência.' },
    { name: 'Telefone', desc: 'Ligação imediata automática (escalonamento).' },
    { name: 'Push', desc: 'Alerta sonoro em todos os dispositivos logados.' },
    { name: 'E-mail', desc: 'Log formal para auditoria técnica.' },
  ];

  return (
    <section id="alertas" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '120px',
            alignItems: 'center',
          }}
          className="alerts-grid fade-up"
        >
          {/* Left Column: Notification Phone Mockup Stark */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '440px',
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: '#0a0a0a',
              }}
            >
              {/* Simulated Notification Box */}
              <div
                style={{
                  background: '#000000',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '24px',
                  marginBottom: '32px',
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  GOLLUB ALERT // CRITICAL
                </div>
                <p style={{ fontSize: '1rem', color: '#FFFFFF', margin: 0, lineHeight: 1.5 }}>
                  A câmara fria <strong>"Congelador Matriz"</strong> subiu para <strong>-9.2°C</strong>.
                  <br /><br />
                  Limite máximo: -18.0°C.
                </p>
              </div>

              {/* Timeline of Event Resolution */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.9rem', color: '#888' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>14:02:12</span>
                  <span>Desvio detectado (Offset: +8.8°C)</span>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>14:02:13</span>
                  <span>Escalonamento de aviso (Telefone)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory copy & channels */}
          <div>
            <h2 style={{ marginBottom: '32px' }}>
              Atuação em<br />segundos.
            </h2>

            <p style={{ marginBottom: '64px', fontSize: '1.25rem', maxWidth: '400px' }}>
              Nosso sistema identifica anomalias térmicas e aciona sua equipe antes que ocorra dano irreversível ao produto.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {alertChannels.map((chan, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>{chan.name}</h4>
                  <p style={{ fontSize: '1rem', color: '#888', margin: 0 }}>{chan.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .alerts-grid {
            grid-template-columns: 1fr !important;
            gap: 80px;
          }
        }
      `}</style>
    </section>
  );
}
