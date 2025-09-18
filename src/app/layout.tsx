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
  title: "Hair by Grace - Professional Hair Salon in Los Angeles",
  description:
    "Professional hair salon in Los Angeles specializing in cuts, coloring, extensions, and styling. Over 30 years of experience with international training from Korea, Japan, UK, and USA. 20% off all chemical services.",
  icons: {
    icon: "/hair-by-grace-logo.png",
    apple: "/hair-by-grace-logo.png",
  },
  keywords: [
    "hair salon Los Angeles",
    "hair extensions",
    "balayage",
    "ombre",
    "keratin treatment",
    "digital perm",
    "hair coloring",
    "professional stylist",
    "Korean hair stylist",
    "Hobart Blvd salon",
  ],
  authors: [{ name: "Hair by Grace" }],
  creator: "Hair by Grace",
  publisher: "Hair by Grace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hairbygrace.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hair by Grace - Professional Hair Salon in Los Angeles",
    description:
      "Professional hair salon in Los Angeles specializing in cuts, coloring, extensions, and styling. Over 30 years of experience with international training.",
    url: "https://hairbygrace.com",
    siteName: "Hair by Grace",
    images: [
      {
        url: "/haircut-sample-01.jpg",
        width: 1200,
        height: 630,
        alt: "Hair by Grace - Professional Hair Styling",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair by Grace - Professional Hair Salon in Los Angeles",
    description:
      "Professional hair salon in Los Angeles specializing in cuts, coloring, extensions, and styling. Over 30 years of experience with international training.",
    images: ["/haircut-sample-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
