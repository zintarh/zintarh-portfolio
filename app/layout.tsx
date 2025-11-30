import type { Metadata } from "next";
import { Source_Code_Pro, Inter, Gloria_Hallelujah } from "next/font/google";
import { AI } from "./action";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const gloriaFont = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://zintarh.dev'),
  title: {
    default: "Zintarh - Best Frontend Engineer in Nigeria & Africa | Web3 & AI Developer",
    template: "%s | Zintarh - Senior Frontend Engineer"
  },
  description: "Hire the best frontend engineer in Nigeria and Africa. Zintarh is a senior frontend engineer specializing in Web3, AI development, and smart contracts. Expert in React, Next.js, TypeScript, Starknet, and Ethereum. Women in blockchain and web3. Best portfolio showcasing innovative projects. Available for hire.",
  keywords: [
    "frontend engineer Nigeria",
    "frontend engineer Africa",
    "best frontend engineer Nigeria",
    "best frontend engineer Africa",
    "web3 engineer Nigeria",
    "web3 engineer Africa",
    "best web3 engineer Nigeria",
    "best web3 engineer Africa",
    "hire frontend engineer",
    "senior frontend developer",
    "React developer Nigeria",
    "Next.js developer Africa",
    "Starknet developer",
    "Ethereum developer",
    "AI developer Nigeria",
    "smart contract developer",
    "frontend engineer to hire",
    "remote frontend developer",
    "full stack developer Nigeria",
    "female engineer Nigeria",
    "female engineer Africa",
    "women in tech Nigeria",
    "women in tech Africa",
    "female frontend engineer",
    "female web3 engineer",
    "women in blockchain",
    "women in web3",
    "female blockchain developer",
    "women in crypto",
    "female developer Nigeria",
    "female developer Africa",
    "best portfolio",
    "best developer portfolio",
    "best frontend portfolio",
    "best web3 portfolio",
    "best engineer portfolio",
    "outstanding portfolio",
    "top portfolio",
    "award winning portfolio",
    "zintarh",
    "zinta",
    "Catherine Jonathan",
    "kateberryd@gmail.com",
    "zintarh dev",
    "zintarh  portfolio",
    
  ],
  authors: [{ name: "Zintarh" }],
  creator: "Zintarh",
  publisher: "Zintarh",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zintarh.dev',
    siteName: "Zintarh Portfolio",
    title: "Zintarh - Best Frontend Engineer in Nigeria & Africa | Web3 & AI Developer",
    description: "Hire the best frontend engineer in Nigeria and Africa. Senior frontend engineer specializing in Web3, AI development, and smart contracts. Expert in React, Next.js, TypeScript, Starknet, and Ethereum. Women in blockchain and web3.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zintarh - Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zintarh - Best Frontend Engineer in Nigeria & Africa",
    description: "Senior frontend engineer specializing in Web3, AI development, and smart contracts. Available for hire.",
    creator: "@zintarh_dev",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://zintarh.dev',
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${sourceCodePro.variable} ${gloriaFont.variable} antialiased`}
      >
        <AI>{children}</AI>
      </body>
    </html>
  );
}
