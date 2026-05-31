import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, PhoneCall, ShoppingBag } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsappHelper.js'

export default function ProductCard({ product, compact = false }) {
  const msg = `Hello Sun Engineering,\n\nI am interested in ${product.name}.\nPrice: ${product.price}\nSize: ${product.size}\nPlease share best price and availability.`

  return (
    <article className={`product-card card-lift ${compact ? 'compact' : ''}`}>
      <div className="product-media">
        <img src={product.image} alt={product.name} />
        <span>{product.type}</span>
      </div>
      <div className="product-body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="spec-line"><span>{product.size}</span><b>{product.price}</b></div>
        <div className="card-actions">
          <Link to={`/products/${product.id}`} className="outline-btn product-action-btn">VIEW DETAILS <ArrowRight size={16} /></Link>
          <Link to={`/order/${product.id}`} className="mini-btn product-action-btn enquire-action"><ShoppingBag size={16} /> ENQUIRE NOW</Link>
          <button className="mini-icon" onClick={() => openWhatsApp(msg)} aria-label={`WhatsApp ${product.name}`}><MessageCircle size={16} /></button>
          <a className="mini-icon" href="tel:+919360170110" aria-label="Call Sun Engineering"><PhoneCall size={16} /></a>
        </div>
      </div>
    </article>
  )
}
