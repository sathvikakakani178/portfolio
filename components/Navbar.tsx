'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-700 text-sm tracking-widest text-accent uppercase">
          SK<span className="text-subtle">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm text-subtle hover:text-text transition-colors duration-200 font-body tracking-wide">
              {l}
            </a>
          ))}
          <a href="mailto:sathvikakakani178@gmail.com"
            className="text-sm bg-accent text-bg px-4 py-2 font-display font-600 tracking-wide hover:bg-accent/90 transition-colors">
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-subtle hover:text-text" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-subtle hover:text-text transition-colors font-body tracking-wide">
              {l}
            </a>
          ))}
          <a href="mailto:sathvikakakani178@gmail.com"
            className="text-sm bg-accent text-bg px-4 py-2 font-display font-600 text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
