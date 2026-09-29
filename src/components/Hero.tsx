import React from 'react'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center">
      <div className="container max-w-5xl py-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-2 text-sm muted"><Crown size={15} className="text-gold" aria-hidden="true" /> Web Developer | Front-End Developer | UI/UX-Focused Developer</p>
          <h1 className="hero-title mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            I Build Modern, Responsive Websites <span className="hero-title-accent">That Turn Ideas Into Digital Experiences.</span>
          </h1>
          <p className="mt-6 muted max-w-2xl">I'm Taki Sunday, a Web Developer and Front-End Developer focused on creating responsive, user-friendly and visually polished websites for businesses, startups and individuals.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="button-motion px-5 py-3 border border-slate-700 rounded text-slate-100">Contact Me</a>
            <a href="/Taki-Sunday-CV.pdf" className="button-motion px-4 py-2 border border-slate-700 rounded text-sm flex items-center gap-2" download>
              Download CV
            </a>
          </div>
          {/* Place your CV file at: public/Taki-Sunday-CV.pdf (project root public folder). */}
        </motion.div>
      </div>
    </section>
  )
}
