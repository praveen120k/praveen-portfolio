import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`); el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div ref={ref} onMouseMove={move} className={`spot relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,.6)] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 md:p-8 ${className}`}>
      {children}
    </div>
  )
}
export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-teal/50 hover:text-white">{children}</span>
}
