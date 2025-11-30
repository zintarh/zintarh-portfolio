"use client";
import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, Send, Linkedin, Twitter, MessageSquare, ArrowRight } from "lucide-react";
import FloatingNav from "@/components/Native/FloatingNav";
import MobileNav from "@/components/Native/MobileNav";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      label: "Email",
      value: "kateberryd@gmail.com",
      href: "mailto:kateberryd@gmail.com",
      description: "For collaborations and inquiries",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      value: "zintarh-dev",
      href: "https://www.linkedin.com/in/zintarh-dev",
      description: "Professional network",
      color: "text-foreground",
      bgColor: "bg-background/50",
    },
    {
      id: "twitter",
      icon: Twitter,
      label: "X (Twitter)",
      value: "@zintarh_dev",
      href: "https://x.com/zintarh_dev",
      description: "Quick updates and thoughts",
      color: "text-foreground",
      bgColor: "bg-background/50",
    },
    {
      id: "telegram",
      icon: MessageSquare,
      label: "Telegram",
      value: "@zintarh",
      href: "https://t.me/zintarh",
      description: "Direct messaging",
      color: "text-foreground",
      bgColor: "bg-background/50",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden relative">
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <FloatingNav />
      </div>
      <MobileNav />

      <div className="p-4 sm:p-6 lg:p-8 md:ml-24 bg-gradient-to-br from-background via-background/95 to-background/90 bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat relative overflow-y-auto min-h-screen">
        <div className="absolute inset-0 bg-background/30 -z-10"></div>
        
        <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Hero Section */}
          <div className="mb-12 pt-8 sm:pt-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-background/80 border border-border backdrop-blur-sm">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Let&apos;s Connect
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-foreground/50 text-sm">Always open to collaborations</span>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              I&apos;m always excited to discuss new projects, collaborations, or just chat about technology. 
              Whether you&apos;re looking to build something amazing or want to connect, I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.id}
                  href={method.href}
                  target={method.id !== "email" ? "_blank" : undefined}
                  rel={method.id !== "email" ? "noopener noreferrer" : undefined}
                  className="group relative p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm hover:bg-background/70 hover:border-border transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onMouseEnter={() => setHoveredCard(method.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${method.color}`} />
                    </div>
                    <ArrowRight className={`w-5 h-5 text-foreground/40 transition-all duration-300 ${
                      hoveredCard === method.id ? "translate-x-1 opacity-100" : "translate-x-0 opacity-0"
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.label}</h3>
                  <p className="text-foreground/90 font-medium mb-2">{method.value}</p>
                  <p className="text-sm text-foreground/60">{method.description}</p>
                  {hoveredCard === method.id && (
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl -z-10"></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mb-12">
            <div className="p-8 rounded-2xl bg-background/50 border border-border backdrop-blur-sm text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Send className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Ready to Build Together?</h3>
              </div>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                I&apos;m particularly interested in AI-powered applications, Web3 infrastructure, 
                and projects that make technology more accessible. Let&apos;s create something amazing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:kateberryd@gmail.com"
                  className="px-6 py-3 rounded-xl bg-background border-2 border-border hover:bg-background/80 hover:border-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Send Email</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/ask"
                  className="px-6 py-3 rounded-xl bg-background/50 border-2 border-border hover:bg-background/80 transition-all duration-300 flex items-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Chat with AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card Section */}
          {/* <div className="pb-12">
            <Contact />
          </div> */}
        </div>
      </div>
    </main>
  );
}
