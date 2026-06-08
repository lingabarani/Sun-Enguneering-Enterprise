import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Download, Image, MessageCircle, PhoneCall, ShoppingBag } from 'lucide-react'
import { products, advantages } from '../data/products.js'
import { openWhatsApp } from '../utils/whatsappHelper.js'
import { AdvantageBand } from '../components/PremiumBlocks.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id) || products[0]
  const specs = product.specs || {}
  const msg = `Hello Sun Engineering,\n\nI am interested in ${product.name}.\nPrice: ${product.price}\nSize: ${product.size}\nPlease share best price and availability.`
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
        <figure className="detail-product-media float-3d">
          <img className="detail-hero-img" src={product.image} alt={product.name} fetchPriority="high" decoding="async" />
          <figcaption>{product.type}</figcaption>
        </figure>
      </section>
      
      <section className="section-pad">
        <div className="card product-detail-card">
          <div className="detail-summary">
            <span className="tag">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="spec-line detail-price-line"><span>{product.size}</span><b>{product.price}</b></div>
          </div>
          <div className="product-detail-layout">
            <div className="detail-panel">
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
            <div className="detail-panel">
              <h2>Key Benefits</h2>
              <ul className="check-list">
                {advantages.slice(0, 7).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero-actions detail-actions">
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
