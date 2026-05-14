'use client'
import { useState } from 'react'
import { ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react'

type Role = 'Dev' | 'Testing' | 'UI' | 'Dev & Testing' | 'UI Support' | 'Full Stack'
type Source = 'sailotech' | 'college'

interface Project {
  name: string
  description: string
  role: Role
  tags: string[]
  highlight?: boolean
  product?: string
  source: Source
}

const roleColors: Record<Role, string> = {
  'Dev':          'border-accent/40 text-accent',
  'Dev & Testing':'border-accent/40 text-accent',
  'Full Stack':   'border-accent/40 text-accent',
  'Testing':      'border-blue-400/40 text-blue-400',
  'UI':           'border-purple-400/40 text-purple-400',
  'UI Support':   'border-purple-400/40 text-purple-400',
}

const sailotechProjects: Project[] = [
  {
    name: 'Interview Bot',
    description: 'End-to-end AI-powered hiring agent that automates candidate screening. Built LLM-based resume analysis, candidate-job matching logic, and intelligent conversational interview flows with RESTful API backend.',
    role: 'Dev & Testing',
    tags: ['React', 'TypeScript', 'LLM', 'RAG', 'FastAPI'],
    highlight: true,
    source: 'sailotech',
  },
  {
    name: 'GenAI Test Case Generator',
    description: 'LLM-powered tool that auto-generates structured test cases from natural language requirements. Significantly reduces manual QA effort by translating feature specs directly into actionable test scenarios.',
    role: 'Dev',
    tags: ['Python', 'LLM', 'Prompt Engineering', 'Automation'],
    highlight: true,
    source: 'sailotech',
  },
  {
    name: 'Website Crawler',
    description: 'Intelligent web crawling module for TestEnsure — Sailotech\'s internal automation platform. Crawls target websites, extracts structure and content, and feeds data into the automated testing pipeline.',
    role: 'Dev & Testing',
    tags: ['Python', 'Playwright', 'FastAPI', 'Automation'],
    product: 'TestEnsure',
    source: 'sailotech',
  },
  {
    name: 'Video Processor',
    description: 'Video analysis module for TestEnsure that processes screen recordings to extract UI interactions, validate visual states, and support automated regression testing workflows.',
    role: 'Dev & Testing',
    tags: ['Python', 'Computer Vision', 'FastAPI'],
    product: 'TestEnsure',
    source: 'sailotech',
  },
  {
    name: 'Screenshot Processor',
    description: 'Automated screenshot capture and analysis tool that detects UI anomalies, compares visual diffs, and generates structured reports for QA teams within the TestEnsure platform.',
    role: 'Dev',
    tags: ['Python', 'Image Processing', 'Automation'],
    product: 'TestEnsure',
    source: 'sailotech',
  },
  {
    name: 'AI Chatbot',
    description: 'Conversational AI chatbot with LLM-backed responses and RAG integration for context-aware replies. Developed the full pipeline from prompt design to API integration and end-to-end testing.',
    role: 'Dev & Testing',
    tags: ['LLM', 'RAG', 'Python', 'REST API'],
    source: 'sailotech',
  },
  {
    name: 'iKapture v2',
    description: 'UI revamp of iKapture — an AI-powered invoice extraction platform. Delivered modernised component library, improved data visualisation dashboards, and streamlined extraction review workflows.',
    role: 'UI',
    tags: ['React', 'TypeScript', 'UI/UX', 'Invoice AI'],
    source: 'sailotech',
  },
  {
    name: 'Hyva Portal',
    description: 'Supply chain management portal built as an internal assignment to demonstrate full frontend capability. Delivered complete UI with multi-stage procurement workflows, vendor tracking, and order management views.',
    role: 'UI',
    tags: ['React', 'TypeScript', 'Supply Chain', 'Dashboard'],
    source: 'sailotech',
  },
  {
    name: 'Resource Planner',
    description: 'Tested an enterprise resource planning tool covering team allocation, capacity planning, and project scheduling modules. Performed functional, regression, and edge-case testing across all core features.',
    role: 'Testing',
    tags: ['QA', 'Test Planning', 'Regression Testing'],
    source: 'sailotech',
  },
  {
    name: 'Xattax',
    description: 'Contributed UI upgrade support for Xattax, a government GST portal. Improved accessibility, responsiveness, and visual consistency across key filing and compliance management pages.',
    role: 'UI Support',
    tags: ['UI/UX', 'Government Portal', 'GST', 'React'],
    source: 'sailotech',
  },
]

const collegeProjects: Project[] = [
  {
    name: 'AI Crime Classification System',
    description: 'Full-stack crime classification platform powered by a trained ML model (Random Forest + TF-IDF). Classifies crime narratives into 8 categories with severity scoring, AI explanation, Indian legal guidance, and multi-language support for 20+ languages including Telugu and Hindi.',
    role: 'Full Stack',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'scikit-learn', 'NLP'],
    highlight: true,
    source: 'college',
  },
  {
    name: 'RAG-Powered Knowledge Retrieval',
    description: 'Full-stack Retrieval-Augmented Generation system enabling intelligent document-based question answering. Built a React + TypeScript frontend with dynamic chat interfaces, semantic retrieval workflows, and modular production-ready architecture separating frontend, AI inference, and data layers.',
    role: 'Full Stack',
    tags: ['LLM', 'RAG', 'React', 'TypeScript', 'Vector DB', 'Python'],
    highlight: true,
    source: 'college',
  },
  {
    name: 'StressShield',
    description: 'Medical-grade stress classification system using a Random Forest model (200 estimators) trained on physiological vitals — heart rate, blood pressure, and sleep patterns. Features a 3-tier stress classification engine with Streamlit dashboard, interactive Plotly charts, and a modular architecture with separate classifier, validator, and insights engine.',
    role: 'Full Stack',
    tags: ['Python', 'scikit-learn', 'Streamlit', 'Plotly', 'Pandas', 'ML'],
    source: 'college',
  },
]

