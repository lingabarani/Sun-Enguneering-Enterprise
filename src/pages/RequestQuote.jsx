import { useState } from 'react'
import { Headphones, Send } from 'lucide-react'
import { products } from '../data/products.js'
import { buildQuoteMessage, openWhatsApp } from '../utils/whatsappHelper.js'
import { PageHero, ProductRibbon, TrustPanel } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function RequestQuote() {
  const [f, setF] = useState({ name: '', company: '', phone: '', email: '', product: '', barSize: '', quantity: '', location: '', timeline: '', message: '' })
  const [error, setError] = useState('')
  const upd = (e) => setF({ ...f, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const phoneOk = /^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, '').slice(-10))
    if (!phoneOk) {
      setError('Enter a valid 10 digit Indian mobile number.')
      return
    }
    if (!f.product || !f.timeline) {
      setError('Select a product/service and preferred timeline.')
      return
    }
    setError('')
    openWhatsApp(buildQuoteMessage(f))
  }

  return (
    <>
      <PageHero title="Request a" accent="Quote" text="Get a customized quotation for high tensile mechanical splicing, threading solutions and on-site services." variant="quote" imageSrc={siteImages.engineersConsulting} />
      <section className="section-pad quote-wrap">
        <form className="card form" onSubmit={submit}>
          <h2>Tell Us About Your Requirement</h2>
          {error && <p className="form-error">{error}</p>}
          <div className="form-grid">
            <input name="name" required minLength="2" maxLength="80" placeholder="Full Name *" value={f.name} onChange={upd} />
            <input name="company" required maxLength="100" placeholder="Company / Organization *" value={f.company} onChange={upd} />
            <input name="phone" required inputMode="tel" pattern="[0-9+() -]{10,18}" maxLength="18" placeholder="Phone / WhatsApp *" value={f.phone} onChange={upd} />
            <input name="email" required type="email" maxLength="120" placeholder="Email Address *" value={f.email} onChange={upd} />
            <input name="location" required maxLength="120" placeholder="Project Location *" value={f.location} onChange={upd} />
            <select name="product" required value={f.product} onChange={upd}><option value="">Product / Service Requested *</option>{products.map((p) => <option key={p.id}>{p.name}</option>)}</select>
            <input name="barSize" required maxLength="60" placeholder="Material / Bar Size *" value={f.barSize} onChange={upd} />
            <input name="quantity" required type="number" min="1" max="1000000" placeholder="Required Quantity *" value={f.quantity} onChange={upd} />
            <select name="timeline" required value={f.timeline} onChange={upd}><option value="">Preferred Timeline *</option><option>Immediate</option><option>Within 1 Week</option><option>Within 1 Month</option></select>
            <input type="file" />
          </div>
          <textarea name="message" maxLength="800" placeholder="Your Message / Additional Requirements" value={f.message} onChange={upd}></textarea>
          <div className="hero-actions"><button className="primary-btn"><Send size={18} /> Submit Quote Request</button><a className="outline-btn" href="tel:+919360170110"><Headphones /> Talk to Expert</a></div>
        </form>
        <aside className="quote-side">
          <div className="consult-image-card"><img src={siteImages.engineersConsulting} alt="Engineers reviewing drawings for consultation" /></div>
          <div className="card why-card"><h2>Why Choose Sun Engineering?</h2><ul className="check-list"><li>High tensile strength</li><li>Cost savings up to 75%</li><li>Zero steel wastage</li><li>On-time delivery</li><li>Pan-India support</li></ul></div>
          <TrustPanel withQuote />
        </aside>
      </section>
      <section className="section-pad"><ProductRibbon /></section>
    </>
  )
}
