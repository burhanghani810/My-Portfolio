import React, { useState } from 'react'
import cvImage from '../assets/Screenshot 2026-08-03 074218.png'

const CV = () => {
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/20">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">My CV</p>
          <h2 className="text-3xl font-semibold text-slate-100">Download or preview my CV.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
          <div className="space-y-4 text-slate-300">
            <p className="leading-8">
              Want to see my experience, skills, and education at a glance? Download my CV or preview a quick image snapshot right here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/Burhan_CV.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Download CV
              </a>
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Preview Image
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-slate-700/60 bg-slate-950/80 shadow-lg shadow-cyan-500/10">
            <img
              src={cvImage}
              alt="Burhan CV preview"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {previewOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-slate-950/30">
            <button
              type="button"
              onClick={() => setPreviewOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-900/90 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
            >
              Close
            </button>
            <img src={cvImage} alt="Full CV preview" className="h-auto w-full object-contain" />
            <div className="border-t border-slate-700/60 bg-slate-950/90 px-6 py-5 text-center text-sm text-slate-300">
              Preview of the CV image. Click Close to return.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default CV
