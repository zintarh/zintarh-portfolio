// lib/projects.ts

import { ProjectData } from "./types";

const projects: ProjectData[] = [
  {
    title: "Coloniz - Horuslabs",
    description: "Your Colony, Your Universe - Community ",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Starknet React",
      "Cairo",
      "AI",
    ],
    category: "web3",
    liveDemoUrl: "https://coloniz.xyz/",
    githubUrl: "#",
    imageUrl: "",
  },
  {
    title: "Starknet Tokenbound SDK - Horuslabs",
    description:
      "A front-end SDK for Starknet that gives NFTs their own smart wallets using ERC-6551. This allows NFTs to execute transactions, own other tokens (ERC-20/721/1155), and sign messages, just like a standard wallet.",
    techStack: ["TypeScript", "Starknet.js"],
    category: "web3",
    liveDemoUrl:
      "https://www.npmjs.com/package/starknet-tokenbound-sdk?activeTab=readme",
    githubUrl:
      "https://www.npmjs.com/package/starknet-tokenbound-sdk?activeTab=readme",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Project+Chimera",
  },

  {
    title: "TBA Explorer - Horuslabs",
    description:
      "A ”Token Bound Account” is a smart contract account, controlled by an NFT. It can do everything a normal wallet can do and is compatible with every NFT you already own.",
    techStack: ["Next.js", "Typescript", "Starknet.js", "Tailwind CSS"],
    category: "Web3",
    liveDemoUrl: "https://www.tbaexplorer.com/",
    githubUrl: "https://www.tbaexplorer.com/",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Aura+Protocol",
  },

  {
    title: "Evenly",
    description:
      "Split group bills without stress. Create a group, add bills, clear your share in one go on starknet",
    techStack: ["Nextjs", "Typescript", "Starknet React", "Caavos"],
    category: "Web3",
    liveDemoUrl: "https://evenlyy.vercel.app/",
    githubUrl: "https://evenlyy.vercel.app/",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Nexus+Chat",
  },

  {
    title: "Zintarh AI",
    description:
      " Zintarh, the personal portfolio of an AI and Web3 builder. It's an interactive space where you can explore my projects and ask my AI assistant to guide you through my work and skills",
    techStack: ["Nextjs", "Typescript", "AI", "Vercel AI SDK"],
    category: "AI",
    liveDemoUrl: "https://zintarh.vercel.app/",
    githubUrl: "https://github.com/zintarh/zintarh-portfolio",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Artifex+AI",
  },
  {
    title: "Dissertation Scaffold",
    description:
      "Dissertation Scaffold is an AI-powered platform that streamlines academic research. It analyzes research proposals or dissertation topics against six core academic metrics for a comprehensive evaluation, then uses that analysis to generate the full proposal or dissertation",
    techStack: ["Nextjs", "Tailwind CSS", "AI"],
    category: "ai",
    liveDemoUrl: "https://dessertscaffold.vercel.app/",
    githubUrl: "https://github.com/zintarh/dessertscaffold",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=QuantumLeap+Analytics",
  },
  {
    title: "Fundable - Opensource",
    description:
      "A user-friendly interface for a decentralized autonomous organization (DAO) to create proposals, vote, and view treasury data in real-time.",
    techStack: ["React", "Snapshot.js", "Ethers.js", "Aragon"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=AgoraDAO+Portal",
  },
  {
    title: "Artpiece - Opensource",
    description:
      "A retrieval-augmented generation (RAG) chatbot trained on technical whitepapers, allowing users to ask complex questions in natural language.",
    techStack: ["Next.js", "Vercel AI SDK", "Pinecone", "LangChain.js"],
    category: "AI",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=DocuBot+RAG",
  },
  {
    title: "Fortichain - Opensource",
    description:
      "A sleek, real-time dashboard to monitor, manage, and backtest automated cryptocurrency trading strategies powered by an AI backend.",
    techStack: ["Remix", "Zustand", "TradingView Charts"],
    category: "AI",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=CypherTrade+UI",
  },
  {
    title: "StarkScaffold - Opensource",
    description:
      "A user-friendly web interface for uploading, pinning, and managing files on decentralized storage networks like IPFS and Arweave.",
    techStack: ["Vue.js", "Pinata API", "Arweave.js"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=PermaStore+Gateway",
  },
  {
    title: "StarkFinder - Opensource",
    description:
      "A platform that connects female developers with mentors for learning Web3, AI, and technical skills through guided tutoring sessions.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    category: "Tutoring",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=SheBuilds+Academy",
  },

  {
    title: "Medialano - Opensource",
    description:
      "A platform that connects female developers with mentors for learning Web3, AI, and technical skills through guided tutoring sessions.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    category: "Tutoring",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=SheBuilds+Academy",
  },
];

export const getProjects = (): ProjectData[] => projects;
