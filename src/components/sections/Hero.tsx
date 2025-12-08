"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase">
              Security Researcher & Developer
            </h2>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">
              Securing the digital <br className="hidden md:block" />
              <span className="text-muted-foreground">infrastructure.</span>
            </h1>
            <p className="max-w-xl text-md md:text-lg text-muted-foreground leading-relaxed">
              I specialize in ethical hacking, vulnerability assessment, and building secure, resilient systems for the modern web.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a 
              href="#case-studies"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Case Studies
            </a>
            <a 
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Connect With Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
