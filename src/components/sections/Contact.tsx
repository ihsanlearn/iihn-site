"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/LanguageContext"

export default function Contact() {

  const { language } = useLanguage()

  const labels = {
    en: {
      headline: "Let's Secure the Future",
      subheadline: "I'm always open to discussing new opportunities, security assessments, or collaboration on website projects.",
      cta: "Send an Email",
      github: "Github",
    },
    id: {
      headline: "Let's Secure the Future",
      subheadline: "Kami selalu terbuka untuk diskusi tentang peluang baru atau kolaborasi pada proyek website portfolio, landing page, atau profil perusahaan.",
      cta: "Kirim Email",
      github: "Github",
    }
  }

  const content = labels[language]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary/30 relative">
       {/* Decorative gradient */}
       <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/80 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-primary">{content.headline}</h2>
             <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
               {content.subheadline}
             </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
             <a href="mailto:iihsannlearn@gmail.com" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-tertiary text-primary-foreground font-medium text-md md:text-lg flex items-center justify-center shadow-lg hover:bg-tertiary/90 hover:scale-105 transition-all">
                {content.cta}
             </a>
             <a href="https://github.com/ihsanlearn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-card border border-input text-foreground font-medium text-lg flex items-center justify-center shadow-sm hover:bg-accent hover:border-primary/30 transition-all">
                {content.github}
             </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-16 mt-16 border-t border-border"
          >
             <p className="text-sm text-muted-foreground">
               &copy; {new Date().getFullYear()} Ihsan Restu Adi
             </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
