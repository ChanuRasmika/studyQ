"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Solution() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Learning becomes efficient, affordable, and exam-focused.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          index = 0;
          setDisplayText('');
        }, 1000);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      title: "Practice Questions Multiple Times",
      description: "Reinforce your learning by practicing questions repeatedly",
      icon: "/Solution/rotate.png"
    },
    {
      title: "Study Mode and Exam Mode",
      description: "Switch between relaxed study sessions and timed exam practice",
      icon: "/Solution/exam.png"
    },
    {
      title: "Instant Answers and Explanations",
      description: "Get immediate feedback with detailed explanations",
      icon: "/Solution/light-bulb.png"
    },
    {
      title: "Study from Any Device, Anytime",
      description: "Learn without relying on physical books - access anywhere",
      icon: "/Solution/app.png"
    }
  ];

  return (
    <section id="about" className="py-8 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">
            A Smarter Way to Practice Questions
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            studyQ is a digital question-based learning app built for school and medical students, and powered by teachers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white border-2 border-gray-300 shadow-md hover:border-gray-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="mb-4 flex justify-center">
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={64} 
                  height={64} 
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
         <div className="mt-12 lg:mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl font-medium text-gray-800 leading-tight min-h-16">
            {displayText}<span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
