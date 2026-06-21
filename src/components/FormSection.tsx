import { useState } from 'react';
import { FormData, Step } from '../types';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step6 from './FormSteps/Step6';

interface FormSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function FormSection({ sectionRef }: FormSectionProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
  });

  const setField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleStep1Next = () => {
    if (formData.parentName.trim()) setCurrentStep(2);
  };

  const handleStep2Next = async () => {
    if (!formData.email.trim()) return;
    try {
      const { supabase } = await import('../lib/supabase');
      await supabase.from('sat_leads').insert({
        parent_name: formData.parentName,
        email: formData.email,
      });
    } catch {
      // silent fail — still advance to Calendly
    }
    setCurrentStep(3);
  };

  return (
    <div ref={sectionRef}>
      {/* Progress bar */}
      <div className="w-full h-1.5" style={{ backgroundColor: '#D1D5DB' }}>
        <div
          className="h-1.5 transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / 2) * 100}%`,
            backgroundColor: '#C24E0A',
          }}
        />
      </div>

      <section
        className="flex items-center justify-center px-3 pt-12 pb-10 md:px-4 md:py-10 font-body"
        style={{ background: 'linear-gradient(160deg, #C8D8EF 0%, #AABFE6 100%)' }}
      >
        <div className="max-w-2xl w-full">
          {currentStep === 1 && (
            <Step2
              formData={formData}
              isActive
              onChange={setField}
              onNext={handleStep1Next}
            />
          )}

          {currentStep === 2 && (
            <Step3
              formData={formData}
              isActive
              onChange={setField}
              onNext={handleStep2Next}
            />
          )}

          {currentStep === 3 && <Step6 />}
        </div>
      </section>
    </div>
  );
}
