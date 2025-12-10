"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { flushSync } from "react-dom"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }

const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
  const previousTheme = theme
  const newTheme = previousTheme === "dark" ? "light" : "dark"

  if (!document.startViewTransition) {
    setTheme(newTheme)
    return
  }

  const x = e.clientX
  const y = e.clientY

  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    flushSync(() => {
      setTheme(newTheme)
    })
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]

    document.documentElement.animate(
      {
        clipPath: clipPath,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  })
}


  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full bg-background/80 p-3 shadow-lg border border-border backdrop-blur-sm transition-all hover:bg-muted"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-5 w-5 top-3 left-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
    </button>
  )
}
