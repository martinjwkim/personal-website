import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const schools = [
  {
    institution: 'University of Southern California',
    degree: 'BS, Mechanical Engineering',
    period: '2014 – 2019',
    note: 'USC Viterbi School of Engineering',
  },
  {
    institution: 'Rithm School',
    degree: 'Full Stack Web Development',
    period: '2020',
    note: 'Intensive bootcamp · San Francisco, CA',
  },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="education"
      ref={ref}
      className="py-28 lg:py-36 border-t border-wire"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs tracking-widest text-teal uppercase mb-3">
              <span className="text-ash">05 /</span> Education
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
              The{' '}
              <span className="italic text-teal">foundation.</span>
            </h2>
          </motion.div>

          {/* Entries */}
          <div className="space-y-6">
            {schools.map((school, i) => (
              <motion.div
                key={school.institution}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-6 bg-surface border border-wire hover:border-teal/30 transition-all duration-300 group"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-ink group-hover:text-teal transition-colors duration-200 mb-1">
                    {school.institution}
                  </h3>
                  <p className="font-mono text-sm text-teal mb-1">
                    {school.degree}
                  </p>
                  <p className="font-mono text-xs text-ash tracking-wider">
                    {school.note}
                  </p>
                </div>
                <span className="font-mono text-xs text-ash tracking-widest shrink-0">
                  {school.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
