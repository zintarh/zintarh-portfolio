import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Open Source Contributions - Starknet, Ethereum, Stellar, Optimism",
  description: "Zintarh's open source contributions: 116+ merged pull requests, 38+ projects across Ethereum, Starknet, Stellar, and Optimism ecosystems. OnlyDust Fellow contributing to decentralized technology.",
  keywords: [
    "open source contributions Nigeria",
    "Starknet contributions",
    "Ethereum contributions",
    "OnlyDust fellow",
    "open source developer Africa",
    "blockchain contributions",
    "women in blockchain",
    "women in web3",
    "female blockchain developer",
    "female open source contributor",
    "women contributing to blockchain"
  ],
  openGraph: {
    title: "Open Source Contributions - Zintarh",
    description: "116+ merged pull requests, 38+ projects across 4 major blockchain ecosystems.",
  },
}

export default function OpensourceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

