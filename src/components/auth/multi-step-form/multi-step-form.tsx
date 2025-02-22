'use client';

import { useState } from 'react';

import StepOne from './step-one';
import { Progress } from '@/components/ui/progress';
import StepTwo from './step-two';
import StepThree from './step-three';
import { useAction } from 'next-safe-action/hooks';
import { RegisterAccount } from '@/server/actions/register';
import { useRouter } from 'next/navigation';
import { RegisterSchema } from '@/types/register-schema';
import { z } from 'zod';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast"

export default function MultiStepForm() {
  const { toast } = useToast()

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    role: '',
    password: '',
  });

  const handleNextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const progressValue = (currentStep / 3) * 100;

  const stepText = () => {
    switch (currentStep) {
      case 1:
        return 'Step 1 - Create Account';
      case 2:
        return 'Step Two - Role Selection';
      case 3:
        return 'Step Three - Create Password';
      default:
        return '';
    }
  };

  const router = useRouter();

  const { execute } = useAction(RegisterAccount, {
    onSuccess(data) {
      if (data.data?.error) {
          toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: (data.data.error)
        })
        router.push('/login');
      } else if (data.data?.success) {
        toast({
          description: (data.data?.success)
        })
        router.push('/login');
      }
    },
  });
  const finalSubmit = (values: z.infer<typeof RegisterSchema>) => {
    execute(values);
  };

  return (
    <div className="flex w-2/3 flex-col p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold">{stepText()}</h1>
        <Progress value={progressValue} className="h-2" />
      </div>

      <div className="mx-auto flex w-full max-w-md flex-grow flex-col justify-center">
        {currentStep === 1 && <StepOne onNext={handleNextStep} formData={formData} />}
        {currentStep === 2 && <StepTwo onNext={handleNextStep} onBack={handlePreviousStep} formData={formData} />}
        {currentStep === 3 && <StepThree onBack={handlePreviousStep} handleSubmit={finalSubmit} formData={formData} />}
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
