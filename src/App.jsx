import React from 'react'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import CV from './Components/CV'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Layout from './extras/Layout'

const App = () => {
  return (
    <Layout>
      <Header />
      <main className="mx-auto max-w-6xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="cv">
          <CV />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </Layout>
  )
}

export default App
