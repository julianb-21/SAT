import { useEffect, useRef } from 'react';

const CARDS = [
  {
    emoji: '🎓',
    title: 'Free SAT Mini Course',
    body: 'A concise, structured introduction to the SAT that shows your student exactly how the test is designed, which sections matter most, and where points are most often lost. This mini course helps students take a focused approach to prep, and show up on test day feeling confident and ready.',
    tag: 'INSTANT ACCESS',
  },
  {
    emoji: '🏆',
    title: 'Scholarship and Merit Score Targets',
    body: "A strong SAT score is one of the few things your student can control. We align the program with your student's target schools and score thresholds so every session moves them closer to merit-based aid and competitive admissions outcomes.",
    tag: 'BUILD THE PLAN',
  },
  {
    emoji: '🧠',
    title: 'Guaranteed Improvement',
    body: 'Our students who follow their personalized SAT plan average a 220-point improvement. We accomplish this by identifying exactly where your student is struggling and providing them a personalized curriculum that targets their problem areas.',
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
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (!document.querySelector('script[src*="elfsightcdn"]')) {
        const s = document.createElement('script');
        s.src = 'https://elfsightcdn.com/platform.js';
        s.async = true;
        document.body.appendChild(s);
      }
      observer.disconnect();
    }, { rootMargin: '300px' });
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
