import React from 'react'

const About = () => {
  return (
    <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/20">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">About Me</p>
          <h2 className="text-3xl font-semibold text-slate-100">A full-stack developer building complete web applications end-to-end.</h2>
        </div>
        <p className="text-base leading-8 text-slate-300">
          Hello — I'm building this portfolio with Vite + React and Tailwind CSS, and I also work with backend APIs, databases, and deployment. I combine frontend polish with backend reliability to deliver fast, scalable apps.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800 p-6 text-slate-100 shadow-sm shadow-slate-950/10">
            <p className="font-semibold text-slate-100">Experience</p>
            <p className="mt-3 text-sm text-slate-300">Frontend frameworks, backend services, REST APIs, databases, and deployment workflows.</p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6 text-slate-100 shadow-sm shadow-slate-950/10">
            <p className="font-semibold text-slate-100">Focus</p>
            <p className="mt-3 text-sm text-slate-300">Building reliable full-stack solutions with clean UI, solid architecture, and real-world performance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