type FilterTab = 'Sailotech' | 'College Projects' | 'All'
const tabs: FilterTab[] = ['All', 'Sailotech', 'College Projects']

export default function Projects() {
  const [active, setActive] = useState<FilterTab>('All')
  const [roleFilter, setRoleFilter] = useState('All')

  const roleFilters = ['All', 'Dev', 'Dev & Testing', 'UI', 'Testing']

  const allProjects = [...sailotechProjects, ...collegeProjects]

  const sourceFiltered =
    active === 'All'           ? allProjects :
    active === 'Sailotech'     ? sailotechProjects :
                                 collegeProjects

  const finalFiltered = roleFilter === 'All'
    ? sourceFiltered
    : sourceFiltered.filter(p =>
        p.role === roleFilter ||
        (roleFilter === 'Dev' && (p.role === 'Dev & Testing' || p.role === 'Full Stack'))
      )

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">03 — Projects</p>
        <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight mb-2">
          Things I've<br />
          <span className="gradient-text">shipped.</span>
        </h2>
        <p className="text-subtle font-body text-sm mt-4">
          Professional work at Sailotech + personal college projects.
        </p>
      </div>

      {/* Source tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map(tab => (
          <button key={tab} onClick={() => { setActive(tab); setRoleFilter('All') }}
            className={`flex items-center gap-2 text-xs font-mono tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
              active === tab
                ? tab === 'College Projects'
                  ? 'border-blue-400 bg-blue-400/10 text-blue-400'
                  : 'border-accent bg-accent text-bg'
                : 'border-border text-subtle hover:border-muted hover:text-text'
            }`}>
            {tab === 'Sailotech' && <Briefcase className="w-3 h-3" />}
            {tab === 'College Projects' && <GraduationCap className="w-3 h-3" />}
            {tab}
          </button>
        ))}
      </div>

      {/* Role filter — only show for Sailotech or All */}
      {active !== 'College Projects' && (
        <div className="flex flex-wrap gap-2 mb-10">
          {roleFilters.map(f => (
            <button key={f} onClick={() => setRoleFilter(f)}
              className={`text-xs font-mono tracking-widest uppercase px-3 py-1.5 border transition-colors duration-200 ${
                roleFilter === f
                  ? 'border-accent/60 text-accent bg-accent/10'
                  : 'border-border/50 text-subtle/60 hover:text-subtle'
              }`}>
              {f}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {finalFiltered.map((project) => (
          <div key={project.name}
            className={`card-hover border p-6 bg-surface flex flex-col gap-4 ${
              project.highlight
                ? project.source === 'college' ? 'border-blue-400/20' : 'border-accent/20'
                : 'border-border'
            }`}>
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-700 text-base text-text">{project.name}</h3>
                  {project.product && (
                    <span className="text-xs font-mono text-subtle border border-border px-2 py-0.5">{project.product}</span>
                  )}
                </div>
                <span className={`text-xs font-mono border px-2 py-0.5 ${roleColors[project.role]}`}>
                  {project.role}
                </span>
              </div>
              {project.highlight && (
                <ArrowUpRight className={`w-4 h-4 flex-shrink-0 mt-1 ${project.source === 'college' ? 'text-blue-400' : 'text-accent'}`} />
              )}
            </div>

            {/* Description */}
            <p className="text-subtle font-body text-sm leading-relaxed flex-1">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-subtle/60 bg-muted/40 px-2 py-1">{tag}</span>
              ))}
            </div>

            {/* Source badge */}
            <div className="flex items-center gap-2 pt-1 border-t border-border/50">
              {project.source === 'sailotech' ? (
                <>
                  <Briefcase className="w-3 h-3 text-accent/60" />
                  <span className="text-xs font-mono text-accent/70 tracking-wider">Sailotech · Professional Experience</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-3 h-3 text-blue-400/60" />
                  <span className="text-xs font-mono text-blue-400/70 tracking-wider">College Project · Personal Build</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}