import React from 'react';
import { Check, Magnet } from 'lucide-react';

export default function Installation() {
  const highlights = [
    'Sem fios ou furações complexas',
    'Sensor magnético industrial de alta aderência',
    'Conexão automática com a nuvem Gollub',
    'Pronto para funcionar em menos de 120 segundos',
  ];

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="premium-card fade-up"
          style={{
            padding: '80px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="badge-clean" style={{ marginBottom: '24px' }}>
              Zero Complicação
            </div>

            <h2 style={{ marginBottom: '24px' }}>
              Instalação autônoma em menos de 2 minutos.
            </h2>

            <p style={{ marginBottom: '40px' }}>
              Qualquer colaborador da sua equipe consegue colocar o Gollub Monitor para funcionar. Não requer eletricista, furações ou infraestrutura técnica prévia.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 500 }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--border-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} style={{ color: '#FFFFFF' }} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 40px',
              background: 'var(--gollub-bg)',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '1px solid var(--border-bright)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              <Magnet size={36} />
            </div>

            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
              Fixação Magnética Ultra-Forte
            </h3>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '320px', margin: 0 }}>
              Fixa diretamente em superfícies metálicas de aço inox, câmaras frias e balcões refrigerados com trava de segurança industrial.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .premium-card {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
