import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative bg-background">
      <ScrollProgress />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Experience />
      <Writing />
      <Contact />
    </main>
  );
}