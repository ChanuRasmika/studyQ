import type { Metadata } from "next";
import { getAssetPath } from "@/lib/basePath";
import "./globals.css";

export const metadata: Metadata = {
  title: "studyQ",
  description: "Smarter Question Practice. Better Exam Results.",
  icons: {
    icon: getAssetPath("/favicon-32x32.png"),
  },
  viewport: "width=device-width, initial-scale=1",
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
