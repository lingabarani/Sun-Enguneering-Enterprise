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
        <div className="gallery-structured-layout">
          {cats.filter(c => c !== 'All Gallery').map(category => {
            const categoryItems = products.filter(p => p.category === category);
            if (categoryItems.length === 0) return null;
            return (
              <div key={category} className="gallery-category-section" style={{ marginBottom: '48px' }}>
                <h3 className="section-kicker" style={{ marginBottom: '20px', display: 'inline-block', borderBottom: '2px solid var(--gold)' }}>{category}</h3>
                <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
                  {categoryItems.map((p) => (
                    <button className="gallery-item" key={p.id} onClick={() => setActive(p)} style={{ textAlign: 'left', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--line)' }}>
                      <img src={p.image} alt={p.name} style={{ borderRadius: '8px', objectFit: 'cover', height: '180px', width: '100%', marginBottom: '12px' }} />
                      <b style={{ color: 'var(--text)', fontSize: '1rem' }}>{p.name}</b>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
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
