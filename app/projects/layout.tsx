import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Projects - Web3 & AI Development Portfolio",
  description: "Explore Zintarh's portfolio of innovative Web3 and AI projects. Expert frontend engineer in Nigeria and Africa building cutting-edge applications on Starknet, Ethereum, and modern AI platforms.",
  keywords: [
    "frontend projects Nigeria",
    "web3 projects Africa",
    "AI projects portfolio",
    "Starknet projects",
    "Ethereum projects",
    "React projects",
    "Next.js projects",
    "best portfolio",
    "female engineer portfolio",
    "women in blockchain projects",
    "women in web3 projects",
    "female developer projects"
  ],
  openGraph: {
    title: "Projects - Zintarh Portfolio",
    description: "Explore innovative Web3 and AI projects by Zintarh, best frontend engineer in Nigeria and Africa.",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

