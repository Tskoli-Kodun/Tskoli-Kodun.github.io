import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kóðun",
  description: "Vefur fyrir Forritunarkeppni grunnskólanna.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'favicon.ico',
        href: 'favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon-dark.ico',
        href: 'favicon-dark.ico',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-dvh ${inter.className}`}>{children}</body>
    </html>
  );
}
