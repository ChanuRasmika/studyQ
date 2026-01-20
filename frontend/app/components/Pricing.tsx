"use client";

import { useState, useEffect } from 'react';

export default function Pricing() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'No pressure. Learn your way.';

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

 const plans = [
  {
    name: "Free",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "",
    buttonText: "Sign Up Free",
    buttonClass: "bg-gray-800 hover:bg-gray-900 text-white",
    features: [
      "Access to 100+ questions",
      "Study Mode for guided learning",
      "Basic performance tracking",
      "Limited access to instant answers and explanations",
      "Use on any device",
      "No payment required"
    ],
  },
  {
    name: "Plus",
    subtitle: "For unlimited access and features",
    price: "$9.99",
    period: "/month",
    buttonText: "Upgrade Now",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
    features: [
      "Unlimited question practice",
      "Study Mode and Exam Mode",
      "Detailed performance analytics",
      "Unlimited access to instant answers and explanations",
      "Continuous content updates",
      "Best value for long-term learners"
    ],
  },
  {
    name: "One-Time Purchase",
    subtitle: "Pay once for selected content",
    price: "Custom",
    period: "",
    buttonText: "View Options",
    buttonClass: "bg-gray-800 hover:bg-gray-900 text-white",
    features: [
      "Lifetime access to selected question sets",
      "No subscriptions or recurring fees",
      "Ideal for focused revision",
      "Instant access after purchase",
    ],
  },
];


  return (
    <section id="pricing" className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Simple & Flexible Pricing
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            studyQ is designed to be affordable for all students and fair for teachers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8 border-2 border-gray-200 shadow-lg bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-300"
            >

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>

                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-xl font-medium text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>

              <ul className="mt-8 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl sm:text-3xl font-medium text-gray-800 leading-tight min-h-16">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}