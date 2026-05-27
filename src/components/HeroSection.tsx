interface HeroSectionProps {
  onScrollToForm: () => void;
}

function ScrollArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="animate-bounce-slow w-14 h-14 rounded-full flex items-center justify-center focus:outline-none transition-opacity hover:opacity-80"
      style={{ backgroundColor: '#C9A84C' }}
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
      className="flex flex-col items-center justify-center px-4 py-10 md:min-h-screen md:py-16"
      style={{ backgroundColor: '#EEF2F8' }}
    >
      {/* Pill label */}
      <div className="mb-4 md:mb-5 w-full max-w-lg md:max-w-4xl">
        <span
          className="block text-center rounded-full px-5 py-2.5 text-xs md:text-sm font-condensed font-semibold tracking-widest uppercase leading-snug"
          style={{ backgroundColor: '#D9E4F5', color: '#1E4FA0', letterSpacing: '0.08em' }}
        >
          ATTENTION PARENTS OF HIGH SCHOOL SOPHOMORES,<br className="sm:hidden" /> JUNIORS AND SENIORS
        </span>
      </div>

      {/* White card */}
      <div
        className="w-full max-w-lg md:max-w-4xl bg-white rounded-2xl px-5 pt-5 pb-5 md:px-8 md:pt-6 md:pb-6 text-center mb-6 md:mb-8"
        style={{ boxShadow: '0 12px 52px 0 rgba(30,79,160,0.16), 0 4px 12px 0 rgba(30,79,160,0.10)' }}
      >
        <h1 className="font-condensed font-black uppercase leading-tight tracking-tight text-[2rem] sm:text-4xl md:text-6xl lg:text-[5.5rem]">
          <span style={{ color: '#1A2A4A' }}>WE </span>
          <span style={{ color: '#1A2A4A' }}>GUARANTEE</span>
          <span style={{ color: '#1A2A4A' }}> YOUR CHILD A </span>
          <span style={{ color: '#F26522' }}>1500+ SAT<br className="hidden sm:block" /> SCORE</span>
          <span style={{ color: '#1A2A4A' }}> BEFORE THE </span>
          <span style={{ color: '#F26522' }}>JUNE SAT</span>
          <span style={{ color: '#1A2A4A' }}> OR WE WORK<br className="hidden sm:block" /> FOR </span>
          <span style={{ color: '#F26522' }}>FREE</span>
        </h1>
      </div>

      {/* Sub-copy */}
      <p className="text-center text-slate-600 text-sm md:text-lg font-body leading-relaxed max-w-lg md:max-w-2xl mb-10 md:mb-12 px-2">
        Fill out the short form below and book your free custom gameplan call. We will review your student's score, goals, and timeline and show you exactly how we get them to 1500+.
      </p>

      <ScrollArrow onClick={onScrollToForm} />
    </section>
  );
}
