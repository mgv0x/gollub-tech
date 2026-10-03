import React from 'react';
import Demo from './demo';

export default function Integrations() {
  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 80px', textAlign: 'center' }} className="fade-up">
          <h2 style={{ marginBottom: '24px' }}>
            Integração nativa com o seu ecossistema.
          </h2>
          <p style={{ margin: '0 auto', maxWidth: '640px', fontSize: '1.25rem', color: '#888' }}>
            O Gollub se conecta às principais ferramentas do mercado. Receba dados via Webhooks no Make, alertas no Slack, ou consuma tudo via API no seu backend.
          </p>
        </div>

        <div className="fade-up">
          <Demo />
        </div>
      </div>
    </section>
  );
}
