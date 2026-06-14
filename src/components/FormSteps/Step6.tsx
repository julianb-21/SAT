import { CalendarDays } from 'lucide-react';

export default function Step6() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2F8' }}>
        <CalendarDays className="w-7 h-7" style={{ color: '#1E4FA0' }} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-black mb-2" style={{ color: '#1A2A4A' }}>
        Last step — book your free call!
      </h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">
        Pick a time that works for you and we'll talk through your student's SAT gameplan.
      </p>
      <a
        href="https://calendly.com/langleyprep/extra-help-zoom-sessions?month=2026-06&date=2026-06-15"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full py-4 text-white font-black text-lg rounded-xl shadow-lg transition-all hover:opacity-90 hover:shadow-xl active:scale-95 tracking-wide"
        style={{ backgroundColor: '#F26522' }}
      >
        Schedule My Free Strategy Call →
      </a>
    </div>
  );
}
