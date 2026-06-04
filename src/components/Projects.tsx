import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    name: 'OC Wedding Desserts',
    description:
      'A vendor showcase for an Orange County wedding dessert business. Features a curated gallery, menu, and contact section — designed to convert engaged couples into clients.',
    url: 'https://oc-wedding-desserts.vercel.app',
    tags: ['React', 'Vercel', 'Responsive'],
  },
  {
    name: 'Freda Staire Dance Studio',
    description:
      'A studio website for a dance school featuring class listings, instructor profiles, and a clean booking-oriented layout that reflects the studio\'s warmth and energy.',
    url: 'https://fredastairedancestudio.vercel.app',
    tags: ['React', 'Vercel', 'Responsive'],
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="projects"
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
            <span className="text-ash">04 /</span> Projects
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Things I've{' '}
            <span className="italic text-teal">built.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group relative block bg-surface border border-wire p-8 hover:border-teal/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,212,180,0.08)]"
            >
              {/* Top corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-wire group-hover:border-teal/60 transition-colors duration-300" />

              <div className="flex justify-between items-start mb-5">
                <h3 className="font-display font-bold text-xl text-ink group-hover:text-teal transition-colors duration-200">
                  {project.name}
                </h3>
                <span className="font-mono text-xs text-smoke group-hover:text-teal transition-colors duration-200 ml-4 shrink-0">
                  ↗
                </span>
              </div>

              <p className="font-body text-smoke text-sm leading-[1.8] mb-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-ash border border-wire px-2.5 py-1 group-hover:border-teal/30 group-hover:text-smoke transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-wire flex items-center gap-2">
                <span className="font-mono text-xs text-ash group-hover:text-teal transition-colors duration-200">
                  View Live
                </span>
                <span className="font-mono text-xs text-ash group-hover:text-teal transition-all duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-wire max-w-[60px]" />
          <span className="font-mono text-xs text-ash tracking-widest uppercase">
            More projects in progress
          </span>
        </motion.div>
      </div>
    </section>
  )
}
