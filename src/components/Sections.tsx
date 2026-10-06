import { motion } from 'framer-motion'
import Section from './Section'
import Card, { Tag } from './Card'
import { profile, skillGroups, projects, strengths, type Project, experience, leadership, education, certifications } from '../data/portfolio'

export const About = () => (
  <Section id="about" title="About me">
    <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-mist">{profile.about.map(p => <p key={p}>{p}</p>)}</div>
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {strengths.map(s => (
        <Card key={s.title} className="md:!p-6"><h3 className="font-display text-lg font-semibold text-white">{s.title}</h3><p className="mt-2 text-mist">{s.text}</p></Card>
      ))}
    </div>
  </Section>
)

export const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map(g => (
        <Card key={g.title} className="md:!p-6">
          <div className="mb-5 h-px w-full bg-gradient-to-r from-teal/60 to-transparent" />
          <h3 className="mb-5 font-display text-lg font-semibold text-white">{g.title}</h3>
          <div className="flex flex-wrap gap-2">{g.items.map(i => <Tag key={i}>{i}</Tag>)}</div>
        </Card>
      ))}
    </div>
  </Section>
)

const Links = ({ p }: { p: Project }) => (p.github || p.live) ? (
  <div className="mt-6 flex gap-6 text-sm font-medium">
    {p.github && <a className="text-amber transition hover:text-white" href={p.github} target="_blank" rel="noreferrer">Source code ↗</a>}
    {p.live && <a className="text-amber transition hover:text-white" href={p.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
  </div>
) : null

const Pulse = () => (
  <svg viewBox="0 0 400 140" className="w-full" aria-hidden>
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#3DD6C4" /><stop offset="1" stopColor="#F5B841" /></linearGradient></defs>
    <path d="M0 70H90L106 70L120 34L138 112L154 22L170 70H260L276 70L288 48L300 88L312 70H400" fill="none" stroke="#fff" strokeOpacity=".08" strokeWidth="2" />
    <path pathLength={1} strokeDasharray="0.22 0.78" className="animate-ecg" d="M0 70H90L106 70L120 34L138 112L154 22L170 70H260L276 70L288 48L300 88L312 70H400" fill="none" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Label = ({ children }: { children: string }) => <dt className="text-sm font-semibold text-teal">{children}</dt>
const Details = ({ p }: { p: Project }) => (
  <dl className="mt-6 space-y-5">
    <div><Label>Problem</Label><dd className="mt-1 text-mist">{p.problem}</dd></div>
    <div><Label>Solution</Label><dd className="mt-1 text-mist">{p.solution}</dd></div>
    <div><Label>Key features</Label><dd><ul className="mt-1 space-y-1 text-mist">{p.features.map(f => <li key={f} className="flex gap-2"><span className="text-amber">•</span>{f}</li>)}</ul></dd></div>
    {p.tech.length > 0 && <div><Label>Technologies</Label><dd className="mt-2 flex flex-wrap gap-2">{p.tech.map(t => <Tag key={t}>{t}</Tag>)}</dd></div>}
  </dl>
)

export const Projects = () => {
  const [featured, ...rest] = projects
  return (
    <Section id="projects" title="Projects">
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="rounded-2xl bg-gradient-to-br from-teal/50 via-white/10 to-amber/50 p-px">
        <Card className="!border-0 !bg-ink/90 md:!p-10">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-block rounded-full bg-amber/15 px-3 py-1 text-sm font-medium text-amber">Featured project</span>
              <p className="mt-5 text-teal">{featured.type}</p>
              <h3 className="mt-1 font-display text-3xl font-bold text-white md:text-5xl">{featured.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-mist">{featured.description}</p>
              <Details p={featured} />
              <Links p={featured} />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6"><Pulse /></div>
          </div>
        </Card>
      </motion.div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map(p => (
          <motion.div key={p.title} whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
            <Card className="h-full">
              <p className="text-sm text-teal">{p.type}</p>
              <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{p.description}</p>
              <Details p={p} />
              <Links p={p} />
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="space-y-8 border-l border-white/10 pl-6">
      {experience.map(e => (
        <li key={e.title} className="relative">
          <span className="absolute -left-[29px] top-2 h-3 w-3 rounded-full bg-amber" />
          <h3 className="font-display text-xl font-semibold text-white">{e.title}</h3>
          <p className="text-mist">{e.org}{e.period && `, ${e.period}`}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-mist">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
        </li>
      ))}
    </ol>
  </Section>
)

export const Leadership = () => (
  <Section id="leadership" title="Leadership">
    <div className="grid gap-6 md:grid-cols-2">
      {leadership.map(l => (
        <Card key={l.title}>
          <h3 className="font-display text-xl font-semibold text-white">{l.title}</h3>
          <p className="text-teal">{l.org}</p>
          <p className="mt-3 text-mist">{l.description}</p>
        </Card>
      ))}
    </div>
  </Section>
)

export const Education = () => (
  <Section id="education" title="Education">
    {education.map(e => (
      <Card key={e.degree} className="max-w-2xl">
        <h3 className="font-display text-xl font-semibold text-white">{e.degree}</h3>
        {e.period && <p className="text-sm text-mist">{e.period}</p>}
      </Card>
    ))}
  </Section>
)

export const Certifications = () => certifications.length === 0 ? null : (
  <Section id="certifications" title="Certifications">
    <div className="grid gap-5 sm:grid-cols-2">
      {certifications.map(c => (
        <Card key={c.name}>
          <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
          <p className="text-mist">{c.issuer}{c.year && `, ${c.year}`}</p>
          {c.url && <a href={c.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-amber hover:underline">View credential</a>}
        </Card>
      ))}
    </div>
  </Section>
)

export const Contact = () => {
  const links = [
    profile.email && { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
    profile.github && { label: 'GitHub', href: profile.github, text: profile.github.replace(/^https?:\/\/(www\.)?/, '') },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, text: profile.linkedin.replace(/^https?:\/\/(www\.)?/, '') },
  ].filter(Boolean) as { label: string; href: string; text: string }[]
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg text-mist">I am looking for a fresher Software Developer role. Email me or connect on LinkedIn and I will reply as soon as I can.</p>
      <div className="mt-8 grid max-w-2xl gap-4">
        {links.map(l => (
          <a key={l.label} href={l.href} target={l.label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-teal/50">
            <span className="font-medium text-white">{l.label}</span><span className="text-mist">{l.text}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
