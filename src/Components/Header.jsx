import React from 'react'

const Header = () => {
  return (
    <header className="overflow-hidden bg-slate-950/75">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Portfolio Showcase
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
                Hi, I’m Burhan — building modern, responsive React interfaces.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                I build polished full-stack applications using React, Vite, Tailwind CSS, and backend services. Explore my projects, learn about my skills, and let’s collaborate on something great.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/75 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-lg">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">What I do</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-100">Full-stack development with UX and backend focus.</h2>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="rounded-3xl border border-slate-700/50 bg-slate-800 p-5">
                  <p className="font-semibold text-slate-100">Responsive websites</p>
                  <p className="mt-2 text-sm text-slate-300">Fast, accessible layouts for desktop and mobile.</p>
                </li>
                <li className="rounded-3xl border border-slate-700/50 bg-slate-800 p-5">
                  <p className="font-semibold text-slate-100">React apps</p>
                  <p className="mt-2 text-sm text-slate-300">Component-based UIs with clean state and styling.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
