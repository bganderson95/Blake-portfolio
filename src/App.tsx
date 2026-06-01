import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { Writing } from './components/Writing'
import { Footer } from './components/Footer'
import { AboutPage } from './pages/AboutPage'

function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Gallery />
        <Writing />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <div className="page-bg" aria-hidden="true" />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
