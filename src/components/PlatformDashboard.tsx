import React, { useState } from 'react';

export default function PlatformDashboard() {
  const [selectedDevice, setSelectedDevice] = useState(0);

  const devices = [
    {
      id: 'DEV-001',
      name: 'Freezer Principal • Câmara 01',
      location: 'Padaria Central',
      temp: '-18.4 °C',
      target: '-18.0 °C (±2°C)',
      status: 'Normal',
      lastSync: 'Live',
    },
    {
      id: 'DEV-002',
      name: 'Câmara Fria • Vacinas',
      location: 'Farmácia Biovita',
      temp: '+4.2 °C',
      target: '+4.0 °C (±1.5°C)',
      status: 'Normal',
      lastSync: 'Live',
    },
    {
      id: 'DEV-004',
      name: 'Expositor Sorvetes',
      location: 'Sorveteria Gelato Mio',
      temp: '-14.1 °C',
      target: '-18.0 °C (±2°C)',
      status: 'Atenção',
      lastSync: 'Live',
    },
  ];

  const active = devices[selectedDevice];

  return (
    <section id="plataforma" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Sua operação.<br />
            Sob controle absoluto.
          </h2>
        </div>

        {/* Dashboard Frame */}
        <div
          className="fade-up"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'var(--gollub-surface)',
          }}
        >
          {/* Main Workspace Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '320px 1fr',
            }}
            className="dash-workspace"
          >
            {/* Sidebar List */}
            <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              {devices.map((dev, index) => (
                <div
                  key={dev.id}
                  onClick={() => setSelectedDevice(index)}
                  style={{
                    padding: '32px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    background: selectedDevice === index ? 'var(--gollub-bg)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {dev.name}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', color: dev.status === 'Normal' ? '#FFFFFF' : '#FF4444' }}>
                      {dev.temp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Panel */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                }}
              >
                <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TEMPERATURA</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: active.status === 'Normal' ? '#FFFFFF' : '#FF4444', marginTop: '16px', letterSpacing: '-0.05em' }}>
                    {active.temp}
                  </div>
                </div>

                <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALVO</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginTop: '30px', letterSpacing: '-0.03em' }}>
                    {active.target}
                  </div>
                </div>

                <div style={{ padding: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STATUS</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginTop: '30px', letterSpacing: '-0.03em' }}>
                    {active.lastSync}
                  </div>
                </div>
              </div>

              {/* Chart Mock */}
              <div
                style={{
                  padding: '40px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* SVG Graph */}
                <div style={{ width: '100%', height: '240px', position: 'relative', marginTop: '20px' }}>
                  <svg viewBox="0 0 800 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 4" />
                    <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="4 4" />
                    <path
                      d="M 0 100 Q 100 80, 200 110 T 400 95 T 600 105 T 800 100"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <circle cx="800" cy="100" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dash-workspace {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
