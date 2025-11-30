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
  title: "Zintarh | Senior Frontend Engineer (AI & Web3",
  description: "Made with Next.js, Tailwind CSS, and TypeScript",
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
