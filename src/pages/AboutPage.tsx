import { useEffect } from 'react'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

export function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <main className="about-page">
        <About />
      </main>
      <Footer />
    </>
  )
}
