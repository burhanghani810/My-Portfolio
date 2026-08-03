import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-700/40 bg-slate-950/90 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Burhan. Built with React + Tailwind CSS.
      </div>
    </footer>
  )
}

export default Footer
