import { lazy, Suspense, useRef } from 'react';
import HeroSection from './components/HeroSection';
import FormSection from './components/FormSection';

const TrustSection = lazy(() => import('./components/TrustSection'));
const WhatYouGetSection = lazy(() => import('./components/WhatYouGetSection'));
const GameplanSection = lazy(() => import('./components/GameplanSection'));

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <HeroSection onScrollToForm={scrollToForm} />
      <FormSection sectionRef={formRef} />
      <Suspense>
        <TrustSection />
        <WhatYouGetSection onScrollToForm={scrollToForm} />
        <GameplanSection onScrollToForm={scrollToForm} />
      </Suspense>
    </div>
  );
}
