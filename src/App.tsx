import { useRef } from 'react';
import HeroSection from './components/HeroSection';
import FormSection from './components/FormSection';
import TrustSection from './components/TrustSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import GameplanSection from './components/GameplanSection';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <HeroSection onScrollToForm={scrollToForm} />
      <FormSection sectionRef={formRef} />
      <TrustSection />
      <WhatYouGetSection onScrollToForm={scrollToForm} />
      <GameplanSection onScrollToForm={scrollToForm} />
    </div>
  );
}
