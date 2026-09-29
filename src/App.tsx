import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Process from './components/Process'
import Experience from './components/Experience'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLoading(false)
      return
    }

    const timeoutId = window.setTimeout(() => setLoading(false), 1750)
    return () => window.clearTimeout(timeoutId)
  }, [])

  React.useEffect(() => {
    const sections = document.querySelectorAll('main > section, footer')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.documentElement.classList.add('motion-ready')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="portfolio-shell antialiased text-slate-100 bg-slate-900">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="intro-screen"
            aria-label="Loading portfolio"
            role="status"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          >
            <svg className="intro-crown" viewBox="0 0 96 80" fill="none" aria-hidden="true">
              <path d="M10 23 27 39 38 13l10 27 12-27 10 26 16-16-9 43H19L10 23Z" />
              <path d="M20 58h58M24 69h50" />
              <circle cx="10" cy="19" r="3" />
              <circle cx="38" cy="9" r="3" />
              <circle cx="60" cy="9" r="3" />
              <circle cx="85" cy="19" r="3" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Why />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
