// lib/projects.ts

import { ProjectData } from "./types";

const projects: ProjectData[] = [
  {
    title: "Zintarh - Conversational AI Portfolio",
    description:
      "A generative UI portfolio powered by the Vercel AI SDK. It acts as a conversational assistant to guide visitors through my work in AI and Web3.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "Tailwind CSS",
      "OpenAI",
    ],
    category: "AI",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Zintarh+Portfolio",
  },
  {
    title: "Project Chimera - AI Code Generation Tool",
    description:
      "An AI-powered web application that helps developers generate boilerplate code with context-aware, real-time suggestions.",
    techStack: ["Next.js", "TypeScript", "LangChain.js", "Monaco Editor"],
    category: "AI",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Project+Chimera",
  },
  {
    title: "Aura Protocol - Decentralized Identity",
    description:
      "A Web3 platform for managing digital identity using decentralized identifiers (DIDs) and verifiable credentials on the Ceramic Network.",
    techStack: ["React", "Ethers.js", "The Graph", "Ceramic", "Tailwind CSS"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Aura+Protocol",
  },
  {
    title: "Nexus Chat - Decentralized Messaging dApp",
    description:
      "A fully decentralized, end-to-end encrypted messaging application built on the XMTP protocol for secure wallet-to-wallet communication.",
    techStack: ["Vite", "React", "XMTP", "RainbowKit", "Wagmi"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Nexus+Chat",
  },
  {
    title: "Artifex AI - Generative Art NFT Minter",
    description:
      "A dApp where users write prompts, generate unique AI art via Stable Diffusion, and mint it directly as an NFT on the Polygon network.",
    techStack: ["Next.js", "Hardhat", "Thirdweb", "Stable Diffusion API"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=Artifex+AI",
  },
  {
    title: "QuantumLeap - NFT Market Analytics",
    description:
      "A data visualization dashboard providing real-time analytics and trend prediction for NFT collections using The Graph and a custom AI model.",
    techStack: ["SvelteKit", "D3.js", "The Graph", "GraphQL"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=QuantumLeap+Analytics",
  },
  {
    title: "AgoraDAO - On-Chain Governance UI",
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
    title: "DocuBot - RAG Documentation Chatbot",
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
    title: "CypherTrade - AI Trading Bot Interface",
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
    title: "PermaStore - Decentralized Storage Gateway",
    description:
      "A user-friendly web interface for uploading, pinning, and managing files on decentralized storage networks like IPFS and Arweave.",
    techStack: ["Vue.js", "Pinata API", "Arweave.js"],
    category: "Web3",
    liveDemoUrl: "#",
    githubUrl: "#",
    imageUrl:
      "https://via.placeholder.com/800x450/0D1117/8B5CF6?text=PermaStore+Gateway",
  },
  // Example tutoring/education project
  {
    title: "SheBuilds Academy - Mentorship & Tutoring Platform",
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
