import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Leaf, Shield, Target, Truck, Users } from 'lucide-react'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import { IconPills, PageHero, VideoCard, serviceSteps } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function Services() {
  const services = products.filter((p) => p.category === 'Threading Services' || p.id === 'machine-spares-service')
  const reasons = [
    { icon: Users, title: 'Save Labour Charges', text: 'Reduce manual work and optimize labour cost.' },
    { icon: Target, title: 'Precision & Zero Wastage', text: 'Accurate threading with zero steel wastage.' },
    { icon: Clock, title: 'Fast Turnaround', text: 'Quick on-site setup and timely completion.' },
    { icon: Shield, title: 'Quality Checked', text: 'Threads are checked for accuracy and fitment.' },
    { icon: Truck, title: 'Pan-India Service', text: 'On-site services available all over India.' },
    { icon: Leaf, title: '25% Extra Strength', text: 'Achieve stronger structures with precise threading.' },
  ]

  return (
    <>
      <PageHero eyebrow="Home > Services" title="On-Site" accent="Threading Services" text="Rebar threading and foundation bolt threading services available on site." variant="services" imageSrc={siteImages.onsiteThreading}>
        <IconPills />
        <div className="hero-actions"><Link className="primary-btn" to="/request-quote">Book Service Visit <ArrowRight size={18} /></Link><Link className="outline-btn" to="/connect">Request Technical Support</Link></div>
      </PageHero>
      <section className="section-pad service-highlight" style={{ '--feature-bg': `url("${siteImages.onsiteThreading}")` }}>
        <h2>On-site Rebar Threading Services Available Across India</h2>
      </section>
      <section className="section-pad"><div className="product-grid service-row">{services.map((p) => <ProductCard key={p.id} product={p} compact />)}</div></section>
      <section className="section-pad">
        <VideoCard src="/assets/Untitled.mp4" title="Threading Machine in Action" text="On-site machine setup, precision fitting and high tensile threading workflow." />
      </section>
      <section className="section-pad">
        <h2>Our On-Site Threading Process</h2>
        <div className="process-grid">{serviceSteps.map(([n, title, text], index) => <div className={`card process-card ${index === 1 ? 'process-image-card' : ''}`} style={index === 1 ? { '--feature-bg': `url("${siteImages.foundationBolts}")` } : undefined} key={title}><b>{n}</b><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
      <section className="section-pad">
        <div className="reason-grid">{reasons.map(({ icon: Icon, title, text }) => <div className="card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>
    </>
  )
}
