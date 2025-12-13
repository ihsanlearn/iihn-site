"use client"
import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
      {
      "role": "Web Developer Explorer",
      "company": "Personal Project",
      "period": "2022 - present",
      "description": "This phase involved dedicated exploration into web development, where I undertook self-initiated projects to learn new technologies and refine essential practical skills. My approach focused on crafting applications that deliver a security-aware development, functional user experience and adhere to fundamental design principles like responsiveness and attention to accessibility standards.",
      "technologies": [
        "React",
        "Laravel",
        "Next.js",
        "PostgreSQL",
        "REST APIs",

      ],
      "achievements": [
        "Built stable Single-Page Applications (SPAs) that required detailed state management.",
        "Designed accessible user interfaces, adhering to WCAG guidelines for inclusivity.",
        "Integrated proven authentication and authorization flows for securing user data."
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen py-24 flex items-center justify-center bg-background">
      <div className="container px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
        >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-primary">Web Journey</h2>
            <p className="text-foreground text-md md:text-lg max-w-2xl">
              A timeline of my technical journey, focusing on modern web technologies and secure application development.
            </p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-tertiary">{exp.role}</h3>
                  <p className="text-secondary-foreground font-medium">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-secondary-foreground w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4 max-w-3xl">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground font-medium border border-border/50 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
