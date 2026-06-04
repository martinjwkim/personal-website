import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #00d4b4 0%, transparent 65%)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #00d4b4 0%, transparent 65%)',
            transform: 'translate(20%, 20%)',
          }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #00d4b4 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-center">
        {/* Text content */}
        <div>
          {/* Available badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            <span className="font-mono text-xs text-teal tracking-widest uppercase">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              custom={0.12}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-black text-[clamp(4rem,10vw,7.5rem)] leading-none tracking-tightest text-ink"
            >
              Martin
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              custom={0.22}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-black italic text-[clamp(4rem,10vw,7.5rem)] leading-none tracking-tightest text-teal"
            >
              Kim
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            custom={0.34}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-smoke" />
            <span className="font-mono text-xs tracking-widest text-smoke uppercase">
              Senior Frontend Engineer
            </span>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            custom={0.42}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-x-3 gap-y-1 mb-8"
          >
            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((t, i) => (
              <span key={t} className="font-mono text-xs text-ash">
                {t}{i < 3 ? <span className="text-wire mx-1">·</span> : null}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={0.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-smoke text-lg leading-[1.75] max-w-lg mb-12"
          >
            Building scalable, data-driven interfaces that translate complex
            systems into experiences that feel effortless.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="mailto:martinjwkim@gmail.com"
              className="group relative px-8 py-3.5 bg-teal text-canvas font-mono text-xs tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,180,0.25)] active:scale-[0.98]"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/martinjwkim"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-wire text-smoke font-mono text-xs tracking-widest uppercase hover:border-teal hover:text-teal transition-all duration-300 active:scale-[0.98]"
            >
              LinkedIn →
            </a>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(0,212,180,0.15) 0%, transparent 70%)',
                transform: 'scale(1.4)',
              }}
            />
            {/* Gradient ring */}
            <div
              className="relative rounded-full p-[2px]"
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,180,0.8) 0%, rgba(0,212,180,0.2) 50%, rgba(0,212,180,0.05) 100%)',
                width: 'clamp(200px, 30vw, 300px)',
                height: 'clamp(200px, 30vw, 300px)',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                <img
                  src="/headshot.jpg"
                  alt="Martin Kim"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
            {/* Decorative corner marks */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-teal/40" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-teal/40" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-smoke/40 to-transparent"
        />
        <span className="font-mono text-[10px] text-ash tracking-widest uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
