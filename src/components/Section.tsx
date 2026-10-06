import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-32">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
        <div className="mb-12 mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-teal to-amber" />
        {children}
      </motion.div>
    </section>
  )
}
