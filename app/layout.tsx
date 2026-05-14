import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sathvika Kakani — AI Product Developer',
  description: 'AI Product Developer specialising in LLMs, RAG systems, conversational AI, and full-stack AI application development. Based in Hyderabad, India.',
  keywords: ['AI Developer', 'LLM', 'RAG', 'Machine Learning', 'Full Stack', 'Hyderabad'],
  authors: [{ name: 'Sathvika Kakani' }],
  openGraph: {
    title: 'Sathvika Kakani — AI Product Developer',
    description: 'Building intelligent systems that think, respond, and deliver.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg bg-bg text-text antialiased">{children}</body>
    </html>
  )
}
