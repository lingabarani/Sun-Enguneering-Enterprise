import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Gauge, Leaf, ShieldCheck, Wrench } from 'lucide-react'
import { company, products, reviews } from '../data/products.js'
import { siteImages } from '../data/siteImages.js'
import ProductCard from '../components/ProductCard.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import { AdvantageBand, ContactCta, IconPills, ProductRibbon, QualityBand, StatsStrip, TrustPanel } from '../components/PremiumBlocks.jsx'

export default function Home() {
  return (
    <>
      <section className="premium-hero home-hero home-hero-compact home-photo-hero section-pad" style={{ '--hero-bg': `url("${siteImages.homeConstruction}")` }}>
        <div className="hero-copy">
          <span className="tech-chip">{company.brand}</span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            Precision Mechanical <span>Splicing & Rebar Threading Solutions</span>
          </motion.h1>
          <p>Build high tensile strength steel structures with zero steel wastage.</p>
          <IconPills items={[
            { icon: Award, title: 'Precision Engineering', text: 'Perfect fit' },
            { icon: ShieldCheck, title: 'High Tensile Strength', text: 'Bar-break tested' },
            { icon: Leaf, title: 'Zero Steel Wastage', text: 'Smart construction' },
          ]} />
          <div className="hero-actions">
            <Link className="primary-btn" to="/request-quote">Request Quote <ArrowRight size={18} /></Link>
            <Link className="outline-btn" to="/products">Explore Product Studio <ArrowRight size={18} /></Link>
          </div>
        </div>
        <div className="hero-proof-panel">
          <span className="section-kicker">Project Ready Support</span>
          <h2>From coupler selection to site execution.</h2>
          <div>
            <p><Gauge /> Size guidance up to 40mm bar diameter</p>
            <p><ShieldCheck /> Tensile and spectro report support</p>
            <p><Wrench /> On-site threading and service coordination</p>
          </div>
        </div>
      </section>

      <section className="section-pad trust-marquee" aria-label="Trust signals">
        <span>ISO 9001:2015</span>
        <span>Tensile Test Reports</span>
        <span>Spectro Reports</span>
        <span>Pan India Service</span>
        <span>Up to 40mm Bar Size</span>
      </section>

      <section className="section-pad ribbon-section">
        <ProductRibbon />
      </section>

      <AdvantageBand />
      <QualityBand />

      <section className="split section-pad about-strip">
        <div>
          <span className="section-kicker">Heritage & Leadership</span>
          <h2>Engineers in strength. Partners in project certainty.</h2>
          <p>Sun Engineering, Coimbatore builds mechanical splicing products and field services for contractors who need consistent fitment, documented quality and quick technical response.</p>
          <Link className="primary-btn" to="/about">Know More <ArrowRight size={18} /></Link>
        </div>
        <TrustPanel withQuote />
      </section>

      <section className="section-pad"><StatsStrip /></section>

      <section className="section-pad">
        <div className="section-title">
          <div><span>Products & Services</span><h2>Mechanical splicing systems built to perform</h2></div>
          <Link to="/products" className="outline-btn">View All <ArrowRight size={18} /></Link>
        </div>
        <div className="product-grid">{products.slice(0, 9).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="section-pad review-backdrop" style={{ '--feature-bg': `url("${siteImages.bridgeProject}")` }}>
        <div className="section-title"><div><span>Trusted by engineers</span><h2 style={{ color: '#fff' }}>Ratings & Reviews</h2></div></div>
        <div className="review-grid">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div>
      </section>

      <ContactCta />
    </>
  )
}
