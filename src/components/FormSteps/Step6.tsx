import { ArrowRight } from 'lucide-react';
import { FormData } from '../../types';

const CALL_TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening'];

interface Step6Props {
  formData: FormData;
  submitting: boolean;
  onSelect: (callTime: string) => void;
  onSubmit: () => void;
}

export default function Step6({ formData, submitting, onSelect, onSubmit }: Step6Props) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex items-center gap-1 font-semibold text-sm pt-1 shrink-0" style={{ color: '#F26522' }}>
        <span>6</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-base mb-4" style={{ color: '#1A2A4A' }}>
          What time would you like to be called?
          <span className="text-red-500 ml-1">*</span>
        </p>
        <div className="flex flex-col gap-2">
          {CALL_TIME_OPTIONS.map((option, i) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="flex items-center gap-3 border rounded-md px-4 py-3 text-left text-sm font-medium transition-all"
              style={formData.callTime === option
                ? { borderColor: '#1E4FA0', backgroundColor: '#EEF2F8', color: '#1A2A4A' }
                : { borderColor: '#cbd5e1', backgroundColor: 'white', color: '#475569' }}
            >
              <span className="w-7 h-7 rounded border flex items-center justify-center text-xs font-bold shrink-0"
                style={{ borderColor: '#cbd5e1', backgroundColor: '#f8fafc', color: '#64748b' }}>
                {i + 1}
              </span>
              {option}
            </button>
          ))}
        </div>

        {formData.callTime && (
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
