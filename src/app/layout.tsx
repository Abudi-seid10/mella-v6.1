import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/ui/SkipLink";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import ServiceWorkerProvider from "@/components/providers/ServiceWorkerProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mella Counseling Center - Professional Mental Health Care in Ethiopia",
  description: "Professional mental health counseling services in Addis Ababa, Ethiopia. Individual therapy, couples counseling, art therapy, and virtual sessions. Licensed therapists providing compassionate, culturally sensitive care.",
  keywords: [
    "mental health",
    "counseling",
    "therapy",
    "Ethiopia",
    "Addis Ababa",
    "psychotherapy",
    "couples counseling",
    "individual therapy",
    "art therapy",
    "virtual counseling",
    "licensed therapists",
    "mental wellness",
    "Adolescent Counseling",
    "Online Counseling",
    "Art Therapy"
  ],
  authors: [{ name: "Mella Counseling Center" }],
  creator: "MoTech Solutions",
  publisher: "Mella Counseling Center",
  robots: "index, follow",
  openGraph: {
    title: "Mella Counseling Center - Your Path to Mental Wellness",
    description: "Professional mental health counseling services with licensed therapists in Ethiopia. Start your healing journey today.",
    type: "website",
    locale: "en_US",
    siteName: "Mella Counseling Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mella Counseling Center - Professional Mental Health Care",
    description: "Compassionate mental health services in Ethiopia. Licensed professionals ready to support your wellness journey.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/mella_white.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mella" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <ServiceWorkerProvider>
          <SkipLink href="#main-content">Skip to main content</SkipLink>
          <SkipLink href="#navigation">Skip to navigation</SkipLink>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </ServiceWorkerProvider>
      </body>
    </html>
  );
}
