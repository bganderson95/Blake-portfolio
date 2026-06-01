import { Analytics } from '@vercel/analytics/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { Writing } from './components/Writing'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Gallery />
        <Writing />
        <About />
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
