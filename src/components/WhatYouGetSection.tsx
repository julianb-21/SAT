import { useEffect, useRef } from 'react';

const CARDS = [
  {
    emoji: '📚',
    title: 'Personalized Curriculum',
    body: "At Langley Prep, every student's curriculum is built specifically for them. We pinpoint exactly which questions, concepts, and test habits are costing your student the most points, then build the curriculum around their specific challenges, learning style, and target score. This approach helps students find their ideal learning style and test strategy so they can show up on test day feeling confident and ready.",
    tag: 'BUILT FOR THEM',
  },
  {
    emoji: '🎯',
    title: 'One-on-One Coaching',
    body: "Every study session is just your student 1-on-1 with an instructor. We don't do group pacing or generic lesson plans because we understand that every student learns differently. Your child's curriculum will evolve in real time based on what they need to work on as they progress. By the end of coaching, your student will be so well-prepared for the SAT, that there will be hardly any stress on test day.",
    tag: 'WATCH THEM GROW',
  },
  {
    emoji: '🧠',
    title: 'Long-Term Mastery',
    body: "The SAT isn't a test you cram for — it's a skillset you master over time. At Langley Prep, our programs run 5 to 12 months, which gives your student ample time to build real mastery, not surface-level understanding. More time means more reps, deeper retention, and the kind of confidence that only comes from having genuinely done the work.",
    tag: 'SEE IT IN ACTION',
  },
];

interface Props {
  onScrollToForm: () => void;
}

export default function WhatYouGetSection({ onScrollToForm }: Props) {
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = reviewsRef.current;
    console.log('[LP] Elfsight-observer: useEffect running, el=' + (el ? 'found' : 'null') + ', visibilityState=' + document.visibilityState);
    if (!el) return;

    const injectScript = () => {
      const already = !!document.querySelector('script[src*="elfsightcdn"]');
      console.log('[LP] Elfsight: injectScript called, already loaded=' + already + ', visibilityState=' + document.visibilityState + ', t=' + Math.round(performance.now()) + 'ms');
      if (!already) {
        const s = document.createElement('script');
        s.src = 'https://elfsightcdn.com/platform.js';
        s.async = true;
        s.onload = () => console.log('[LP] Elfsight: platform.js loaded successfully');
        s.onerror = () => console.error('[LP] Elfsight: platform.js FAILED to load');
        document.body.appendChild(s);
        console.log('[LP] Elfsight: platform.js script tag appended to body');
      }
    };

    const loadWhenVisible = () => {
      console.log('[LP] Elfsight-loadWhenVisible: visibilityState=' + document.visibilityState);
      if (document.visibilityState === 'visible') {
        injectScript();
      } else {
        console.log('[LP] Elfsight: page hidden, deferring script until visibilitychange');
        const onVisible = () => {
          console.log('[LP] Elfsight-onVisible: visibilityState=' + document.visibilityState + ', t=' + Math.round(performance.now()) + 'ms');
          if (document.visibilityState !== 'visible') return;
          document.removeEventListener('visibilitychange', onVisible);
          injectScript();
        };
        document.addEventListener('visibilitychange', onVisible);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      console.log('[LP] Elfsight-observer: callback fired, isIntersecting=' + entry.isIntersecting + ', visibilityState=' + document.visibilityState + ', t=' + Math.round(performance.now()) + 'ms');
      if (!entry.isIntersecting) return;
      observer.disconnect();
      loadWhenVisible();
    }, { rootMargin: '200px' });
    console.log('[LP] Elfsight-observer: observing element');
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-2" style={{ color: '#1A2A4A' }}>
          What Your Student Will Get
        </h2>
        <p className="text-center text-sm uppercase tracking-widest font-semibold mb-12" style={{ color: '#1E4FA0' }}>
          With Langley Prep
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm flex flex-col"
              style={{ border: '1px solid #E2EAF4' }}
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <h3 className="text-base font-black mb-3 leading-snug" style={{ color: '#1A2A4A' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#4B5E7A' }}>
                {card.body}
              </p>
              <div className="mt-6 pt-4" style={{ borderTop: '2px solid #1E4FA0' }}>
                <span className="text-xs font-black tracking-widest uppercase" style={{ color: '#1E4FA0' }}>
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onScrollToForm}
            className="btn-shine px-10 py-4 rounded-full text-white font-black text-base tracking-wide uppercase transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#1E4FA0', boxShadow: '0 8px 32px rgba(30,79,160,0.45), 0 2px 8px rgba(30,79,160,0.25)' }}
          >
            Book Free Strategy Call
          </button>
        </div>

        {/* Reviews — Elfsight loads only when this scrolls near the viewport */}
        <h2 className="text-center text-2xl font-black mb-8" style={{ color: '#1A2A4A' }}>
          What Our Clients Say:
        </h2>
        <div
          ref={reviewsRef}
          className="elfsight-app-28a81b14-414f-4c8b-a6c4-249d9eb70a77"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
