import React from 'react'
import cvPdf from '../utils/CV-MuhammadBurhanGhani.pdf'

const CV = () => {
  return (
    <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/20">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">My CV</p>
          <h2 className="text-3xl font-semibold text-slate-100">Download or view my CV.</h2>
        </div>

        <div className="space-y-4 text-slate-300">
          <p className="leading-8">
            Want to see my experience, skills, and education at a glance? Download the latest CV or open it in a new tab.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={cvPdf}
              download
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download CV
            </a>
            <a
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
