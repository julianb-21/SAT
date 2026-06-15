import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { FormData, Step } from '../types';
import Step2 from './FormSteps/Step2';
import Step3 from './FormSteps/Step3';
import Step4 from './FormSteps/Step4';
import Step5 from './FormSteps/Step5';
import Step6 from './FormSteps/Step6';

interface FormSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

export default function FormSection({ sectionRef }: FormSectionProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    currentScore: '',
    callTime: '',
  });

  const setField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = (from: Step) => {
    setCurrentStep((from + 1) as Step);
  };

  const handleStep1Next = () => { if (formData.parentName.trim()) goNext(1); };
  const handleStep2Next = () => { if (formData.email.trim()) goNext(2); };
  const handleStep3Next = () => { if (formData.phone.trim()) goNext(3); };

  const handleStep4Next = async (score: string) => {
    const updatedData = { ...formData, currentScore: score };
    setFormData(updatedData);
    try {
      await supabase.from('sat_leads').insert({
        parent_name: updatedData.parentName,
        student_name: updatedData.studentName,
        email: updatedData.email,
        phone: updatedData.phone,
        current_sat_score: score,
        call_time: '',
      });
    } catch {
      // silent fail — still advance to Calendly
    }
    goNext(4);
  };

  return (
    <div ref={sectionRef}>
      {/* Progress bar — flush at the section boundary */}
      <div className="w-full h-1.5" style={{ backgroundColor: '#D1D5DB' }}>
        <div
          className="h-1.5 transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / 4) * 100}%`,
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

          {currentStep === 3 && (
            <Step4
              formData={formData}
              isActive
              onChange={setField}
              onNext={handleStep3Next}
            />
          )}

          {currentStep === 4 && (
            <Step5
              formData={formData}
              isActive
              onSelect={(score) => setField('currentScore', score)}
              onNext={() => handleStep4Next(formData.currentScore)}
            />
          )}

          {currentStep === 5 && <Step6 />}
        </div>
      </section>
    </div>
  );
}
