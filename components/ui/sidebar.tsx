"use client";
import React, { useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface SidebarLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  links: SidebarLink[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ links, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Menu Button - In Header, Left side, Center height */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 -translate-y-1/2 left-6 z-50 p-2 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <IconX className="w-6 h-6 text-black dark:text-white" />
        ) : (
          <IconMenu className="w-6 h-6 text-black dark:text-white" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-white/80 dark:bg-black/80 backdrop-blur-md border-r border-zinc-200 dark:border-zinc-800 z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <nav className="flex flex-col gap-2 px-4">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.href)}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-colors duration-200 text-left font-medium"
            >
              {link.icon && <span className="w-5 h-5">{link.icon}</span>}
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
