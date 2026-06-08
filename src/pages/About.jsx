import { Award, Eye, Goal, Quote, ShieldCheck, Users } from 'lucide-react'
import { company, advantages, reviews, certifications, clientSegments } from '../data/products.js'
import ReviewCard from '../components/ReviewCard.jsx'
import { IconPills, PageHero, ProductRibbon, TrustPanel } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function About() {
  const timeline = [['2010', 'Company Established'], ['2012', 'Threading Services Commenced'], ['2015', 'Manufacturing Unit Expanded'], ['2018', 'Pan India Service Network'], ['2021', 'Advanced Machines & Technology'], ['2026+', 'Delivering Strength Across India']]

  return (
    <>
      <PageHero eyebrow="Heritage" title="Built in Coimbatore." accent="Trusted across India." text="Precision manufacturing, documented quality and practical field support for high-strength rebar connections." imageSrc={siteImages.bridgeProject}>
        <IconPills />
      </PageHero>
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

      <section className="section-pad">
        <div className="section-title">
          <div><span>Corporate Overview</span><h2>Company Factsheet</h2></div>
        </div>
        <div className="factsheet-grid">
          <div className="card card-lift factsheet-card">
            <h3><Award /> Basic Information</h3>
            <ul>
              <li><span>Nature of Business</span><b>Manufacturer</b></li>
              <li><span>Additional Business</span><b>Factory / Manufacturing</b></li>
              <li><span>Company CEO</span><b>V Ravichandran</b></li>
              <li><span>Total Employees</span><b>11 to 25 People</b></li>
              <li><span>GST Registration</span><b>Jul'17</b></li>
              <li><span>Legal Status</span><b>Proprietorship</b></li>
              <li><span>Annual Turnover</span><b>0 - 40 L</b></li>
            </ul>
          </div>
          
          <div className="factsheet-column">
            <div className="card card-lift factsheet-card">
              <h3><ShieldCheck /> Statutory Profile</h3>
              <ul>
                <li><span>Banker</span><b>CORPORATION BANK</b></li>
                <li><span>GST No.</span><b>33**********1ZP</b></li>
              </ul>
            </div>
            
            <div className="card card-lift factsheet-card">
              <h3><Goal /> Packaging, Payment & Shipment</h3>
              <ul>
                <li><span>Payment Mode</span><b>Cash, Cheque, Online</b></li>
                <li><span>Shipment Mode</span><b>By Road</b></li>
              </ul>
            </div>
          </div>
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
