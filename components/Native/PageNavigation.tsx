"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, GitBranch, MessageCircle } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/opensource", label: "Open Source", icon: GitBranch },
  { href: "/contact", label: "Contact", icon: MessageCircle },
  { href: "/ask", label: "Chat", icon: MessageCircle },
];

export default function PageNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 p-2 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-background border border-border text-foreground"
                : "text-foreground/70 hover:text-foreground hover:bg-background/50"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

