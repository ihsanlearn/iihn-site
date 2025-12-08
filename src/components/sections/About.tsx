"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-separator/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">The Mind</h2>
            <div className="space-y-4 text-foreground text-lg leading-relaxed">
              <p>
                I am a passionate <span className="text-primary font-medium">Cybersecurity</span> and <span className="text-primary font-medium">Developer</span> based in Indonesia. My journey began with a curiosity about how systems break, which naturally evolved into learning how to build them stronger.
              </p>
              <p>
                With a background in both offensive security (Bug Bounty Hunting) and defensive engineering, I bridge the gap between security and development. I believe in security by design, not as an afterthought.
              </p>
              <p>
                Currently, I am pursuing my degree at <span className="text-primary font-medium">Universitas Sebelas Maret</span>, where I combine academic rigor with practical security research to solve real-world challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: true }}
             className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border group"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <p className="text-sm text-muted-foreground font-mono">IMAGE_PLACEHOLDER</p>
                <p className="text-xs text-muted-foreground mt-2">Alt: Ihsan portrait professional photo</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
