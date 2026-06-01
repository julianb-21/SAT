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
  'Identify whether timing, trap answers, or test anxiety is the real problem',
  'Confirm their target score, timeline, and the right session cadence',
  'Build their personalized plan so there are no surprises on test day.',
];

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

export default function GameplanSection({ onScrollToForm }: Props) {
  return (
    <>
      {/* Colleges of Langley Prep Alumni */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F7F9FC' }}>
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

      {/* Your Student Does the Work */}
      <section className="py-12 px-4 bg-white">
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
              className="px-10 py-4 rounded-full text-white font-black text-base tracking-wide uppercase shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: '#1E4FA0' }}
            >
              Book Your Free Gameplan Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
