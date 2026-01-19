'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { type: 'heading', text: 'How studyQ Works' },
  { type: 'step', number: 1, text: 'Sign Up' },
  { type: 'description', text: 'Create a free account in minutes.' },
  { type: 'step', number: 2, text: 'Choose Your Subject & Mode' },
  { type: 'description', text: 'Select study mode or exam mode.' },
  { type: 'step', number: 3, text: 'Practice Questions' },
  { type: 'description', text: 'Repeat, review, and improve with instant feedback.' },
  { type: 'step', number: 4, text: 'Track Progress or Earn' },
  { type: 'description', text: 'Students track performance. Teachers earn from content.' },
] as const;

type Step = (typeof STEPS)[number];

const getDelayAfterLine = (step: Step): number => {
  if (step.type === 'heading') return 1800;
  if (step.type === 'step') return 1400;
  if (step.type === 'description') return 1000;
  return 1200;
};

const getTypingSpeed = (step: Step): number => {
  if (step.type === 'heading') return 80;
  if (step.type === 'step') return 90;
  return 65;
};

export default function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<Step[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentStep = STEPS[currentIndex];

  const startTyping = useCallback(() => {
    setCurrentText('');
    setIsTyping(true);

    let charIndex = 0;
    intervalRef.current = setInterval(() => {
      charIndex++;
      setCurrentText(currentStep.text.slice(0, charIndex));

      if (charIndex >= currentStep.text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsTyping(false);
        setDisplayedLines((prev) => [...prev, currentStep]);

        timeoutRef.current = setTimeout(() => {
          const nextIndex = (currentIndex + 1) % STEPS.length;
          if (nextIndex === 0) {
           
            setDisplayedLines([]);
          }
          setCurrentIndex(nextIndex);
        }, getDelayAfterLine(currentStep));
      }
    }, getTypingSpeed(currentStep));
  }, [currentStep, currentIndex]);

  useEffect(() => {
    startTyping();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startTyping]);

  const getLineClass = (step: Step) => {
    switch (step.type) {
      case 'heading':
        return 'text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight text-center';
      case 'step':
        return 'text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-4 mt-8';
      case 'description':
        return 'text-lg sm:text-xl text-gray-700 leading-relaxed pl-10 sm:pl-12 max-w-3xl';
      default:
        return '';
    }
  };

  return (
    <section className="py-8 md:py-12 bg-linear-to-b">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">    
        <div className="rounded-2xl overflow-hidden border border-gray-200/70 bg-white shadow-xl shadow-gray-300/30">
          <div className="h-10 sm:h-11 bg-linear-to-b from-gray-100 to-gray-200 flex items-center px-4 gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-3 text-xs sm:text-sm text-gray-600 font-medium">
              studyQ - How It Works
            </div>
          </div>
          
          <div className="px-8 sm:px-12 md:px-16 lg:px-20 py-8 md:py-12 min-h-96 md:min-h-120 flex items-center justify-center bg-white">
            <div className="w-full max-w-4xl space-y-3 md:space-y-4">
              <AnimatePresence initial={false}>
                {displayedLines.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={getLineClass(step)}
                  >
                    {step.type === 'step' && (
                      <span className="text-3xl sm:text-4xl font-black text-gray-900 min-w-6 sm:min-w-8">
                        {step.number}
                      </span>
                    )}
                    <span>{step.text}</span>
                  </motion.div>
                ))}

                {isTyping && (
                  <div className={getLineClass(currentStep)}>
                    {currentStep.type === 'step' && (
                      <span className="text-3xl sm:text-4xl font-black text-gray-900 min-w-6 sm:min-w-8">
                        {currentStep.number}
                      </span>
                    )}
                    <span>
                      {currentText}
                      <span className="animate-pulse text-gray-900/70 ml-1 font-normal">|</span>
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}