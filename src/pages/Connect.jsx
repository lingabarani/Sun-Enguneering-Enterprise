import { useState } from 'react'
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import { company, products, faqs } from '../data/products.js'
import { openWhatsApp } from '../utils/whatsappHelper.js'
import FAQAccordion from '../components/FAQAccordion.jsx'
import { IconPills, PageHero, TrustPanel } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function Connect() {
  const [f, setF] = useState({ name: '', email: '', phone: '', company: '', product: '', message: '' })
  const [error, setError] = useState('')
  const upd = (e) => setF({ ...f, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const phoneOk = /^[6-9]\d{9}$/.test(f.phone.replace(/\D/g, '').slice(-10))
    if (!phoneOk) {
      setError('Enter a valid 10 digit Indian mobile number.')
      return
    }
    if (!f.product || f.message.trim().length < 10) {
      setError('Select a product interest and enter at least 10 characters in the message.')
      return
    }
    setError('')
    openWhatsApp(`Hello Sun Engineering,\n\nContact Form Enquiry\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\nCompany: ${f.company}\nProduct Interest: ${f.product}\nMessage: ${f.message}`)
  }

  return (
    <>
      <PageHero eyebrow={company.brand} title="Connect With" accent="Sun Engineering" text="Reach out to our team for product enquiries, service support, partnerships or technical assistance." variant="connect" imageSrc={siteImages.onsiteThreading}>
        <TrustPanel />
      </PageHero>
      <section className="section-pad connect-grid">
        <form className="card form" onSubmit={submit}>
          <h2><MessageSquare /> Send Us a Message</h2>
          {error && <p className="form-error">{error}</p>}
          <div className="form-grid">
            <input name="name" placeholder="Full Name*" required minLength="2" maxLength="80" value={f.name} onChange={upd} />
            <input name="email" placeholder="Email Address*" required type="email" maxLength="120" value={f.email} onChange={upd} />
            <input name="phone" placeholder="Phone Number*" required inputMode="tel" pattern="[0-9+() -]{10,18}" maxLength="18" value={f.phone} onChange={upd} />
            <input name="company" placeholder="Company / Organization" maxLength="100" value={f.company} onChange={upd} />
            <select name="product" required value={f.product} onChange={upd}><option value="">Product Interest*</option>{products.map((p) => <option key={p.id}>{p.name}</option>)}</select>
          </div>
          <textarea name="message" required minLength="10" maxLength="800" placeholder="Your Message*" value={f.message} onChange={upd}></textarea>
          <button className="primary-btn"><Send size={18} /> Send Message</button>
        </form>
        <div>
          <div className="consult-image-card"><img src={siteImages.engineersConsulting} alt="Engineers reviewing drawings at construction site" /></div>
          <div className="contact-cards">
            <div><Phone /> <b>Phone</b><span>{company.phone1}<br />{company.phone2}</span></div>
            <div><Mail /> <b>Email</b><span>{company.email}</span></div>
            <div><MapPin /> <b>Address</b><span>{company.address}</span></div>
            <div><Clock /> <b>Business Hours</b><span>Mon - Sat 9:00 AM - 6:00 PM<br />Sunday Closed</span></div>
          </div>
          <div className="map-card"><b>Kaniyur</b><span>Coimbatore - 641659</span></div>
        </div>
      </section>
      <section className="section-pad split">
        <div className="card"><h2>Frequently Asked Questions</h2><FAQAccordion items={faqs.slice(0, 5)} /></div>
        <div className="card"><h2>Why Choose Sun Engineering?</h2><IconPills /></div>
      </section>
    </>
  )
}
