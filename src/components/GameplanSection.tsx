import { useEffect, useRef, useState } from 'react';

const STAGGER_MS = 0;

const COLLEGES_LEFT = [
  'Duke University',
  'Georgetown University',
  'Harvard University',
  'Northwestern University',
  'Oxford University',
  'Stanford University',
  'University of Pennsylvania (Penn)',
  'University of Virginia (UVA)',
  'Vanderbilt University',
];

const COLLEGES_RIGHT = [
  'Colby College',
  'Columbia University',
  'Cambridge University',
  'Emory University',
  'Johns Hopkins University',
  'Princeton University',
  'University of Chicago',
  'University of Southern California (USC)',
  'University of Texas (Austin)',
  'University of Virginia (UVA)',
  'Vanderbilt University',
  'Washington University in St. Louis (WashU)',
  'Yale University',
];

const BULLETS = [
  'Pinpoint the skill categories and question types costing the most points',
  'Identify the issue(s) costing your student the most points (i.e: timing, trap answers, test anxiety)',
  'Confirm their target score, timeline, and the right session cadence',
  'Build their personalized plan so there are no surprises on test day.',
];

const LOGOS = [
  { src: '/harvard-logo-transparent.png', alt: 'Harvard University' },
  { src: '/Princeton-Emblem.png', alt: 'Princeton University' },
  { src: '/file.png', alt: 'Stanford University' },
  { src: '/UPenn+Logo+1920x960.webp', alt: 'University of Pennsylvania' },
  { src: '/OIP.webp', alt: 'Columbia University' },
  { src: '/546eb0af9ad80aa8323a070e85e2dfba.jpg', alt: 'Colby College' },
  { src: '/university-of-oxford9718.jpg', alt: 'University of Oxford' },
  { src: '/OIP copy.webp', alt: 'University of Chicago' },
  { src: '/Vanderbilt_University_seal-1024x1024.png', alt: 'Vanderbilt University' },
  { src: '/OIP copy copy.webp', alt: 'Washington University in St. Louis' },
  { src: '/logos-vertical-1024x683.jpg', alt: 'Johns Hopkins University' },
  { src: '/files_6028413-2026-06-01T14-53-56-648Z-Cambridge_logo.webp', alt: 'University of Cambridge', larger: true },
];

