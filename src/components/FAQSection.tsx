import React from 'react';

export default function FAQSection() {
  const faqs = [
    {
      q: 'O que acontece na falta de energia?',
      a: 'A plataforma registra imediatamente a ausência de transmissão contínua (Power Loss) e dispara um alerta de Nível 1 para sua equipe. Nossos dispositivos dependem da rede elétrica para garantir o rádio de alta potência industrial e leitura em tempo real.',
    },
    {
      q: 'A instalação exige pausa na operação?',
      a: 'Não. Nossa equipe de engenheiros agenda o melhor horário e realiza o setup da infraestrutura cabeada (110V/220V) sem desligar seus freezers ou interromper seu fluxo de trabalho.',
    },
    {
      q: 'Como são feitos os alertas de desvio?',
      a: 'Na plataforma, o gestor define a janela térmica aceitável. Qualquer oscilação fora desse limite dispara imediatamente uma árvore de contatos pré-definida via telefone e sistemas corporativos.',
    },
  ];

  return (
    <section id="faq" className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto 120px' }} className="fade-up">
          <h2>
            Perguntas comuns.
          </h2>
        </div>

        {/* Accordion Container Stark */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.1)' }} className="fade-up">
          {faqs.map((faq, idx) => {
            return (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  padding: '40px 0',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                }}
                className="faq-row"
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
                  {faq.q}
                </div>
                <div style={{ fontSize: '1.125rem', color: '#888', lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
