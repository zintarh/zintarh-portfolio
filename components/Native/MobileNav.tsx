"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, GitBranch, MessageCircle, Code2, Menu, X, Mail,  } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/opensource", label: "Open Source", icon: GitBranch },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/ask", label: "Chat", icon: MessageCircle },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden group"
        aria-label="Toggle menu"
        style={{ marginTop: 'env(safe-area-inset-top)' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg group-hover:bg-primary/30 transition-all"></div>
          <div className="relative p-3.5 rounded-2xl bg-background/90 backdrop-blur-xl border-2 border-primary/30 group-hover:border-primary/50 transition-all shadow-2xl">
            {isOpen ? (
              <X size={22} className="text-primary relative z-10" />
            ) : (
              <Menu size={22} className="text-primary relative z-10" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-md transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 z-45 h-full w-56
          bg-gradient-to-br from-background via-background/98 to-background/95
          backdrop-blur-2xl border-l-2 border-primary/20
          shadow-2xl
          transform transition-all duration-500 ease-out
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          md:hidden
        `}
      >
        {/* Header with Glow Effect */}
        <div className="relative p-4 border-b border-border/50">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent"></div>
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md"></div>
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-foreground flex items-center gap-2">
                Zintarh
              </div>
              <div className="text-[10px] text-foreground/50 font-medium">Portfolio</div>
            </div>
          </div>
        </div>

        <div className="p-3 pt-4">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group relative flex items-center gap-3 px-3 py-3 rounded-xl
                    transition-all duration-300 overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30 shadow-md shadow-primary/10" 
                      : "text-foreground/70 hover:text-foreground hover:bg-background/50 border border-transparent"
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-sm"></div>
                  )}
                  
                  {/* Icon */}
                  <div className={`
                    relative w-9 h-9 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${isActive 
                      ? "bg-primary/20 scale-110" 
                      : "bg-background/50 group-hover:bg-primary/10 group-hover:scale-110"
                    }
                  `}>
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : ""}`} />
                  </div>
                  
                  {/* Label */}
                  <span className={`font-semibold text-sm relative z-10 ${isActive ? "text-primary" : ""}`}>
                    {item.label}
                  </span>

                  {/* Hover effect */}
                  <div className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/50">
          <div className="text-center">
            <div className="text-[10px] text-foreground/40 font-medium">
              © 2024 Zintarh
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
