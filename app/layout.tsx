import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poppins_extrabold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
});

const poppins_bold = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "Ultimate PR",
  description:
    "Track & Analyse Your Gym PRs fast & simple. The ultimate app for tracking your fitness progress and personal records.",
  twitter: {
    card: "summary_large_image",
    site: "https://ultimatepr.app/",
    title: "Ultimate PR - Track Your Gym Progress",
    description:
      "Track & Analyse Your Gym PRs fast & simple. The ultimate app for tracking your fitness progress and personal records.",
    images: "/twitter-image.png",
  },
  openGraph: {
    title: "Ultimate PR - Track Your Gym Progress",
    description:
      "Track & Analyse Your Gym PRs fast & simple. The ultimate app for tracking your fitness progress and personal records.",
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://ultimatepr.app/" />
        <meta
          name="twitter:title"
          content="Ultimate PR - Track Your Gym Progress"
        />
        <meta
          name="twitter:description"
          content="Track & Analyse Your Gym PRs fast & simple. The ultimate app for tracking your fitness progress and personal records."
        />
        <meta name="twitter:image" content="/twitter-image.png" />
      </Head>
      <body
        className={`${poppins.variable} ${poppins_extrabold.variable} ${poppins_bold.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
