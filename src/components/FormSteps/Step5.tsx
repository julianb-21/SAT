import { ArrowRight, Check } from 'lucide-react';
import { FormData, SCORE_OPTIONS } from '../../types';

interface Step5Props {
  formData: FormData;
  isActive: boolean;
  onSelect: (score: string) => void;
  onNext: () => void;
}

export default function Step5({ formData, isActive, onSelect, onNext }: Step5Props) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex items-center gap-1 font-semibold text-sm pt-1 shrink-0" style={{ color: '#F26522' }}>
        <span>4</span>
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

        {isActive && formData.currentScore && (
          <button
            onClick={onNext}
            className="mt-5 px-6 py-2.5 text-white font-bold rounded-md flex items-center gap-2 text-sm transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#1E4FA0' }}
          >
            OK <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
