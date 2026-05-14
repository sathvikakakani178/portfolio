'use client'
import { useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'

const roles = ['AI Product Developer', 'LLM Engineer', 'RAG Specialist', 'Conversational AI Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? displayed.length : displayed.length - 1
    const interval = setInterval(() => {
      if (typing) {
        if (i < current.length) {
          setDisplayed(current.slice(0, i + 1))
          i++
        } else {
          setTyping(false)
          clearInterval(interval)
          setTimeout(() => setTyping(true), 1800)
        }
      } else {
        if (i >= 0) {
          setDisplayed(current.slice(0, i))
          i--
        } else {
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTyping(true)
          clearInterval(interval)
        }
      }
    }, typing ? 60 : 35)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-16 max-w-6xl mx-auto">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#1E1E1E 1px, transparent 1px), linear-gradient(90deg, #1E1E1E 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          }} />
      </div>

      <div className="relative z-10">
        {/* Status pill */}
        <div className="animate-fadeUp delay-100 inline-flex items-center gap-2 border border-border bg-surface px-4 py-2 mb-10 w-fit">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-subtle tracking-widest uppercase">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="animate-fadeUp delay-200 font-display text-5xl md:text-7xl lg:text-8xl font-800 leading-none tracking-tight mb-4">
          Sathvika<br />
          <span className="gradient-text">Kakani</span>
          <span className="accent-dot" />
        </h1>

        {/* Typewriter */}
        <div className="animate-fadeUp delay-300 flex items-center gap-3 mb-8 h-10">
          <span className="font-mono text-accent text-sm tracking-widest">~/</span>
          <span className="font-display text-xl md:text-2xl text-subtle font-500">{displayed}</span>
          <span className="w-0.5 h-6 bg-accent animate-blink" />
        </div>

        {/* Tagline */}
        <p className="animate-fadeUp delay-400 text-subtle font-body text-base md:text-lg max-w-xl leading-relaxed mb-12">
          I build AI-powered products end-to-end — from LLM pipelines and RAG systems
          to conversational agents and intelligent automation tools.
        </p>

        {/* CTAs */}
        <div className="animate-fadeUp delay-500 flex flex-wrap gap-4 mb-20">
          <a href="#projects"
            className="group flex items-center gap-2 bg-accent text-bg px-6 py-3 font-display font-700 text-sm tracking-wide hover:bg-accent/90 transition-colors">
            View Projects
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a href="mailto:sathvikakakani178@gmail.com"
            className="flex items-center gap-2 border border-border px-6 py-3 font-display font-600 text-sm tracking-wide text-subtle hover:text-text hover:border-muted transition-colors">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fadeUp delay-600 grid grid-cols-3 gap-6 max-w-sm border-t border-border pt-8">
          {[
            { value: '10+', label: 'AI Projects' },
            { value: '2+', label: 'Companies' },
            { value: '5+', label: 'Tech Stacks' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-2xl font-800 text-accent">{s.value}</div>
              <div className="text-xs text-subtle font-body mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 animate-fadeIn delay-600 flex items-center gap-2 text-subtle text-xs font-mono tracking-widest rotate-90 origin-right">
        scroll
        <span className="w-8 h-px bg-subtle" />
      </div>
    </section>
  )
}
