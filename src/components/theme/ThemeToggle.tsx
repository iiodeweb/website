"use client"

import { useRouter } from "next/navigation"
import { useTransition } from "react"

import type { Theme } from "@/lib/theme"

type ThemeToggleProps = {
  theme: Theme
  labels: {
    light: string
    dark: string
  }
}

export function ThemeToggle({ theme, labels }: ThemeToggleProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.classList.toggle("dark", nextTheme === "dark")
        startTransition(async () => {
          await fetch("/api/theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ theme: nextTheme }),
          })
          router.refresh()
        })
      }}
      disabled={isPending}
      className="rounded-full border border-foreground/30 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-foreground/70 transition hover:border-foreground hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? labels.light : labels.dark}
    </button>
  )
}
