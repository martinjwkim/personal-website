import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const jobs = [
  {
    company: 'Breinify',
    url: 'https://breinify.com',
    location: 'San Francisco, CA',
    totalDuration: 'Feb 2022 – Dec 2025 · 3 yrs 11 mos',
    roles: [
      {
        title: 'Senior Frontend Engineer',
        period: 'Jan 2024 – Dec 2025',
        bullets: [
          'Led end-to-end frontend development for core personalization and analytics features, translating customer behavior data and targeting logic into workflow-driven UIs used by enterprise teams.',
          'Built an AI-assisted configuration experience with real-time outcome previews powered by live production data and inline validation surfacing how logic impacted results.',
          'Drove UI architecture patterns, shared abstractions, and quality standards; mentored junior engineers through design reviews and technical guidance.',
        ],
      },
      {
        title: 'Frontend Engineer',
        period: 'Feb 2022 – Jan 2024',
        bullets: [
          'Designed and built a highly customizable analytics dashboard with dynamically generated charts, configurable filters, metrics, and dimensions for deep interactive exploration.',
          'Developed a SpEL expression editor with guided UI, simplifying complex targeting logic for technical and non-technical users — reducing onboarding time and user error.',
          'Created a configuration playground for engineers and customer success teams to simulate and validate personalization scenarios before production.',
        ],
      },
    ],
  },
  {
    company: 'Rainfall',
    url: null,
    location: 'Remote',
    totalDuration: 'Sep 2021 – Sep 2022 · 1 yr 1 mo',
    roles: [
      {
        title: 'Full Stack Engineer',
        period: 'Sep 2021 – Sep 2022',
        bullets: [
          'Implemented core site sections using React, translating detailed Figma designs into pixel-perfect, responsive user interfaces.',
          'Designed and deployed serverless backend workflows using AWS Lambda for dynamic content generation and scalable delivery.',
          'Built an automated HTML email confirmation system generating personalized, branded messages from user-submitted data.',
        ],
      },
    ],
  },
  {
    company: 'CleverCounsel LLC',
    url: null,
    location: 'San Francisco, CA',
    totalDuration: 'Mar 2020 – May 2020 · 3 mos',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Mar 2020 – May 2020',
        bullets: [
          'Implemented a web-scraping verification system using BeautifulSoup to automatically validate legal entity data via the CA Secretary of State.',
          'Developed scalable API routes supporting a multi-layered React front-end used across multiple user flows.',
        ],
      },
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
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
            <span className="text-ash">03 /</span> Experience
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink leading-tight">
            Where I've{' '}
            <span className="italic text-teal">shipped.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-wire hidden md:block" />

          <div className="space-y-16">
            {jobs.map((job, ji) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + ji * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-[6px] w-[11px] h-[11px] rounded-full border-2 border-teal bg-canvas hidden md:block" />

                {/* Company header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-ink">
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-teal transition-colors duration-200"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <span className="font-mono text-xs text-ash tracking-wider">
                      {job.location}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-ash tracking-wider shrink-0">
                    {job.totalDuration}
                  </span>
                </div>

                {/* Roles */}
                <div className="space-y-8">
                  {job.roles.map((role, ri) => (
                    <div
                      key={role.title}
                      className={`${ri > 0 ? 'pt-8 border-t border-wire/50' : ''}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                        <span className="font-mono text-sm text-teal tracking-wide">
                          {role.title}
                        </span>
                        <span className="font-mono text-xs text-ash tracking-wider">
                          {role.period}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {role.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-3">
                            <span className="text-teal mt-[6px] shrink-0 text-xs">▸</span>
                            <span className="font-body text-smoke text-sm leading-[1.8]">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
