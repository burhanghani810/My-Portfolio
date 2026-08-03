import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import profileImage from '../assets/Screenshot 2026-08-03 074218.png'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar onProfileClick={() => setIsOpen(true)} />
      <div className="pt-24">
        {children}
      </div>

      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 text-slate-100"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-950 shadow-2xl shadow-cyan-500/20"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-900/80 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-800"
            >
              Close
            </button>
            <img
              src={profileImage}
              alt="Burhan profile"
              className="h-auto w-full object-cover"
            />
            <div className="border-t border-slate-700/60 bg-slate-950/90 px-6 py-5 text-center text-sm text-slate-300">
              Click outside or press Close to close the profile preview.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Layout
