import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 lg:py-36 border-t border-wire"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative text-center max-w-2xl mx-auto">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,180,0.05) 0%, transparent 70%)',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs tracking-widest text-teal uppercase mb-6"
          >
            <span className="text-ash">06 /</span> Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-5xl lg:text-7xl text-ink leading-tight mb-6"
          >
            Let's build
            <br />
            something{' '}
            <span className="italic text-teal">great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-smoke text-lg leading-relaxed mb-12"
          >
            I'm open to senior frontend and full-stack roles. If you're building
            something meaningful and care about craft, I'd love to talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:martinjwkim@gmail.com"
              className="group relative px-8 py-4 bg-teal text-canvas font-mono text-xs tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,212,180,0.25)] active:scale-[0.98]"
            >
              <span className="relative z-10">martinjwkim@gmail.com</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/martinjwkim"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-wire text-smoke font-mono text-xs tracking-widest uppercase hover:border-teal hover:text-teal transition-all duration-300 active:scale-[0.98]"
            >
              LinkedIn Profile →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-28 pt-8 border-t border-wire flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono text-xs text-ash tracking-wider">
          © 2025 Martin Kim
        </span>
        <div className="flex gap-6">
          <a
            href="mailto:martinjwkim@gmail.com"
            className="font-mono text-xs text-ash hover:text-teal transition-colors duration-200 tracking-wider"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/martinjwkim"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ash hover:text-teal transition-colors duration-200 tracking-wider"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
