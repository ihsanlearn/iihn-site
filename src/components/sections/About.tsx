"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-separator/30">
      <div className="container py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">The Mind</h2>
            <div className="space-y-4 text-foreground text-md md:text-lg leading-relaxed">
              <p>
                I’m a passionate <span className="text-primary font-medium">Cybersecurity</span> enthusiast and <span className="text-primary font-medium">Developer</span>, focused on building and breaking systems to make technology safer.
                Blending experience in offensive security and secure engineering, I specialize in designing solutions where security is built in from the start.
              </p>
              <p>
                Currently studying at <span className="text-primary font-medium">Universitas Sebelas Maret</span> while conducting practical cyber research and tackling real-world security challenges.
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
