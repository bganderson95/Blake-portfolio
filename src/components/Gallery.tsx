import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt'
import { useIntersect } from '../hooks/useIntersect'
import { galleryItems, type GalleryItem as Item } from '../data/gallery'

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
        <div className="modal-img-wrap" style={item.bg ? { background: item.bg } : undefined}>
          <img src={item.src} alt={item.title} className="modal-img" />
        </div>
        <p className="modal-caption">{item.title}</p>
        {item.description && <p className="modal-description">{item.description}</p>}
        {item.link && (
          <Link to={item.link.href} className="modal-link" onClick={onClose}>
            {item.link.label} →
          </Link>
        )}
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
      className={`gallery-item${item.wide ? ' gallery-item--wide' : ''} fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 55}ms` }}
      onClick={() => onOpen(item)}
    >
      <div className="gallery-thumb" style={item.bg ? { background: item.bg } : undefined}>
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
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} onOpen={setActiveItem} />
          ))}
        </div>
      </div>
      {activeItem && <Modal item={activeItem} onClose={() => setActiveItem(null)} />}
    </section>
  )
}
