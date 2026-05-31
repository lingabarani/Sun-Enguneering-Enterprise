import { Star } from 'lucide-react'
import { faqs, reviews, company } from '../data/products.js'
import FAQAccordion from '../components/FAQAccordion.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import { ContactCta, PageHero, QualityBand, TrustPanel } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function FAQs() {
  return (
    <>
      <PageHero eyebrow="Home > FAQs, Ratings & Reviews" title="FAQs, Ratings &" accent="Reviews" text="Trusted by engineers. Proven by results." variant="faq" imageSrc={siteImages.bridgeProject} />
      <section className="section-pad split faq-review-layout">
        <div className="card"><h2>Frequently Asked Questions</h2><FAQAccordion items={faqs} /></div>
        <div className="card">
          <h2>Ratings & Reviews</h2>
          <div className="rating-hero"><b>{company.rating}</b><span>{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</span><p>Based on {company.reviewCount} reviews</p></div>
          <div className="bars"><span>5 Stars <i style={{ width: '89%' }} /></span><span>4 Stars <i style={{ width: '9%' }} /></span><span>3 Stars <i style={{ width: '2%' }} /></span><span>2 Stars <i style={{ width: '0%' }} /></span></div>
          <TrustPanel />
        </div>
      </section>
      <section className="section-pad review-backdrop" style={{ '--feature-bg': `url("${siteImages.bridgeProject}")` }}>
        <div className="section-title"><div><span>Client Confidence</span><h2>Reviews from project teams</h2></div></div>
        <div className="review-grid">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div>
      </section>
      <QualityBand />
      <ContactCta />
    </>
  )
}
