import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-wire'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-teal text-sm font-medium tracking-widest hover:opacity-70 transition-opacity duration-200"
        >
          MK
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-mono text-xs tracking-widest text-smoke uppercase group hover:text-ink transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="mailto:martinjwkim@gmail.com"
            className="font-mono text-xs tracking-widest text-teal border border-teal/40 px-4 py-2 hover:bg-teal/10 hover:border-teal transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-smoke group-hover:bg-teal transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-px bg-smoke group-hover:bg-teal transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-smoke group-hover:bg-teal transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-wire px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest text-smoke uppercase hover:text-teal transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:martinjwkim@gmail.com"
            className="font-mono text-xs tracking-widest text-teal border border-teal/40 px-4 py-2 w-fit hover:bg-teal/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      )}
    </motion.header>
  )
}
