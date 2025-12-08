"use client"
import { motion } from "framer-motion"

export default function Skills() {
    return (
      <section id="skills" className="min-h-screen flex items-center justify-center bg-separator/30 group">
        <div className="container px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-primary">Technical Focus Areas</h2>
            <p className="text-foreground text-md md:text-lg">My proficiency across different security domains and development stacks.</p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Skills */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               viewport={{ once: true }}
               className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-tertiary">Core Competencies</h3>
              </div>
               <ul className="space-y-3">
                  {[
                      "Web Application Penetration Testing & Bug Hunting", 
                      "Vulnerability Assessment & Exploit Research", 
                      "Scripting & Automation", 
                      "Technical Documentation & Reporting",
                      "Open Source Tools Development"
                  ].map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {skill}
                      </li>
                  ))}
               </ul>
            </motion.div>
  
            {/* Tools */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               viewport={{ once: true }}
               className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-tertiary">Tools & Stack</h3>
              </div>
               <div className="flex flex-wrap gap-2">
                 {[
                      "Burp Suite/Caido", 
                      "Python", "Go (Golang)", "Next.js", "TypeScript", 
                      "Docker", "AWS (Basic)", "Linux (Kali/Debian)"
                  ].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-secondary-foreground font-medium border border-border/50">
                          {tool}
                      </span>
                  ))}
               </div>
            </motion.div>
  
            {/* Currently Learning */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               viewport={{ once: true }}
               className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                </div>
                <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-tertiary">Still learning</h3>
              </div>
               <ul className="space-y-3">
                  {[
                      "Advanced Web Application Security", 
                      "Network Traffic Forensics", 
                      "Reverse Engineering"
                  ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                           <div className="h-2 w-2 rounded-full border border-primary" />
                          {item}
                      </li>
                  ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
