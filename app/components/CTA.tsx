'use client';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4 leading-tight">
          Start Smarter Learning Today
        </h2>
        <p className="text-xl text-gray-700 mb-6">
          Stop depending on physical books. Start practicing the smart way.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform">
          Sign Up Free
        </button>
      </div>
    </section>
  );
}
