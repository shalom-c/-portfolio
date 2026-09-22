import React from 'react'
import { Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-700">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div>
          <div className="font-semibold">Taki Sunday</div>
          <div className="text-sm muted">Web Developer | Front-End Developer</div>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="font-medium">Quick Links</div>
          <ul className="mt-2 text-sm muted">
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="mt-4 md:mt-0 text-sm muted">
          <div>Email: <a href="mailto:shalomtakisunday@gmail.com">shalomtakisunday@gmail.com</a></div>
          <div className="mt-2">Socials:
            <ul className="mt-2">
              <li>
                <a href="https://github.com/shalom-c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <Github size={14} aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shalom-taki-sunday-a54a00305/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 mt-4 text-sm muted">© 2026 Taki Sunday. All rights reserved.</div>
      </div>
    </footer>
  )
}
