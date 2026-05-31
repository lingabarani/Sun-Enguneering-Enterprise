import { useMemo, useState } from 'react'
import { Box, Cog, Ruler, ShieldCheck } from 'lucide-react'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import { AdvantageBand, IconPills, PageHero } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function Products() {
  const cats = ['All Products & Services', ...Array.from(new Set(products.map((p) => p.category)))]
  const [cat, setCat] = useState('All Products & Services')
  const list = useMemo(() => cat === 'All Products & Services' ? products : products.filter((p) => p.category === cat), [cat])

  return (
    <>
      <PageHero eyebrow="Tensile Tek Mechanical Splicing Systems" title="Products &" accent="Services" text="Precision. Strength. Zero steel wastage." imageSrc={siteImages.threadingSparks}>
        <IconPills />
      </PageHero>
      <section className="section-pad feature-image-row">
        <article className="feature-image-card precision-threading-card" style={{ '--feature-bg': `url("${siteImages.threadingSparks}")` }}>
          <span className="section-kicker">Precision Threading</span>
          <h2>Spark-level accuracy for stronger site-ready connections.</h2>
          <p>Threading workflows engineered for consistent fitment, clean load transfer and documented quality reports.</p>
        </article>
        <article className="feature-image-card machine-section-card" style={{ '--feature-bg': `url("${siteImages.rollingMachine}")` }}>
          <span className="section-kicker">Machine Section</span>
          <h2>Rebar thread rolling machines for workshop and project use.</h2>
          <p>Industrial machine support, spares and technical assistance for reliable production runs.</p>
        </article>
      </section>
      <section className="section-pad product-catalog">
        <div className="catalog-toolbar">
          <div className="filter-row">{cats.map((c) => <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
          <div className="spec-chips"><span><Ruler /> Sizes Available</span><span><ShieldCheck /> Tensile Test</span><span><Cog /> Spectro Report</span><span><Box /> Bar Size up to 40mm</span></div>
        </div>
        <div className="product-grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
      <AdvantageBand compact />
    </>
  )
}
