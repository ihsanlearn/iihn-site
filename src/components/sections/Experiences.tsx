"use client"
import { motion } from "framer-motion"

export default function CaseStudies() {
    const projects = [
      {
        title: "Internal Penetration Testing Lab Development",
        problem: "Needed a safe and controlled environment to practice real-world exploitation workflows.",
        approach: "Configured a multi-VM lab environment using Kali Linux and intentionally vulnerable applications to simulate real attack surfaces.",
        tools: ["Burp Suite", "OWASP ZAP", "DVWA", "Kali Linux"],
        result: "Successfully performed end-to-end testing workflow including reconnaissance, vulnerability assessment, exploitation, and post-exploitation in a legal environment.",
        caseStudyLink: "#"
      },
      {
        title: "Automated Recon & Enumeration Workflow",
        problem: "Manual recon for CTF and bug bounty learning was slow and inconsistent.",
        approach: "Built a modular CLI tool to automate subdomain discovery, HTTP probing, screenshot capture, and technology fingerprinting.",
        tools: ["Go (Golang)", "Python", "Nmap", "Subfinder", "httpx"],
        result: "Reduced asset discovery time from hours to minutes with standardized output and expandable modules.",
        caseStudyLink: "#"
      },
      {
        title: "Secure Authentication & Role-Based Access Web App",
        problem: "Needed a platform to learn secure system design and security hardening for modern applications.",
        approach: "Developed a multi-role system with secure authentication, database RLS policies, and session protection mechanisms.",
        tools: ["Next.js", "TypeScript", "Supabase Auth", "PostgreSQL"],
        result: "Implemented RBAC and RLS rule sets that prevent privilege escalation and unauthorized access.",
        caseStudyLink: "#"
      }
    ]
  
    return (
      <section id="case-studies" className="min-h-screen py-24 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Experiences</h2>
            <p className="text-foreground max-w-2xl">
              Deep dives into security challenges, architectural decisions, and measurable outcomes.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                 <div className="aspect-video mb-6 rounded-xl bg-muted w-full flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4">
                        <svg className="mx-auto mb-2 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                        <span className="text-xs text-muted-foreground">Project preview mockup</span>
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-xl text-tertiary font-bold">{project.title}</h3>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">The Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
  
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Approach</h4>
                    <p className="text-sm text-muted-foreground">{project.approach}</p>
                  </div>
                  
                  <div className="pt-2">
                     <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Result</h4>
                     <p className="text-sm font-medium text-muted-foreground">{project.result}</p>
                  </div>
                </div>
  
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-[10px] font-mono px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1">
                    Read Full Study 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
