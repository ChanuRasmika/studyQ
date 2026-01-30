'use client';

import Image from 'next/image';
import { getAssetPath } from '@/lib/basePath';

export default function WhyStudyQSection() {
  return (
    <section className="w-full pt-8 pb-10 lg:pt-12 lg:pb-15 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 space-y-8 lg:space-y-10">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Why studyQ?
            </h2>
            
            <div className="border border-gray-300 rounded-xl p-6 lg:p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                Students often encounter challenges such as…
              </h3>
              <ul className="space-y-4">
                {[
                  "Having to spends too much money on multiple question books.",
                  "Questions are practice once and forgotten.",
                  "No instant feedback or performance tracking.",
                  "No flexibility to revise or repeat.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <div className="mt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                    </div>
                    <span className="text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="border border-gray-300 rounded-xl p-6 lg:p-8 bg-white shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">
                Teachers face different but painful problems…
              </h3>
              <ul className="space-y-4">
                {[
                  "Teachers create quality questions with limited reach.",
                  "No scalable way to earn digitally.",
                  "No insight on student performance.",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-gray-700">
                    <div className="mt-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                    </div>
                    <span className="text-base">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-120 lg:min-h-155">
              <Image
                src={getAssetPath("/whyImage.jpg")}
                alt="studyQ helping students and teachers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 text-center max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl font-medium text-gray-800 leading-tight">
            studyQ solves these problems.
          </p>
        </div>
      </div>
    </section>
  );
}