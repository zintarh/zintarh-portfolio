"use client";

import React from "react";
import {  Pencil, Trash2 } from "lucide-react";
import { suggestions } from "@/lib/constants";
import Link from "next/link";

export type ConversationItem = {
  id: string;
  title: string;
  selected?: boolean;
};

type ChatSidebarProps = {
  conversations: ConversationItem[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  handleChange: (prompt: string) => void;
  onNewChat?: () => void;
  onSelectConversation?: (id: string) => void;
  onRenameConversation?: (id: string) => void;
  onDeleteConversation?: (id: string) => void;
  onSettings?: () => void;
  onLogout?: () => void;
};

export default function ChatSidebar({
  collapsed = false,
  onRenameConversation,
  onDeleteConversation,
  handleChange
}: ChatSidebarProps) {
  return (
    <aside
      className={
        collapsed
          ? "w-[64px] h-screen border-r border-border bg-background flex flex-col"
          : "w-[280px] h-screen border-r border-border bg-background flex flex-col"
      }
    >
      <div className="p-3 border-b border-border flex items-center gap-2">
        {!collapsed && (
          <Link href="/"
            className="flex-1 inline-flex items-center gap-2 h-9 px-3 rounded-lg"
          >
            <span className="text-xl text-primary font-medium">
              Zintarh&apos;s <span className="text-foreground">Portfolio</span>
            </span>
          </Link>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-5  pt-5 px-4">
        <p className="text-bold text-sm text-foreground/80 px-2">
          Quick Actions
        </p>

        {suggestions.map((c, id) => (
          <div key={id}>
            <button
              onClick={ () => handleChange(c)}
              className="flex rounded-full border-2 border-border hover:bg-black hover:border-black px-3 py-3 items-center gap-2 flex-1 text-left"
            >
              {!collapsed && (
                <span className="text-base truncate" title={c}>
                  {c}
                </span>
              )}
            </button>
            {!collapsed && (
              <div className="hidden group-hover:flex items-center gap-1">
                <button
                  onClick={() =>
                    onRenameConversation && onRenameConversation(c)
                  }
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border-2 border-border hover:bg-background"
                  aria-label="Rename"
                >
                  <Pencil size={14} />
                </button>
                <button
                  onClick={() =>
                    onDeleteConversation && onDeleteConversation(c)
                  }
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border-2 border-border hover:bg-background"
                  aria-label="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
