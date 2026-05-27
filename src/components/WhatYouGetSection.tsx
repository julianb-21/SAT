const CARDS = [
  {
    emoji: '🎯',
    title: 'Personalized Score Breakdown',
    body: 'We identify exactly where your kid is losing points, section by section, concept by concept, so nothing is left to guesswork going into their next exam.',
    tag: 'YOUR ROADMAP',
  },
  {
    emoji: '📅',
    title: 'A Custom Testing Timeline',
    body: 'We map out exactly when your kid should test based on their current score, target schools, and schedule so they are never scrambling at the last minute.',
    tag: 'YOUR GAME PLAN',
  },
  {
    emoji: '🧠',
    title: 'A Live Look at the Langley Prep Method',
    body: 'We walk you through the exact strategies, from Desmos to SAT reading rules, that have helped students improve by an average of 220 points.',
    tag: 'SEE IT IN ACTION',
  },
];

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
          On Your Free Strategy Call
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
