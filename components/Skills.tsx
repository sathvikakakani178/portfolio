const skillGroups = [
  {
    category: 'AI & ML',
    items: ['LLMs', 'RAG Systems', 'Prompt Engineering', 'NLP', 'scikit-learn', 'Groq', 'OpenAI API', 'Langchain'],
  },
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Streamlit', 'shadcn/ui'],
  },
  {
    category: 'Backend & APIs',
    items: ['FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Railway', 'Vercel', 'Docker', 'Git', 'AWS (Fundamentals)', 'Playwright'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">02 — Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight">
          Tools of the<br />
          <span className="gradient-text">trade.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-bg p-8 hover:bg-surface transition-colors duration-300">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map(skill => (
                <span key={skill}
                  className="text-xs font-body text-subtle border border-border px-3 py-1.5 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Certifications cell */}
        <div className="bg-bg p-8 hover:bg-surface transition-colors duration-300">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">Certifications</p>
          <div className="space-y-3">
            {[
              'Prompt Engineering for LLMs — Alison',
              'Joy of Computing (Python) — NPTEL Elite',
              'Cloud Architecting — AWS Academy',
              'Full Stack Web Dev — Brainovision',
            ].map(cert => (
              <div key={cert} className="flex items-start gap-2">
                <span className="text-accent mt-1.5 text-xs">▸</span>
                <span className="text-xs font-body text-subtle leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
