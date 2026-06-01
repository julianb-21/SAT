import { useState } from 'react';
import { Check } from 'lucide-react';
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goNext = (from: Step) => {
    setCurrentStep((from + 1) as Step);
  };

  const handleStep1Next = () => { if (formData.parentName.trim()) goNext(1); };
  const handleStep2Next = () => { if (formData.email.trim()) goNext(2); };
  const handleStep3Next = () => { if (formData.phone.trim()) goNext(3); };
  const handleStep4Next = () => { if (formData.currentScore) goNext(4); };

  const handleSubmit = async () => {
    if (!formData.callTime) return;
    setSubmitting(true);
    try {
      await supabase.from('sat_leads').insert({
        parent_name: formData.parentName,
        student_name: formData.studentName,
        email: formData.email,
        phone: formData.phone,
        current_sat_score: formData.currentScore,
        call_time: formData.callTime,
      });
      setSubmitted(true);
    } catch {
      // silent fail
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center px-3 pt-12 pb-10 md:px-4 md:py-10 font-body"
      style={{ background: 'linear-gradient(160deg, #C8D8EF 0%, #AABFE6 100%)' }}
    >
      {submitted ? (
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-10 text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#D9E4F5' }}>
            <Check className="w-8 h-8" style={{ color: '#1E4FA0' }} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-black mb-3" style={{ color: '#1A2A4A' }}>You're on the list!</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We'll be in touch shortly to schedule your free 30-minute SAT Strategy Call. Check your inbox!
          </p>
        </div>
      ) : (
        <div className="max-w-2xl w-full">
          <Step2
            formData={formData}
            isActive={currentStep === 1}
            onChange={setField}
            onNext={handleStep1Next}
          />

          {currentStep >= 2 && (
            <Step3
              formData={formData}
              isActive={currentStep === 2}
              onChange={setField}
              onNext={handleStep2Next}
            />
          )}

          {currentStep >= 3 && (
            <Step4
              formData={formData}
              isActive={currentStep === 3}
              onChange={setField}
              onNext={handleStep3Next}
            />
          )}

          {currentStep >= 4 && (
            <Step5
              formData={formData}
              isActive={currentStep === 4}
              onSelect={(score) => setField('currentScore', score)}
              onNext={handleStep4Next}
            />
          )}

          {currentStep >= 5 && (
            <Step6
              formData={formData}
              submitting={submitting}
              onSelect={(callTime) => setField('callTime', callTime)}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      )}
    </section>
  );
}
