import React, { useState } from 'react';
import { AnimatedNavFramer } from './components/ui/navigation-menu';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import DeviceShowcase from './components/DeviceShowcase';
import PlatformDashboard from './components/PlatformDashboard';
import Integrations from './components/Integrations';
import AlertsSection from './components/AlertsSection';
import Installation from './components/Installation';
import BenefitsGrid from './components/BenefitsGrid';
import UseCases from './components/UseCases';
import FAQSection from './components/FAQSection';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Redirecionamento automático se alguém acessar /bio ou /links pela SPA
  React.useEffect(() => {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    if (path === '/bio' || path === '/links') {
      window.location.replace('/bio/');
    }
  }, []);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--gollub-bg)', color: '#FFFFFF', position: 'relative' }}>
      <AnimatedNavFramer onOpenDemo={handleOpenDemo} />

      <main>
        <Hero onOpenDemo={handleOpenDemo} />
        <About />
        <HowItWorks />
        <DeviceShowcase />
        <PlatformDashboard />
        <Integrations />
        <AlertsSection />
        <BenefitsGrid />
        <UseCases onOpenDemo={handleOpenDemo} />
        <FAQSection />
        <CTAFinal onOpenDemo={handleOpenDemo} />
      </main>

      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
