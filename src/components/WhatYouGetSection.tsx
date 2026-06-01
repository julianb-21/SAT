import { useEffect, useRef, useState } from 'react';

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
    body: "A strong SAT score is one of the few things your student can control quickly. We align the program with your student's target schools and score thresholds so every session moves them closer to merit-based aid and competitive admissions outcomes.",
    tag: 'BUILD THE PLAN',
  },
  {
    emoji: '🧠',
    title: 'Guaranteed Improvement',
    body: 'Our students who follow their personalized SAT plan average a 220-point improvement. We accomplish this by identifying exactly where your student is struggling and providing them a personalized curriculum that targets their problem areas.',
    tag: 'SEE IT IN ACTION',
  },
];

function MobileCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(index === 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.6) setActive(true);
        else setActive(false);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl flex flex-col transition-all duration-300"
      style={{
        border: '1px solid #E2EAF4',
        padding: active ? '1.75rem' : '1.25rem 1.75rem',
        overflow: 'hidden',
      }}
    >
      <div className="text-3xl mb-3">{card.emoji}</div>
      <h3 className="font-black leading-snug" style={{ color: '#1A2A4A', fontSize: active ? '1rem' : '1.1rem' }}>
        {card.title}
      </h3>

      {/* Expanded content */}
      <div
        style={{
          maxHeight: active ? '500px' : '0px',
          opacity: active ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease, opacity 0.3s ease',
        }}
      >
        <p className="text-sm leading-relaxed mt-3 flex-1" style={{ color: '#4B5E7A' }}>
          {card.body}
        </p>
        <div className="mt-6 pt-4" style={{ borderTop: '2px solid #1E4FA0' }}>
          <span className="text-xs font-black tracking-widest uppercase" style={{ color: '#1E4FA0' }}>
            {card.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

interface Props {
  onScrollToForm: () => void;
}

export default function WhatYouGetSection({ onScrollToForm }: Props) {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-2" style={{ color: '#1A2A4A' }}>
          What Your Student Will Get
        </h2>
        <p className="text-center text-sm uppercase tracking-widest font-semibold mb-12" style={{ color: '#1E4FA0' }}>
          With Langley Prep
        </p>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
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

        {/* Mobile: scroll-expand cards */}
        <div className="flex flex-col gap-4 mb-10 md:hidden">
          {CARDS.map((card, i) => (
            <MobileCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onScrollToForm}
            className="px-10 py-4 rounded-full text-white font-black text-base tracking-wide uppercase shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: '#1E4FA0' }}
          >
            Book Free Strategy Call
          </button>
        </div>

        {/* Reviews */}
        <h2 className="text-center text-2xl font-black mb-8" style={{ color: '#1A2A4A' }}>
          What Our Members Say:
        </h2>
        <div
          className="elfsight-app-28a81b14-414f-4c8b-a6c4-249d9eb70a77"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
