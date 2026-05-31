import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ShieldCheck, Star } from 'lucide-react'
import { company, products } from '../data/products.js'
import { AvatarStack, BrandLogo } from './PremiumBlocks.jsx'

export default function Footer() {
  const first = products.slice(0, 6)

  return (
    <footer className="footer section-pad">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand footer-brand"><BrandLogo /></Link>
          <p>Precision manufacturing. Mechanical splicing excellence. Building high tensile strength steel structures with zero steel wastage.</p>
          <div className="socials"><span>f</span><span>ig</span><span>in</span><span>yt</span></div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/products">Products & Services</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/connect">Connect With Us</Link>
        </div>
        <div>
          <h4>Our Products</h4>
          {first.map((p) => <Link key={p.id} to={`/products/${p.id}`}>{p.name}</Link>)}
        </div>
        <div>
          <h4>Contact Us</h4>
          <p><MapPin /> {company.address}</p>
          <p><Phone /> {company.phone1}, {company.phone2}</p>
          <p><Mail /> {company.email}</p>
        </div>
        <div>
          <h4>Ratings & Reviews</h4>
          <div className="rating-big">{company.rating} {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
          <p>Based on {company.reviewCount} reviews</p>
          <AvatarStack />
          <div className="cert-badges"><span><ShieldCheck /> ISO</span><span><ShieldCheck /> Quality Assured</span></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sun Engineering, Coimbatore. All Rights Reserved.</span>
        <span>IN Proudly Manufacturing in India</span>
        <span>Privacy Policy | Terms & Conditions</span>
      </div>
      <div className="bottom-actions"><Link to="/">Home</Link><Link to="/products">Products</Link><Link to="/request-quote">Quote</Link></div>
    </footer>
  )
}
