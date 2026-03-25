"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-4 z-50 mx-auto w-[min(1180px,calc(100%-20px))] rounded-full border border-white/10 px-4 py-3 transition-all duration-300 md:px-6",
        scrolled
          ? "bg-[rgba(7,17,14,0.88)] shadow-halo backdrop-blur-xl"
          : "bg-[rgba(7,17,14,0.42)] backdrop-blur-md"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-[#C5963E]/30 bg-[#C5963E]/12 text-sm font-bold text-[#F6D28E]">
            BB
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-[#F6D28E]">BichoBet</div>
            <div className="text-xs uppercase tracking-[0.24em] text-[#A9B2A6]">premium entertainment</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#D5D0C2] transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#waitlist">
          <Button size="sm">Entrar na lista</Button>
        </a>
      </div>
    </header>
  );
}
