"use client"

import { motion } from 'framer-motion';

import { SiKalilinux, SiWireshark, SiOwasp, SiLinux, SiPython, SiGnubash } from 'react-icons/si';
import { FaShieldAlt, FaNetworkWired, FaBug, FaKey, FaSearch, FaUserSecret, FaTerminal, FaBomb } from 'react-icons/fa';
import { SectionTitle } from './SectionTitle';

export default function Skills() {
  const skills = [
    { name: "Network Security", icon: FaNetworkWired, color: "#0077B5", bg: "#E1F5FE" },
    { name: "Penetration Testing", icon: FaUserSecret, color: "#D32F2F", bg: "#FFEBEE" },
    { name: "Linux Administration", icon: SiLinux, color: "#000000ff", bg: "#FFF9C4" }, // Linux often associated with yellow/black (Tux) or just terminal colors
    { name: "Python for Security", icon: SiPython, color: "#3776AB", bg: "#E3F2FD" },
    { name: "Bash Scripting", icon: SiGnubash, color: "#4EAA25", bg: "#E8F5E9" },
    { name: "Wireshark", icon: SiWireshark, color: "#1679A7", bg: "#E1F5FE" },
    { name: "Burp Suite", icon: FaBug, color: "#FF6633", bg: "#FBE9E7" },
    { name: "Metasploit", icon: FaBomb, color: "#1B6AC6", bg: "#E3F2FD" },
    { name: "Kali Linux", icon: SiKalilinux, color: "#557C94", bg: "#E0F7FA" },
    { name: "Cryptography", icon: FaKey, color: "#9C27B0", bg: "#F3E5F5" },
    { name: "OWASP Top 10", icon: SiOwasp, color: "#000000", bg: "#F5F5F5" },
    { name: "Digital Forensics", icon: FaSearch, color: "#00BCD4", bg: "#E0F7FA" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="md:py-16 rounded-lg shadow-lg mb-16 px-6">
      <SectionTitle
        title="My Skills"
        subtitle="These are the tools and technologies I've learned and applied in real-world projects."
      />
      <motion.div
        className="flex flex-wrap justify-center md:gap-4 gap-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.span
              key={index}
              className="md:text-lg text-sm px-3 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer flex items-center gap-2"
              style={{ backgroundColor: skill.bg, color: skill.color }}
              variants={itemVariants}
            >
              {IconComponent && <IconComponent className="md:text-2xl text-xl" />}
              {skill.name}
            </motion.span>
          );
        })}
      </motion.div>
    </section>
  )
}