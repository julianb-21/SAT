import { ArrowRight, Check } from 'lucide-react';
import { FormData } from '../../types';

interface Step1Props {
  formData: FormData;
  isActive: boolean;
  onSelect: (isParent: boolean) => void;
  onNext: () => void;
}

export default function Step1({ formData, isActive, onSelect, onNext }: Step1Props) {
  return (
    <div className="flex items-start gap-3 md:gap-4 mb-6">
      <div className="flex items-center gap-1 font-semibold text-sm pt-1 shrink-0" style={{ color: '#F26522' }}>
        <span>1</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-lg md:text-base mb-4 leading-snug" style={{ color: '#1A2A4A' }}>
          Are you the parent or a student?
          <span className="text-red-500 ml-1">*</span>
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => onSelect(true)}
            className="flex items-center gap-3 border rounded-md px-4 py-3.5 text-left text-base md:text-sm font-medium transition-all"
            style={formData.isParent === true
              ? { borderColor: '#1E4FA0', backgroundColor: '#EEF2F8', color: '#1A2A4A' }
              : { borderColor: '#cbd5e1', backgroundColor: 'white', color: '#475569' }}
          >
            <span className="w-7 h-7 rounded border flex items-center justify-center text-xs font-bold shrink-0"
              style={{ borderColor: '#cbd5e1', backgroundColor: '#f8fafc', color: '#64748b' }}>
              1
            </span>
            Yes, I am the parent/guardian
          </button>
          <button
            onClick={() => onSelect(false)}
            className="flex items-center gap-3 border rounded-md px-4 py-3.5 text-left text-base md:text-sm font-medium transition-all"
            style={formData.isParent === false
              ? { borderColor: '#ef4444', backgroundColor: '#fef2f2', color: '#b91c1c' }
              : { borderColor: '#cbd5e1', backgroundColor: 'white', color: '#475569' }}
          >
            <span className="w-7 h-7 rounded border flex items-center justify-center text-xs font-bold shrink-0"
              style={{ borderColor: '#cbd5e1', backgroundColor: '#f8fafc', color: '#64748b' }}>
              2
            </span>
            No, I am the student
          </button>
        </div>

        {formData.isParent === false && (
          <p className="mt-4 text-red-600 text-sm font-medium">
            This offer is for parents/guardians only. Please have a parent fill this out.
          </p>
        )}

        {isActive && formData.isParent === true && (
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
