import { ArrowRight, Check } from 'lucide-react';
import { FormData, INPUT_CLASS } from '../../types';

interface Step2Props {
  formData: FormData;
  isActive: boolean;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}

export default function Step2({ formData, isActive, onChange, onNext }: Step2Props) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="flex items-center gap-1 font-semibold text-sm pt-1 shrink-0" style={{ color: '#F26522' }}>
        <span>2</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-base mb-4" style={{ color: '#1A2A4A' }}>
          What are your names?
          <span className="text-red-500 ml-1">*</span>
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your name (parent/guardian)"
            value={formData.parentName}
            onChange={(e) => onChange('parentName', e.target.value)}
            className={INPUT_CLASS}
          />
          <input
            type="text"
            placeholder="Your student's name"
            value={formData.studentName}
            onChange={(e) => onChange('studentName', e.target.value)}
            className={INPUT_CLASS}
          />
        </div>
        {isActive && (
          <button
            onClick={onNext}
            disabled={!formData.parentName.trim() || !formData.studentName.trim()}
            className="mt-5 px-6 py-2.5 text-white font-bold rounded-md flex items-center gap-2 text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#1E4FA0' }}
          >
            OK <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
