import { CheckCircle2 } from 'lucide-react';

const BULLETS_LEFT = [
  'Pinpoint the skill categories and question types costing the most points',
  'Identify whether timing, trap answers, or test anxiety is the real problem',
];

const BULLETS_RIGHT = [
  'Confirm their target score, timeline, and the right session cadence',
  'Build their personalized plan so there is no more guessing',
];

interface Props {
  onScrollToForm: () => void;
}

export default function GameplanSection({ onScrollToForm }: Props) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-3 leading-tight" style={{ color: '#1A2A4A' }}>
          Your Student Does the Work.
        </h2>
        <h2 className="text-4xl md:text-5xl font-black italic mb-10 leading-tight" style={{ color: '#1A2A4A', fontFamily: 'Georgia, serif' }}>
          We Build the System That Gets Them There.
        </h2>

        <p className="text-base leading-relaxed max-w-2xl mx-auto mb-2" style={{ color: '#3A4F6B' }}>
          Fill out the short form below and book your free custom gameplan call.
        </p>
        <p className="text-base leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: '#3A4F6B' }}>
          We will review your student's score, goals, and timeline and show you exactly how we get them to 1500+. Here is what we cover:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 text-left mb-14 max-w-3xl mx-auto">
          {BULLETS_LEFT.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2D6A2D' }} />
              <span className="text-sm leading-relaxed" style={{ color: '#2A3A2A' }}>{item}</span>
            </div>
          ))}
          {BULLETS_RIGHT.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2D6A2D' }} />
              <span className="text-sm leading-relaxed" style={{ color: '#2A3A2A' }}>{item}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onScrollToForm}
          className="px-12 py-5 rounded-xl text-white font-black text-sm tracking-widest uppercase shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#2A2A2A' }}
        >
          Book Your Free Gameplan Call
        </button>
      </div>
    </section>
  );
}
