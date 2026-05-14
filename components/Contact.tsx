import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      {/* Big CTA */}
      <div className="border border-border bg-surface p-12 md:p-16 mb-16 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">04 — Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-800 leading-tight mb-6">
            Let's build<br />
            <span className="gradient-text">something.</span>
          </h2>
          <p className="text-subtle font-body text-base max-w-md leading-relaxed mb-10">
            Open to AI product roles, freelance projects, and collaborations. If you're working on
            something interesting with AI — I'd love to hear about it.
          </p>
          <a href="mailto:sathvikakakani178@gmail.com"
            className="inline-flex items-center gap-3 bg-accent text-bg px-8 py-4 font-display font-700 text-sm tracking-wide hover:bg-accent/90 transition-colors">
            <Mail className="w-4 h-4" />
            sathvikakakani178@gmail.com
          </a>
        </div>
      </div>

      {/* Contact details grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            icon: <Phone className="w-4 h-4" />,
            label: 'Phone',
            value: '+91 8333898432',
            href: 'tel:+918333898432',
          },
          {
            icon: <MapPin className="w-4 h-4" />,
            label: 'Location',
            value: 'Hyderabad, India',
            href: null,
          },
          {
            icon: <Github className="w-4 h-4" />,
            label: 'GitHub',
            value: 'sathvikakakani178',
            href: 'https://github.com/sathvikakakani178',
          },
        ].map(item => (
          <div key={item.label} className="border border-border p-6 hover:border-muted transition-colors">
            <div className="flex items-center gap-2 text-accent mb-3">
              {item.icon}
              <span className="font-mono text-xs tracking-widest uppercase">{item.label}</span>
            </div>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer" className="font-body text-sm text-subtle hover:text-text transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="font-body text-sm text-subtle">{item.value}</p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-subtle tracking-widest">
          © {new Date().getFullYear()} Sathvika Kakani — Built with Next.js & Tailwind
        </p>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/sathvikakani" target="_blank" rel="noreferrer"
            className="text-subtle hover:text-accent transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/sathvikakakani178" target="_blank" rel="noreferrer"
            className="text-subtle hover:text-accent transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:sathvikakakani178@gmail.com"
            className="text-subtle hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
