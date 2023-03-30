import { Router, useRouter } from 'next/router';
import { useCoffeeContext } from '@/hooks/useCoffeeContext';
import { useCallback, useEffect, useState } from 'react';

const steps = [
  {
    step: 1,
    name: 'Menu',
    url: '/',
  },
  {
    step: 2,
    name: 'Resume',
    url: '/resume',
  },
  {
    step: 3,
    name: 'Total',
    url: '/total',
  },
];

const Steps = () => {
  const router = useRouter();

  const { step, handleChangeStep, order } = useCoffeeContext();

  const calculatePercentage = () => {
    let percentage = (step / steps.length) * 100;
    return percentage;
  }

  useEffect(()=>{
    switch(router.pathname){
      case '/': handleChangeStep(1);
        break;
      case '/resume': handleChangeStep(2);
        break;
      case '/total': handleChangeStep(3);
        break;
    };
  },[router.pathname, handleChangeStep]);


  return (
    <>
        <div className="w-full flex justify-between">
        {steps.map((step) => (
            <div
            key={step.step}
            className="text-center w-full transition-all hover:bg-[var(--orange)]"
            >
            <button
                onClick={() => {
                handleChangeStep(step.step);
                router.push(step.url);
                }}
                disabled={step.step === 3 && order.length === 0}
                className="p-4 font-medium w-full disabled:cursor-not-allowed"
            >
                {step.name}
            </button>
            </div>
        ))}
        </div>
        <div className="bg-white border-b-2 border-[var(--orange)] h-1" style={{ width: calculatePercentage() + '%' }}>

        </div>
    </>
  );
};

export default Steps;
