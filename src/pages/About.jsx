import { Award, Eye, Goal, Quote, ShieldCheck, Users } from 'lucide-react'
import { company, advantages, reviews, certifications, clientSegments } from '../data/products.js'
import ReviewCard from '../components/ReviewCard.jsx'
import { BrandLogo, IconPills, PageHero, ProductRibbon, TrustPanel } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function About() {
  const timeline = [['2010', 'Company Established'], ['2012', 'Threading Services Commenced'], ['2015', 'Manufacturing Unit Expanded'], ['2018', 'Pan India Service Network'], ['2021', 'Advanced Machines & Technology'], ['2026+', 'Delivering Strength Across India']]

  return (
    <>
      <PageHero eyebrow="Heritage" title="Built in Coimbatore." accent="Trusted across India." text="Precision manufacturing, documented quality and practical field support for high-strength rebar connections." imageSrc={siteImages.bridgeProject}>
        <IconPills />
      </PageHero>
      <section className="section-pad about-dashboard">
        <div className="card overview-card">
          <div style={{ marginBottom: '14px' }}><BrandLogo variant="main" /></div>
          <h2>Engineering strength with accountable service.</h2>
          <p>{company.name}, {company.place} is a trusted manufacturer and supplier of Tensile Tek Mechanical Splicing Systems. We manufacture high tensile steel products and deliver precision engineered services across India.</p>
        </div>
        <div className="card mission-card"><Goal /><h3>Mission</h3><p>To deliver precision engineered mechanical splicing solutions that ensure strength, quality and customer satisfaction.</p></div>
        <div className="card mission-card"><Eye /><h3>Vision</h3><p>To be India's most trusted brand in mechanical splicing systems through innovation, reliability and service.</p></div>
        <div className="card journey-card">
          <h3>Our Journey</h3>
          <div className="timeline">{timeline.map(([y, t]) => <div key={y}><b>{y}</b><span>{t}</span></div>)}</div>
        </div>
      </section>
      <section className="section-pad leadership-band">
        <div>
          <span className="section-kicker">Leadership Note</span>
          <h2>Every coupler has to earn confidence before it reaches site.</h2>
          <p><Quote /> We focus on fitment accuracy, strength verification and responsive support because structural products are measured by performance, not promises.</p>
          <b>{company.proprietor}, Proprietor</b>
        </div>
        <div className="signal-grid">
          {certifications.map((item) => <span key={item}><Award /> {item}</span>)}
        </div>
      </section>
      <section className="section-pad quality-assurance-showcase">
        <div className="showcase-image float-3d"><img src={siteImages.qualityAssurance} alt="Worker measuring metal coupler quality" /></div>
        <div className="card">
          <span className="section-kicker">Quality Assurance</span>
          <h2>Tested, Certified & Quality Assured</h2>
          <p>Every critical coupler batch is aligned with tensile test expectations, coupler spectro report support and IS standard bar break confidence.</p>
          <div className="benefit-grid">{certifications.map((item) => <span key={item}><ShieldCheck /> {item}</span>)}</div>
        </div>
      </section>
      <section className="section-pad featured-project-band" style={{ '--feature-bg': `url("${siteImages.bridgeProject}")` }}>
        <span className="section-kicker">Featured Projects</span>
        <h2>Trusted for large structures where connection reliability matters.</h2>
        <p>Bridge, high-rise and infrastructure teams depend on high-strength mechanical splicing to reduce waste and improve execution speed.</p>
      </section>
      <section className="section-pad client-band">
        <div className="section-title">
          <div><span>Client Segments</span><h2>Built for teams that cannot compromise on strength</h2></div>
        </div>
        <div className="client-grid">
          {clientSegments.map((item) => <span key={item}><Users /> {item}</span>)}
        </div>
      </section>
      <section className="section-pad split">
        <div className="card">
          <h2>Why partner with Sun Engineering?</h2>
          <div className="benefit-grid">{advantages.slice(0, 6).map((a) => <span key={a}><ShieldCheck /> {a}</span>)}</div>
        </div>
        <TrustPanel withQuote />
      </section>
      <section className="section-pad"><ProductRibbon /></section>
      <section className="section-pad">
        <div className="review-grid">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div>
      </section>
    </>
  )
}
