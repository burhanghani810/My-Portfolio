import React from 'react'

const About = () => {
  return (
    <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/20">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">About Me</p>
          <h2 className="text-3xl font-semibold text-slate-100">A creative front-end developer crafting polished web experiences.</h2>
        </div>
        <p className="text-base leading-8 text-slate-300">
          Hello — I'm building this portfolio with Vite + React and Tailwind CSS. I focus on front-end development and enjoy creating clean, responsive interfaces with attention to detail, accessibility, and performance.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-800 p-6 text-slate-100 shadow-sm shadow-slate-950/10">
            <p className="font-semibold text-slate-100">Experience</p>
            <p className="mt-3 text-sm text-slate-300">React, Tailwind, Vite, modern JavaScript, and responsive layout design.</p>
          </div>
          <div className="rounded-3xl bg-slate-800 p-6 text-slate-100 shadow-sm shadow-slate-950/10">
            <p className="font-semibold text-slate-100">Focus</p>
            <p className="mt-3 text-sm text-slate-300">User-friendly UI, fast pages, smooth animations, and clean component structure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
