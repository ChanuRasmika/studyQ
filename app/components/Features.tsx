'use client';

import Image from "next/image";

const features = [
  {
    icon: "/Features/open-book.png",
    title: "Digital Question Practice",
    description: "No physical books. All questions available digitally and always updated.",
  },
  {
    icon: "/Features/time-tracking.png",
    title: "Study Mode & Exam Mode",
    description: "Learn step-by-step or test yourself under real exam conditions.",
  },
  {
    icon: "/Features/lightning.png",
    title: "Instant Answers & Explanations",
    description: "Understand mistakes immediately and improve faster.",
  },
  {
    icon: "/Features/analysis.png",
    title: "Performance Analytics",
    description: "Track strengths, weaknesses, and progress clearly.",
  },
  {
    icon: "/Features/teacher.png",
    title: "Teacher Contributions",
    description: "Teachers create questions and earn while reaching more students.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden
                         hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out h-full flex flex-col"
            >
              <div className="p-7 pb-2 flex items-center gap-4 border-b border-gray-100 bg-gray-50/70">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              <div className="px-7 pt-3 pb-7 grow">
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}