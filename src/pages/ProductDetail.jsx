import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Download, Image, MessageCircle, PhoneCall, ShoppingBag } from 'lucide-react'
import { products, advantages } from '../data/products.js'
import { openWhatsApp } from '../utils/whatsappHelper.js'
import { AdvantageBand } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id) || products[0]
  const specs = product.specs || {}
  const msg = `Hello Sun Engineering,\n\nI am interested in ${product.name}.\nPrice: ${product.price}\nSize: ${product.size}\nPlease share best price and availability.`
  
  const categoryImageMap = {
    'Couplers & Components': siteImages.metalCouplers,
    'Steel Threaded Rod': siteImages.threadedRods,
    'Accessories': siteImages.foundationBolts,
    'Machines': siteImages.rollingMachine,
    'Threading Services': siteImages.onsiteThreading,
  }
  const detailHeroImage = categoryImageMap[product.category] || siteImages.metalCouplers

  return (
    <>
      <section className="detail-hero section-pad">
        <div>
          <button 
            onClick={() => navigate(-1)} 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', marginBottom: '16px', fontSize: '0.9rem', fontWeight: 600 }}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <div className="breadcrumb" style={{ marginBottom: '12px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text)', textDecoration: 'none' }}>Home</Link> &gt;{' '}
            <Link to="/products" style={{ color: 'var(--text)', textDecoration: 'none' }}>Products & Services</Link> &gt;{' '}
            <span style={{ color: 'var(--gold)' }}>{product.name}</span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <img className="detail-hero-img float-3d" src={detailHeroImage} alt={product.name} />
      </section>
      
      <section className="section-pad">
        <div className="card">
          <div className="split">
            <div>
              <h2>Technical Specifications</h2>
              <table className="spec-table">
                <tbody>
                  {Object.entries(specs).map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h2>Key Benefits</h2>
              <ul className="check-list">
                {advantages.slice(0, 7).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--line-soft)' }}>
            <Link className="primary-btn" to={`/order/${product.id}`}><ShoppingBag /> Request Quote <ArrowRight size={18} /></Link>
            <a href="/assets/sun-engineering-brochure.pdf" className="outline-btn" download><Download /> Download Brochure</a>
            <button className="outline-btn" onClick={() => openWhatsApp(msg)}><MessageCircle /> Talk to Expert</button>
            <a className="outline-btn" href="tel:+919360170110"><PhoneCall /> Call Now</a>
            <button className="outline-btn"><Image /> More Photos</button>
          </div>
        </div>
      </section>
      
      <AdvantageBand compact />
    </>
  )
}
