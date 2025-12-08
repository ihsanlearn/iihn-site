"use client"
import { motion } from "framer-motion"

export default function Writing() {
  const articles = [
    {
      title: "Building My Own Recon Automation Lab",
      date: "Dec 02, 2025",
      readTime: "7 min read",
      excerpt: "A personal journey documenting how I built my private lab for ethical hacking, focusing on real-world recon workflows and automation experiments.",
      category: "Lab Notes"
    },
    {
      title: "Why Strong Fundamentals Matter More Than Tools in Cybersecurity",
      date: "Nov 18, 2025",
      readTime: "5 min read",
      excerpt: "Reflecting on the importance of networking, Linux, and protocol understanding before jumping into advanced exploit techniques and fancy tools.",
      category: "Perspective"
    },
    {
      title: "Experimenting with Custom Burp Extensions using Python",
      date: "Oct 22, 2025",
      readTime: "9 min read",
      excerpt: "Documenting early experiments scripting Burp Suite extensions to speed up repetitive pentesting tasks and integrate with external recon tooling.",
      category: "Engineering"
    }
  ];

  return (
    <section id="writing" className="min-h-screen py-24 flex items-center justify-center">
      <div className="container px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-primary">Research & Writing</h2>
            <p className="text-foreground text-md md:text-lg">Thoughts on security research, engineering, and digital safety.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
                 >
                    <div className="aspect-[2/1] bg-muted relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                             <svg className="text-muted-foreground/40" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                        </div>
                        <span className="sr-only">Article cover image</span>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-xs">
                             <span className="font-mono text-foreground font-medium">{article.category}</span>
                             <span className="text-foreground">{article.date} · {article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-tertiary transition-colors line-clamp-2">
                            {article.title}
                        </h3>
                        <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                            {article.excerpt}
                        </p>
                    </div>
                 </motion.div>
            ))}
        </div>
        <div className="flex items-center mt-8">
            <a href="#writing" className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-2">
                View All Articles 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
      </div>
    </section>
  )
}
