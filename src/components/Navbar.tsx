import React from 'react'
import { Menu, X, Download } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur transition-colors ${scrolled ? 'bg-slate-900/95 border-b border-slate-700' : 'bg-transparent'}`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg">Taki Sunday</a>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
          <a href="/Taki-Sunday-CV.pdf" className="button-motion ml-2 px-3 py-2 border border-slate-700 rounded flex items-center gap-2 text-sm" download>
            <Download size={14} /> Download CV
          </a>
          <a href="#contact" className="button-motion ml-4 px-4 py-2 bg-indigo-600 text-white rounded">Contact</a>
        </nav>

        <button className="md:hidden min-h-11 min-w-11 p-2" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Menu />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex md:hidden"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="ml-auto w-[min(18rem,85vw)] bg-slate-900 h-full p-6"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
              <button className="mb-6 min-h-11 min-w-11 p-2" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
              <ul className="flex flex-col gap-4">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center py-2">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/Taki-Sunday-CV.pdf" onClick={() => setOpen(false)} className="button-motion inline-flex items-center gap-2 px-4 py-2 border border-slate-700 rounded">
                    <Download size={14} /> Download CV
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setOpen(false)} className="button-motion inline-block px-4 py-2 bg-indigo-600 text-white rounded">Contact</a>
                </li>
              </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
