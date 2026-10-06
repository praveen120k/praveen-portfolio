import { profile } from '../data/portfolio'
export default function Footer() {
  return <footer className="border-t border-white/10 py-10 text-center text-sm text-mist">© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS and Framer Motion.</footer>
}
