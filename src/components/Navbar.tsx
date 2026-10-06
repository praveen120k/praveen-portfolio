import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile, certifications } from '../data/portfolio'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const links = navLinks.filter(l => l !== 'Certifications' || certifications.length > 0)
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    links.forEach(l => { const el = document.getElementById(l.toLowerCase()); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-4">
      <div className="w-full max-w-5xl">
        <nav aria-label="Main" className="flex h-14 items-center justify-between rounded-full border border-white/10 bg-ink/60 pl-6 pr-2 shadow-lg shadow-black/30 backdrop-blur-xl">
          <a href="#top" className="font-display text-lg font-bold text-white">{profile.name.split(' ')[0]}<span className="text-amber">.</span></a>
          <ul className="hidden items-center lg:flex">
            {links.map(l => {
              const on = active === l.toLowerCase()
              return (
                <li key={l} className="relative">
                  {on && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  <a href={`#${l.toLowerCase()}`} aria-current={on ? 'true' : undefined} className={`relative block px-3.5 py-2 text-sm transition-colors ${on ? 'text-white' : 'text-mist hover:text-white'}`}>{l}</a>
                </li>
              )
            })}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-amber lg:block">Hire me</a>
          <button className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={open ? 'M4 4l14 14M18 4L4 18' : 'M3 6h16M3 11h16M3 16h16'} /></svg>
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.ul id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-2 rounded-3xl border border-white/10 bg-ink/90 p-3 backdrop-blur-xl lg:hidden">
              {links.map(l => <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? 'true' : undefined} className={`block rounded-xl px-4 py-3 ${active === l.toLowerCase() ? 'bg-white/10 text-white' : 'text-mist'}`}>{l}</a></li>)}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
