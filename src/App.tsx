import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Skills, Projects, Experience, Leadership, Education, Certifications, Contact } from './components/Sections'
export default function App() {
  return (
    <>
      <div className="bg-scene" aria-hidden>
        <div className="grid" />
        <div className="blob animate-drift1 -left-32 top-10 h-[30rem] w-[30rem] bg-teal/15" />
        <div className="blob animate-drift2 -right-32 top-1/3 h-[32rem] w-[32rem] bg-indigo-500/15" />
        <div className="blob animate-drift1 bottom-0 hidden sm:block left-1/3 h-[26rem] w-[26rem] bg-amber/10" />
      </div>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink">Skip to content</a>
      <Navbar /><main id="main"><Hero /><About /><Skills /><Projects /><Experience /><Leadership /><Education /><Certifications /><Contact /></main><Footer />
    </>
  )
}
