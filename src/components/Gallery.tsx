import { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { useIntersect } from '../hooks/useIntersect'

const items = [
  { id: 1, title: 'Homepage Redesign', src: '/gallery/Home%20Up.png' },
  { id: 2, title: 'Search UI Animation', src: '/gallery/Search%20home.gif' },
  { id: 3, title: 'Button Animation System', src: '/gallery/animated%20buttons%20home.gif' },
  { id: 4, title: 'Centrifuge — Brand Identity', src: '/gallery/Centrifuge%20full%20logo.png' },
  { id: 5, title: 'UX Icon Set', src: '/gallery/UX%20icons.png' },
  { id: 6, title: 'DD — Icon System', src: '/gallery/DD%20icons.png' },
]

type Item = typeof items[0]

function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <img src={item.src} alt={item.title} className="modal-img" />
        <p className="modal-caption">{item.title}</p>
      </div>
    </div>
  )
}

function GalleryItem({ item, index, onOpen }: { item: Item; index: number; onOpen: (item: Item) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target) }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)

    VanillaTilt.init(el, { max: 7, speed: 500, glare: false, scale: 1.02 })

    return () => {
      observer.disconnect()
      ;(el as HTMLElement & { vanillaTilt?: { destroy(): void } }).vanillaTilt?.destroy()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`gallery-item fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 55}ms` }}
      onClick={() => onOpen(item)}
    >
      <div className="gallery-thumb">
        <img src={item.src} alt={item.title} className="gallery-img" loading="lazy" />
        <div className="gallery-overlay">
          <span className="gallery-title">{item.title}</span>
        </div>
      </div>
    </div>
  )
}

export function Gallery() {
  const { ref, visible } = useIntersect<HTMLDivElement>()
  const [activeItem, setActiveItem] = useState<Item | null>(null)

  return (
    <section className="gallery" id="design">
      <div className="container">
        <div ref={ref} className="section-header">
          <span className={`section-label fade-up${visible ? ' visible' : ''}`}>Design</span>
          <h2
            className={`section-title fade-up${visible ? ' visible' : ''}`}
            style={{ transitionDelay: '80ms' }}
          >
            UX / UI Work
          </h2>
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} onOpen={setActiveItem} />
          ))}
        </div>
      </div>
      {activeItem && <Modal item={activeItem} onClose={() => setActiveItem(null)} />}
    </section>
  )
}
