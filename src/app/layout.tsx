import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shira's Cakes - Custom Cakes & Baking in Plano, TX",
  description: "Professional custom cakes, cupcakes, cookies, and baking workshops by Shira Tzur. Serving Plano, TX and surrounding areas. Specializing in weddings, birthdays, and special occasions.",
  keywords: "custom cakes, wedding cakes, birthday cakes, cupcakes, cookies, baking workshops, Plano TX, Dallas area, cake designer, baker",
  authors: [{ name: "Shira Tzur" }],
  creator: "Shira Tzur",
  publisher: "Shira's Cakes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shirascakes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shira's Cakes - Custom Cakes & Baking in Plano, TX",
    description: "Professional custom cakes, cupcakes, cookies, and baking workshops by Shira Tzur. Serving Plano, TX and surrounding areas.",
    url: 'https://shirascakes.com',
    siteName: "Shira's Cakes",
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: "Shira's Cakes Logo",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Shira's Cakes - Custom Cakes & Baking in Plano, TX",
    description: "Professional custom cakes, cupcakes, cookies, and baking workshops by Shira Tzur.",
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
