import { useState } from 'react'
import { Download, X } from 'lucide-react'
import { products } from '../data/products.js'
import { PageHero, StatsStrip, TrustPanel, VideoCard } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function Gallery() {
  const cats = ['All Gallery', ...Array.from(new Set(products.map((p) => p.category)))]
  const [cat, setCat] = useState('All Gallery')
  const [active, setActive] = useState(null)
  const items = (cat === 'All Gallery' ? products : products.filter((p) => p.category === cat)).slice(0, 12)

  return (
    <>
      <PageHero eyebrow="Home > Gallery" title="Product & Machinery" accent="Gallery" text="Engineering precision. Delivering strength. Built to perform." variant="gallery" imageSrc={siteImages.threadedRods} />
      <section className="section-pad gallery-page">
        <article className="gallery-feature" style={{ '--feature-bg': `url("${siteImages.threadedRods}")` }}>
          <span className="section-kicker">Main Gallery</span>
          <h2>Stack of threaded steel rods ready for structural work.</h2>
        </article>
        <div className="filter-row">{cats.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="gallery-grid mosaic">
          {items.map((p, i) => (
            <button className={`gallery-item item-${i % 5}`} key={p.id} onClick={() => setActive(p)}>
              <img src={p.image} alt={p.name} />
              <b>{p.name}</b>
            </button>
          ))}
        </div>
        <div className="video-grid">
          <VideoCard src="/assets/A_cinematic_D_reveal_of_the_S.mp4" title="Cinematic Brand Reveal" text="Premium Sun Engineering industrial showcase." />
          <VideoCard src="/assets/Untitled.mp4" title="Machine & Site Footage" text="Threading services and product workflow video." />
        </div>
        <StatsStrip />
        <div className="split">
          <div className="card catalogue-card"><h2>View Full Catalogue</h2><p>Download our complete product and machinery catalogue.</p><a href="/assets/sun-engineering-brochure.pdf" download className="primary-btn"><Download /> Download PDF</a></div>
          <TrustPanel withQuote />
        </div>
      </section>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.name}>
          <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery preview"><X /></button>
          <div className="lightbox-panel">
            <img src={active.image} alt={active.name} />
            <div>
              <span className="section-kicker">{active.category}</span>
              <h2>{active.name}</h2>
              <p>{active.description}</p>
              <a href="/assets/sun-engineering-brochure.pdf" download className="primary-btn"><Download /> Download Datasheet</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
