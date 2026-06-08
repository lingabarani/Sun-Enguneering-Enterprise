import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, Gauge, Leaf, ShieldCheck, Wrench } from 'lucide-react'
import { company, products, reviews } from '../data/products.js'
import { siteImages } from '../data/siteImages.js'
import ProductCard from '../components/ProductCard.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import { AdvantageBand, BrandLogo, ContactCta, IconPills, ProductRibbon, QualityBand, StatsStrip, TrustPanel } from '../components/PremiumBlocks.jsx'

export default function Home() {
  return (
    <>
      <section className="premium-hero home-hero home-hero-compact home-photo-hero section-pad" style={{ '--hero-bg': `url("${siteImages.homeConstruction}")` }}>
        <div className="hero-copy">
          <div style={{ marginBottom: '16px' }}><BrandLogo variant="main" /></div>
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
        <img className="hero-art float-3d parallax-slow" src={siteImages.homeConstruction} alt="Sun Engineering site execution" style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', width: '100%', objectFit: 'cover', minHeight: '360px' }} />
      </section>

      <motion.section 
        className="section-pad trust-marquee" 
        aria-label="Trust signals"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>Premium Splicing</span>
        <span>Tensile Test Reports</span>
        <span>Spectro Reports</span>
        <span>Pan India Service</span>
        <span>Up to 40mm Bar Size</span>
      </motion.section>

      <motion.section 
        className="section-pad ribbon-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductRibbon />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <AdvantageBand />
      </motion.section>
      
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <QualityBand />
      </motion.section>

      <motion.section 
        className="split section-pad about-strip"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <span className="section-kicker">Heritage & Leadership</span>
          <h2>Engineers in strength. Partners in project certainty.</h2>
          <p>Sun Engineering, Coimbatore builds mechanical splicing products and field services for contractors who need consistent fitment, documented quality and quick technical response.</p>
          <Link className="primary-btn" to="/about">Know More <ArrowRight size={18} /></Link>
        </div>
        <TrustPanel withQuote />
      </motion.section>

      <motion.section 
        className="section-pad"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <StatsStrip />
      </motion.section>

      <motion.section 
        className="section-pad"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-title">
          <div><span>Products & Services</span><h2>Mechanical splicing systems built to perform</h2></div>
          <Link to="/products" className="outline-btn">View All <ArrowRight size={18} /></Link>
        </div>
        <div className="product-grid">{products.slice(0, 9).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </motion.section>

      <motion.section 
        className="section-pad review-backdrop" 
        style={{ '--feature-bg': `url("${siteImages.bridgeProject}")` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-title"><div><span>Trusted by engineers</span><h2 style={{ color: '#fff' }}>Ratings & Reviews</h2></div></div>
        <div className="review-grid">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div>
      </motion.section>

      <ContactCta />
    </>
  )
}
