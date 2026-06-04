import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 lg:py-36 border-t border-wire"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Label column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs tracking-widest text-teal uppercase mb-3">
              <span className="text-ash">01 /</span> About
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
              The engineer
              <br />
              behind the{' '}
              <span className="italic text-teal">work.</span>
            </h2>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <p className="font-body text-smoke text-lg leading-[1.8]">
              I specialize in building scalable, intuitive, and data-driven web
              applications using React, TypeScript, and modern UI architecture. At
              Breinify, I led the design and development of core product experiences —
              translating complex data models and targeting logic into clean,
              performant interfaces used by enterprise customers.
            </p>
            <p className="font-body text-smoke text-lg leading-[1.8]">
              I'm passionate about creating systems that are not only visually
              refined but technically sound: reusable component architectures,
              accessible interfaces, and maintainable frontend foundations that scale
              with product growth.
            </p>
            <p className="font-body text-smoke text-lg leading-[1.8]">
              My motivation is simple: solve real problems with thoughtful
              engineering, and build products that feel effortless for the people
              who rely on them.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-wire mt-8">
              {[
                { value: '4+', label: 'Years experience' },
                { value: '3+', label: 'Companies shipped' },
                { value: '∞', label: 'Components built' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display font-black text-4xl text-teal mb-1">
                    {value}
                  </div>
                  <div className="font-mono text-xs tracking-widest text-ash uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
