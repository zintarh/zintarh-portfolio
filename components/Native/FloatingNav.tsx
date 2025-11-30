"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, GitBranch, MessageCircle, Code2, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home, color: "text-primary" },
  { href: "/projects", label: "Projects", icon: FolderKanban, color: "text-foreground" },
  { href: "/opensource", label: "Open Source", icon: GitBranch, color: "text-foreground" },
  { href: "/contact", label: "Contact", icon: MessageCircle, color: "text-foreground" },
  { href: "/ask", label: "Chat", icon: MessageCircle, color: "text-primary" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-expand on hover, collapse after delay
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (hoveredIndex !== null) {
      setIsExpanded(true);
    } else {
      timeout = setTimeout(() => setIsExpanded(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [hoveredIndex]);

  return (
    <nav
      className="relative w-auto"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`
        relative flex flex-col items-center gap-3 p-3 rounded-2xl
        bg-background/80 backdrop-blur-xl border border-border/50
        shadow-2xl transition-all duration-500 ease-out
        ${isExpanded ? "w-56" : "w-16"}
      `}>
        {/* Logo/Brand */}
        <div className="flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          {isExpanded && (
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-foreground whitespace-nowrap">
                Zintarh
              </div>
              <div className="text-xs text-foreground/50 whitespace-nowrap">
                Portfolio
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className={`w-full h-px bg-border/50 transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`} />

        {/* Nav Items */}
        <div className="flex flex-col gap-2 w-full">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group relative flex items-center gap-3 px-3 py-2.5 rounded-xl
                  transition-all duration-300 overflow-hidden
                  ${isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/70 hover:text-foreground hover:bg-background/50"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
                
                {/* Icon */}
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                  transition-all duration-300
                  ${isActive 
                    ? "bg-primary/20 scale-110" 
                    : "bg-background/50 group-hover:bg-primary/10 group-hover:scale-110"
                  }
                `}>
                  <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                </div>
                
                {/* Label */}
                {isExpanded && (
                  <span className={`
                    text-sm font-medium whitespace-nowrap transition-all duration-300
                    ${isActive ? "text-primary" : ""}
                  `}>
                    {item.label}
                  </span>
                )}

                {/* Hover glow effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-primary/5 rounded-xl -z-10" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

