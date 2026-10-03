import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          padding: '48px',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            color: '#888',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '2rem', margin: 0, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
                Falar com Engenharia
              </h3>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Nome Corporativo"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: '#000000',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '1.125rem',
                  }}
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Telefone (WhatsApp)"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: '#000000',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '1.125rem',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '16px', padding: '20px', background: '#FFFFFF', color: '#000000', borderRadius: '0' }}>
                Solicitar Contato
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h3 style={{ fontSize: '2rem', letterSpacing: '-0.03em', marginBottom: '16px', color: '#FFFFFF' }}>
              Solicitação Recebida
            </h3>
            <p style={{ color: '#888', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '40px' }}>
              Nossa equipe entrará em contato em breve para o dimensionamento técnico.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#FFFFFF',
                padding: '16px 32px',
                fontSize: '1.125rem',
                cursor: 'pointer'
              }}
            >
              Fechar janela
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
