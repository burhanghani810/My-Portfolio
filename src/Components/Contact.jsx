import React from 'react'

const Contact = () => {
  return (
    <div className="rounded-[2rem] border border-slate-700/50 bg-slate-900/85 p-10 shadow-2xl shadow-slate-950/20">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Get in touch</p>
          <h2 className="text-3xl font-semibold text-slate-100">Let’s build something together.</h2>
        </div>
        <p className="text-base leading-8 text-slate-300">
          If you'd like to work together or want to discuss a project, send me a message. I’m always open to new ideas and collaborations.
        </p>
        <div className="rounded-3xl bg-slate-800 p-6 text-slate-100 shadow-sm shadow-slate-950/10">
          <p className="font-semibold text-slate-100">Email</p>
          <a href="mailto:gmuhammadburhan@gmail.com" className="mt-2 block max-w-full break-words text-cyan-300 transition hover:text-cyan-200">gmuhammadburhan@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
