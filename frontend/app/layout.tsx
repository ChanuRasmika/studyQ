import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "studyQ",
  description: "Smarter Question Practice. Better Exam Results.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
