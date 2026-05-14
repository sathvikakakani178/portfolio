export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">01 — About</p>
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight mb-6">
            Building AI that<br />
            <span className="gradient-text">actually works.</span>
          </h2>
          <div className="w-12 h-px bg-accent mb-8" />
          <div className="space-y-4 text-subtle font-body leading-relaxed">
            <p>
              I'm a Computer Science graduate specialising in AI & ML, currently working as a
              Data Analytics Intern at Sailotech, Hyderabad — where I've shipped over 10 AI-powered
              tools across chatbots, automation, document intelligence, and enterprise portals.
            </p>
            <p>
              My focus is the full journey: understanding the problem, choosing the right AI approach,
              and building something that actually runs in production. I've worked across LLMs, RAG pipelines,
              ML classifiers, UI systems, and internal automation platforms.
            </p>
            <p>
              I'm actively looking for AI product roles where I can build things that matter.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Info card */}
          <div className="border border-border bg-surface p-6 space-y-4">
            {[
              { label: 'Location',    value: 'Hyderabad, India' },
              { label: 'Education',   value: 'B.Tech CS (AI & ML) — RISE Prakasam, 2025' },
              { label: 'Current',     value: 'Data Analytics Intern @ Sailotech' },
              { label: 'Email',       value: 'sathvikakakani178@gmail.com' },
              { label: 'Phone',       value: '+91 8333898432' },
            ].map(item => (
              <div key={item.label} className="flex gap-4">
                <span className="font-mono text-xs text-subtle w-24 flex-shrink-0 pt-0.5 uppercase tracking-wider">{item.label}</span>
                <span className="font-body text-sm text-text">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/sathvikakani" target="_blank" rel="noreferrer"
              className="flex-1 text-center border border-border py-3 text-xs font-mono tracking-widest text-subtle hover:border-accent hover:text-accent transition-colors uppercase">
              LinkedIn
            </a>
            <a href="https://github.com/sathvikakakani178" target="_blank" rel="noreferrer"
              className="flex-1 text-center border border-border py-3 text-xs font-mono tracking-widest text-subtle hover:border-accent hover:text-accent transition-colors uppercase">
              GitHub
            </a>
            <a href="mailto:sathvikakakani178@gmail.com"
              className="flex-1 text-center border border-accent bg-accent/5 py-3 text-xs font-mono tracking-widest text-accent hover:bg-accent hover:text-bg transition-colors uppercase">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
