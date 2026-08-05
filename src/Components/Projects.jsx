import React from 'react'

const sampleProjects = [
  { id: 1, title: 'Job Search Platform', desc: 'A polished job search interface built with HTML, CSS, and JavaScript.', url: 'https://burhanghani810.github.io/Indeed-job-search-project/' },
  { id: 2,  title: 'Task Manager App', desc: 'A task management web app with clean UI and efficient list interaction.', url: 'https://burhanghani810.github.io/Task-manager-web-app/' },
]

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">Projects</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">Explore recent React and Tailwind projects that demonstrate responsive design and interactive UI patterns.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sampleProjects.map((project) => (
          <article key={project.id} className="rounded-[2rem] border border-slate-700/50 bg-slate-900/80 p-8 shadow-xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">React</span>
            </div>
            <p className="mt-4 text-slate-300 leading-7">{project.desc}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
              View Demo
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
