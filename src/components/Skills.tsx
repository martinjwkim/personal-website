import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  {
    label: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'React Query',
      'Framer Motion',
      'HTML / CSS',
      'Figma',
    ],
  },
  {
    label: 'Architecture & Systems',
    skills: [
      'Component Systems',
      'UI Architecture',
      'Design Systems',
      'Accessibility',
      'REST APIs',
      'Performance',
    ],
  },
  {
    label: 'Backend & Tools',
    skills: [
      'Node.js',
      'AWS Lambda',
      'Python',
      'Git',
      'Vite',
      'Webpack',
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 lg:py-36 border-t border-wire"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-teal uppercase mb-3">
            <span className="text-ash">02 /</span> Skills
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Craft &{' '}
            <span className="italic text-teal">toolset.</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + gi * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-px bg-teal" />
                <span className="font-mono text-xs tracking-widest text-teal uppercase">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-smoke border border-wire px-3 py-1.5 hover:border-teal/60 hover:text-teal hover:bg-teal/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
