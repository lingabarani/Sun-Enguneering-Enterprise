import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Download, Image, MessageCircle, PhoneCall, ShoppingBag } from 'lucide-react'
import { products, advantages } from '../data/products.js'
import { openWhatsApp } from '../utils/whatsappHelper.js'
import ProductCard from '../components/ProductCard.jsx'
import { AdvantageBand } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id) || products[0]
  const specs = product.specs || {}
  const msg = `Hello Sun Engineering,\n\nI am interested in ${product.name}.\nPrice: ${product.price}\nSize: ${product.size}\nPlease share best price and availability.`
  const related = products.filter((p) => p.id !== product.id).slice(0, 4)
  const detailHeroImage = product.category === 'Couplers & Components' ? siteImages.metalCouplers : product.image

  return (
    <>
      <section className="detail-hero section-pad">
        <div>
          <span className="breadcrumb">Home &gt; Products &gt; {product.name}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <img className="detail-hero-img float-3d" src={detailHeroImage} alt={product.name} />
      </section>
      <section className="section-pad detail-grid-v2">
        <div className="detail-products">
          {related.slice(0, 5).map((p) => <ProductCard key={p.id} product={p} compact />)}
        </div>
        <aside className="card spec-panel">
          <h2>Technical Specifications</h2>
          <table className="spec-table"><tbody>{Object.entries(specs).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
          <h2>Key Benefits</h2>
          <ul className="check-list">{advantages.slice(0, 7).map((a) => <li key={a}>{a}</li>)}</ul>
          <div className="hero-actions">
            <Link className="primary-btn" to={`/order/${product.id}`}><ShoppingBag /> Request Quote <ArrowRight size={18} /></Link>
            <a href="/assets/sun-engineering-brochure.pdf" className="outline-btn" download><Download /> Download Brochure</a>
            <button className="outline-btn" onClick={() => openWhatsApp(msg)}><MessageCircle /> Talk to Expert</button>
            <a className="outline-btn" href="tel:+919360170110"><PhoneCall /> Call Now</a>
            <button className="outline-btn"><Image /> More Photos</button>
          </div>
        </aside>
      </section>
      <AdvantageBand compact />
    </>
  )
}
