"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code2,
  Briefcase,
  History,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, profile } from "@/lib/portfolio-data";

const iconMap = {
  home: Home,
  user: User,
  code: Code2,
  briefcase: Briefcase,
  history: History,
  mail: Mail,
} as const;

export function Sidebar() {
  const [active, setActive] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 inset-x-0 z-40 lg:hidden glass-strong border-b border-border">
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => handleClick("hero")}
            className="flex items-center gap-2 font-semibold"
            aria-label="Ir al inicio"
          >
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-brand text-primary-foreground font-bold text-sm">
              G
            </span>
            <span className="text-sm">{profile.firstName}</span>
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid place-items-center h-10 w-10 rounded-lg bg-surface-2 text-foreground hover:bg-surface-3 transition"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 inset-x-0 z-40 lg:hidden glass-strong border-b border-border p-3"
          >
            <nav className="grid gap-1">
              {navItems.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
                      active === item.id
                        ? "bg-brand/15 text-brand"
                        : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop vertical sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-20 flex-col items-center justify-between py-8 z-30">
        <button
          onClick={scrollTop}
          className="grid place-items-center h-12 w-12 rounded-2xl bg-brand text-primary-foreground font-bold shadow-lg glow-sm hover:scale-105 transition"
          aria-label="Volver arriba"
        >
          GC
        </button>

        <nav className="flex flex-col items-center gap-2">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="group relative grid place-items-center h-12 w-12 rounded-xl transition"
                aria-label={item.label}
              >
                <span
                  className={cn(
                    "absolute inset-0 rounded-xl transition",
                    isActive ? "bg-brand/15" : "group-hover:bg-surface-2"
                  )}
                />
                <Icon
                  className={cn(
                    "relative h-5 w-5 transition",
                    isActive
                      ? "text-brand"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-brand" />
                )}
                <span className="absolute left-full ml-3 px-2.5 py-1.5 rounded-md bg-surface-3 text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition shadow-lg z-50 border border-border">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center h-10 w-10 rounded-xl bg-surface-2 text-muted-foreground hover:text-brand hover:bg-surface-3 transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center h-10 w-10 rounded-xl bg-surface-2 text-muted-foreground hover:text-brand hover:bg-surface-3 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </aside>

      {/* Floating scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            className="fixed bottom-6 right-6 z-30 grid place-items-center h-12 w-12 rounded-full bg-brand text-primary-foreground shadow-xl glow hover:scale-110 transition"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
