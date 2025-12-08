"use client"
import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero")

  const sections = [
    { id: "hero", label: "Hi" },
    { id: "about", label: "The Mind" },
    { id: "case-studies", label: "Experiences" },
    { id: "skills", label: "Focus Areas" },
    { id: "writing", label: "Writing" },
    { id: "contact", label: "Connect" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center justify-end gap-4"
        >
          <span 
            className={`text-xs font-medium transition-all duration-300 ${
              activeSection === section.id 
              ? "opacity-100 translate-x-[-8px] scale-125 text-primary" 
              : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground"
            }`}
          >
            {section.label}
          </span>
          <div 
            className={`h-2 w-2 rounded-full transition-all duration-300 border border-primary/50 ${
                activeSection === section.id ? "bg-primary scale-150" : "bg-transparent hover:bg-primary/50"
            }`} 
          />
        </a>
      ))}
    </div>
  )
}
