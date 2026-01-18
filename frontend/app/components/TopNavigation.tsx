'use client';

import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#feature' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export default function TopNavigation() {
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white backdrop-blur border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="flex items-center gap-2">
          <img src="/android-chrome-192x192.png" alt="studyQ" className="w-16 h-16" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Sign in
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Sign Up Free
          </Link>
        </div>

      </div>
    </nav>
  );
}
