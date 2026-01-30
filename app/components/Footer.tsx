'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h2 className="text-lg font-semibold text-black mb-4">studyQ</h2>
            <p className="text-sm leading-relaxed text-black max-w-xs">
              Empowering Sri Lankan students with intelligent, accessible learning tools. Accessible anytime, anywhere. For anyone.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-black hover:text-gray-600 transition-colors duration-200">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-black hover:text-gray-600 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-5">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black hover:text-gray-600 transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <p className="text-black">
              © {currentYear} studyQ. All rights reserved.
            </p>
            <p className="text-black font-medium">
              Learning made smarter - Accessible anytime. Anywhere. For anyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}