function LogoCarousel() {
  const [running, setRunning] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const doubled = [...LOGOS, ...LOGOS];

  return (
    <div ref={ref} className="overflow-hidden py-6" style={{ backgroundColor: '#F7F9FC' }}>
      <div
        className={`flex items-center gap-6 w-max ${running ? 'animate-logo-scroll' : 'animate-logo-scroll animate-logo-scroll-paused'}`}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-sm"
            style={{ width: 160, height: 88, padding: '12px 16px', border: '1px solid #E2EAF4' }}
            onClick={logo.alt === 'Harvard University' ? () => (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'FreeStratCall') : undefined}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width="128"
              height="64"
              loading="lazy"
              decoding="async"
              className={`max-w-full object-contain mix-blend-multiply ${logo.larger ? 'max-h-[105%]' : 'max-h-full'}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


interface Props {
  onScrollToForm: () => void;
}

function CheckIcon({ delay }: { delay: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 flex-shrink-0 mt-0.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Always-visible circle */}
      <circle cx="12" cy="12" r="10" stroke="#1E4FA0" strokeWidth="2" />
      {/* Animated checkmark */}
      <path
        d="M7.5 12l3 3 6-6"
        stroke="#1E4FA0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-check-draw"
        style={{ animationDelay: `${delay}ms` }}
      />
    </svg>
  );
}

function AnimatedBullets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
      {BULLETS.map((item, i) => (
        <div key={item} className="flex items-start gap-3">
          <CheckIcon delay={i * STAGGER_MS} />
          <span className="text-sm leading-relaxed" style={{ color: '#4B5E7A' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function GameplanSection({ onScrollToForm }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    console.log('[LP] Scrolled60-observer: useEffect running, el=' + (el ? 'found' : 'null') + ', visibilityState=' + document.visibilityState);
    if (!el) return;

    const fireScrolled60 = () => {
      console.log('[LP] Scrolled60: firing, window.fbq type=' + typeof window.fbq + ', fbq.queue=' + JSON.stringify((window.fbq as unknown as {queue?: unknown[]})?.queue));
      window.fbq?.('trackCustom', 'Scrolled60');
      console.log('[LP] Scrolled60: fbq call completed');
    };

    const observer = new IntersectionObserver(([entry]) => {
      console.log('[LP] Scrolled60-observer: callback fired, isIntersecting=' + entry.isIntersecting + ', visibilityState=' + document.visibilityState + ', t=' + Math.round(performance.now()) + 'ms');
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (document.visibilityState === 'visible') {
        console.log('[LP] Scrolled60: page visible, firing immediately');
        fireScrolled60();
      } else {
        console.log('[LP] Scrolled60: page hidden, queuing until visibilitychange');
        const onVisible = () => {
          console.log('[LP] Scrolled60-onVisible: visibilityState=' + document.visibilityState + ', t=' + Math.round(performance.now()) + 'ms');
          if (document.visibilityState !== 'visible') return;
          document.removeEventListener('visibilitychange', onVisible);
          const rect = el.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          console.log('[LP] Scrolled60-onVisible: element still in view=' + inView + ', rect.top=' + Math.round(rect.top) + ', innerHeight=' + window.innerHeight);
          if (inView) {
            fireScrolled60();
          } else {
            console.log('[LP] Scrolled60-onVisible: element no longer in view, NOT firing');
          }
        };
        document.addEventListener('visibilitychange', onVisible);
      }
    }, { threshold: 0.1 });
    console.log('[LP] Scrolled60-observer: observing element');
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Colleges of Langley Prep Alumni */}
      <section className="pt-16 pb-0 px-4" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-12" style={{ color: '#1A2A4A' }}>
            Colleges of Langley Prep Alumni
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid #E2EAF4' }}>
            <div className="bg-white" style={{ borderRight: '1px solid #E2EAF4' }}>
              <div className="px-8 py-4" style={{ borderBottom: '2px solid #1E4FA0', backgroundColor: '#F0F5FF' }}>
                <h4 className="font-black text-sm uppercase tracking-wide" style={{ color: '#1A2A4A' }}>HS Graduating Class of 2026</h4>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {COLLEGES_LEFT.map((college) => (
                    <li key={college} className="flex items-start gap-2 text-sm" style={{ color: '#4B5E7A' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E4FA0' }} />
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white">
              <div className="px-8 py-4" style={{ borderBottom: '2px solid #1E4FA0', backgroundColor: '#F0F5FF' }}>
                <h4 className="font-black text-sm uppercase tracking-wide" style={{ color: '#1A2A4A' }}>HS Graduating Class of 2025</h4>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {COLLEGES_RIGHT.map((college) => (
                    <li key={college} className="flex items-start gap-2 text-sm" style={{ color: '#4B5E7A' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E4FA0' }} />
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* Your Student Does the Work */}
      <section ref={sectionRef} className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-1" style={{ color: '#1A2A4A' }}>
            Your Student Does the Work.
          </h2>
          <p className="text-center text-2xl font-black mb-6" style={{ color: '#1A2A4A' }}>
            We Build the System That Gets Them There.
          </p>

          <p className="text-center text-sm leading-relaxed max-w-2xl mx-auto mb-1" style={{ color: '#4B5E7A' }}>
            Fill out the short form below and book your Free SAT Strategy Session
          </p>
          <p className="text-center text-sm leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: '#4B5E7A' }}>
            We will review your student's score, goals, and timeline and show you exactly how they can reach their goals. Here is what we cover:
          </p>

          <AnimatedBullets />

          <div className="flex justify-center">
            <button
              onClick={onScrollToForm}
              className="btn-shine px-10 py-4 rounded-full text-white font-black text-base tracking-wide uppercase transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#1E4FA0', boxShadow: '0 8px 32px rgba(30,79,160,0.45), 0 2px 8px rgba(30,79,160,0.25)' }}
            >
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
