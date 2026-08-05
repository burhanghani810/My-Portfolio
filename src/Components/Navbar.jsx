import React, { useState } from 'react'
import profileImage from '../assets/Screenshot 2026-08-03 074218.png'

const Navbar = ({ onProfileClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-700/30 bg-slate-950/95 text-slate-100 backdrop-blur-md shadow-sm shadow-slate-950/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              onProfileClick?.()
            }}
            className="inline-flex items-center gap-3 text-lg font-semibold text-slate-100 transition hover:text-cyan-200"
          >
            <img
              src={profileImage}
              alt="Burhan"
              className="h-10 w-10 rounded-full border border-cyan-300/50 object-cover ring-2 ring-cyan-400/60 shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            />
            <span className="hidden sm:inline">Burhan</span>
          </button>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <a href="#about" className="transition hover:text-cyan-300">About</a>
          <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
          <a href="#cv" className="transition hover:text-cyan-300">CV</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700/50 bg-slate-900/80 p-2 text-slate-100 transition hover:bg-slate-800 sm:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-slate-700/30 bg-slate-950/95 px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm font-medium">
            <a
              href="#about"
              className="block rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-900 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-900 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#cv"
              className="block rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-900 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              CV
            </a>
            <a
              href="#contact"
              className="block rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-900 hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
