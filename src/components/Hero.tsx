import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
const stack = ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Unity']
const item = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const } })
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div>
          <motion.div {...item(0)} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-teal" /></span>
            Open to fresher Software Developer roles
          </motion.div>
          <motion.h1 {...item(1)} className="mt-7 bg-gradient-to-br from-white via-white to-teal bg-clip-text font-display text-[2.6rem] font-extrabold leading-[1.05] text-transparent sm:text-6xl md:text-7xl xl:text-8xl">{profile.name}</motion.h1>
          <motion.p {...item(2)} className="mt-5 font-display text-2xl font-medium text-amber md:text-3xl">{profile.role}</motion.p>
          <motion.p {...item(3)} className="mt-6 max-w-xl text-lg leading-relaxed text-mist md:text-xl">{profile.tagline}</motion.p>
          <motion.div {...item(4)} className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#projects" className="group rounded-full bg-gradient-to-r from-amber to-[#ffd98a] px-7 py-3.5 font-semibold text-ink shadow-lg shadow-amber/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-amber/40">View projects <span className="inline-block transition-transform group-hover:translate-x-1">→</span></a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10">Get in touch</a>
            {profile.resumeUrl && <a href={profile.resumeUrl} download className="px-3 py-3.5 font-semibold text-mist transition hover:text-white">Download resume</a>}
          </motion.div>
        </div>
        <motion.div {...item(3)}>
          <div className="animate-float rounded-2xl bg-gradient-to-br from-teal/40 via-white/10 to-amber/40 p-px">
            <div className="rounded-2xl bg-ink/80 p-6 font-mono text-sm shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-white/15" /><i className="h-3 w-3 rounded-full bg-white/15" /><i className="h-3 w-3 rounded-full bg-white/15" /></div>
              <p className="text-mist">const developer = {'{'}</p>
              <p className="pl-4 text-slate-200">name: <span className="text-teal">'{profile.name}'</span>,</p>
              <p className="pl-4 text-slate-200">degree: <span className="text-teal">'B.Tech IT'</span>,</p>
              <p className="pl-4 text-slate-200">stack: [</p>
              {stack.map((s, i) => <motion.p key={s} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.1 }} className="pl-8 text-teal">'{s}',</motion.p>)}
              <p className="pl-4 text-slate-200">],</p>
              <p className="text-mist">{'}'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
