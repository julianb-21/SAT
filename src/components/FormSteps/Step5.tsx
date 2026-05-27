import { ArrowRight } from 'lucide-react';
import { FormData, SCORE_OPTIONS } from '../../types';

interface Step5Props {
  formData: FormData;
  submitting: boolean;
  onSelect: (score: string) => void;
  onSubmit: () => void;
}

export default function Step5({ formData, submitting, onSelect, onSubmit }: Step5Props) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex items-center gap-1 font-semibold text-sm pt-1 shrink-0" style={{ color: '#F26522' }}>
        <span>5</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-base mb-4" style={{ color: '#1A2A4A' }}>
          What is your student's current SAT score (or closest estimate)?
          <span className="text-red-500 ml-1">*</span>
        </p>
        <div className="flex flex-col gap-2">
          {SCORE_OPTIONS.map((score, i) => (
            <button
              key={score}
              onClick={() => onSelect(score)}
              className="flex items-center gap-3 border rounded-md px-4 py-3 text-left text-sm font-medium transition-all"
              style={formData.currentScore === score
                ? { borderColor: '#1E4FA0', backgroundColor: '#EEF2F8', color: '#1A2A4A' }
                : { borderColor: '#cbd5e1', backgroundColor: 'white', color: '#475569' }}
            >
              <span className="w-7 h-7 rounded border flex items-center justify-center text-xs font-bold shrink-0"
                style={{ borderColor: '#cbd5e1', backgroundColor: '#f8fafc', color: '#64748b' }}>
                {i + 1}
              </span>
              {score}
            </button>
          ))}
        </div>

        {formData.currentScore && (
          <button
            onClick={onSubmit}
            disabled={submitting}
            className="mt-6 w-full py-4 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-lg rounded-xl shadow-lg transition-all hover:opacity-90 hover:shadow-xl active:scale-95 tracking-wide"
            style={{ backgroundColor: '#F26522' }}
          >
            {submitting ? 'Submitting...' : 'Claim My Free Strategy Call →'}
          </button>
        )}
      </div>
    </div>
  );
}
