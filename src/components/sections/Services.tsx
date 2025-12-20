"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/LanguageContext"

export default function Services() {
  const { language } = useLanguage()

  const labels = {
    en: {
      headline: "Collaborate With Me",
      subheadline: "Looking for a custom web solution? I can help you build your digital presence.",
      cta: "Start a Project",
      services: [
        {
          title: "Portfolio Website",
          description: "Showcase your work and skills with a professional, high-performance portfolio. Custom designed to reflect your personal brand and make a lasting impression on potential employers or clients."
        },
        {
          title: "Landing Page",
          description: "Convert visitors into customers with a high-impact landing page. Optimized for performance and user experience, focusing on clear messaging and strong calls to action."
        },
        {
          title: "Company Profile",
          description: "Establish trust and credibility with a modern company profile website. Clear information architecture, professional aesthetics, and seamless navigation to tell your company's story."
        }
      ]
    },
    id: {
      headline: "Kolaborasi Dengan Kami",
      subheadline: "Mencari solusi web kustom? Kami dapat membantu membangun website Anda.",
      cta: "Start Project",
      services: [
        {
          title: "Website Portofolio",
          description: "Tampilkan karya dan keahlian Anda dengan portofolio profesional berkinerja tinggi. Dirancang khusus untuk mencerminkan kualitas Anda dan memberikan kesan mendalam pada calon pemberi kerja atau klien."
        },
        {
          title: "Landing Page",
          description: "Ubah pengunjung menjadi pelanggan dengan landing page yang berdampak tinggi. Dioptimalkan untuk kinerja dan pengalaman pengguna, berfokus pada pesan yang jelas dan ajakan bertindak yang kuat."
        },
        {
          title: "Profil Perusahaan",
          description: "Bangun kepercayaan dan kredibilitas dengan website profil perusahaan yang modern. Arsitektur informasi yang jelas, estetika profesional, dan navigasi yang mulus untuk menceritakan kisah perusahaan Anda."
        }
      ]
    }
  }

  const content = labels[language]

  const RocketIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
  )

  const servicesWithIcons = [
    {
      ...content.services[0],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
      )
    },
    {
      ...content.services[1],
      icon: RocketIcon
    },
    {
      ...content.services[2],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
      )
    }
  ]


  return (
    <section id="services" className="min-h-[50vh] py-24 flex items-center justify-center relative">
      <div className="container px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 text-center flex flex-col items-center"
        >
            <div className="mb-4 flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">{content.headline}</h2>
            </div>
            
            <p className="text-foreground text-md md:text-lg max-w-2xl mx-auto">
              {content.subheadline}
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {servicesWithIcons.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors flex flex-col items-start group"
            >
              <div className="mb-4 md:mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-tertiary">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
        >
             <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-lg shadow-lg hover:bg-primary/90 hover:scale-105 transition-all">
                {content.cta}
             </a>
        </motion.div>
      </div>
    </section>
  )
}
