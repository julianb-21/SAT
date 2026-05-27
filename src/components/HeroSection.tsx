interface HeroSectionProps {
  onScrollToForm: () => void;
}

function ScrollArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="animate-bounce-slow w-14 h-14 rounded-full flex items-center justify-center focus:outline-none transition-opacity hover:opacity-80"
      style={{ backgroundColor: '#F26522' }}
      aria-label="Scroll to form"
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="11" y1="2" x2="11" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points="4,11 11,18 18,11" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ backgroundColor: '#EEF2F8' }}
    >
      {/* Pill label */}
      <div className="mb-5">
        <span
          className="inline-block rounded-full px-6 py-2 text-sm font-condensed font-semibold tracking-widest uppercase"
          style={{ backgroundColor: '#D9E4F5', color: '#1E4FA0', letterSpacing: '0.08em' }}
        >
          ATTENTION DC, MARYLAND, VIRGINIA PARENTS
        </span>
      </div>

      {/* White card */}
      <div
        className="w-full max-w-4xl bg-white rounded-2xl px-8 pt-6 pb-6 text-center mb-8"
        style={{ boxShadow: '0 12px 52px 0 rgba(30,79,160,0.16), 0 4px 12px 0 rgba(30,79,160,0.10)' }}
      >
        <h1 className="font-condensed font-black uppercase leading-tight tracking-tight text-5xl md:text-6xl lg:text-[5.5rem]">
          <span style={{ color: '#1A2A4A' }}>WE AVERAGE A </span>
          <span style={{ color: '#F26522' }}>220-POINT</span>
          <br />
          <span style={{ color: '#1A2A4A' }}>IMPROVEMENT ON THE SAT!</span>
        </h1>
      </div>

      {/* Sub-copy */}
      <p className="text-center text-slate-600 text-base md:text-lg font-body leading-relaxed max-w-2xl mb-4">
        Fill out the form below to claim a <strong style={{ color: '#1E4FA0' }}>Free, 30-Minute SAT Strategy Call</strong> For Your Kid:
      </p>

      <p className="text-center text-slate-500 text-base font-medium mb-12">
        (Only <span style={{ color: '#F26522' }} className="font-bold">7 spots</span> left)
      </p>

      <ScrollArrow onClick={onScrollToForm} />
    </section>
  );
}
