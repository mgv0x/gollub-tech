import React from 'react';
import deviceImg from '../assets/gollub_device_3d.png';

export default function DeviceShowcase() {
  const specs = [
    {
      label: 'Alimentação',
      val: 'Direta 110V/220V',
      detail: 'Telemetria ininterrupta. Sem recargas.',
    },
    {
      label: 'Conectividade',
      val: 'Wi-Fi & 4G/IoT',
      detail: 'Redundância total de rede.',
    },
    {
      label: 'Precisão Térmica',
      val: '±0.1 °C',
      detail: 'Calibração industrial certificada.',
    },
    {
      label: 'Instalação',
      val: 'Equipe Gollub',
      detail: 'Setup cabeado completo no local.',
    },
  ];

  return (
    <section id="dispositivo" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '120px',
            alignItems: 'center',
          }}
          className="device-grid fade-up"
        >
          {/* Left Column: Device Image clean */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <img
                src={deviceImg}
                alt="Gollub Hardware Device"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '24px',
                  boxShadow: '0 60px 100px rgba(0, 0, 0, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: '#0a0a0a'
                }}
              />
            </div>
          </div>

          {/* Right Column: Spec Breakdown */}
          <div>
            <h2 style={{ marginBottom: '24px' }}>
              Hardware robusto.<br />Feito para durar.
            </h2>

            <p style={{ marginBottom: '60px', fontSize: '1.25rem', maxWidth: '440px' }}>
              Projetado para suportar ambientes hostis, umidade extrema e variação de rede elétrica. Esqueça baterias, foque na sua operação.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="specs-grid">
              {specs.map((item, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', margin: '8px 0', letterSpacing: '-0.03em' }}>
                    {item.val}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#555' }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .device-grid {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
          }
          .specs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
