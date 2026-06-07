import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Star } from 'lucide-react'
import { company, products } from '../data/products.js'
import { AvatarStack, BrandLogo } from './PremiumBlocks.jsx'

const Facebook = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
const Instagram = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const Linkedin = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
const Youtube = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>

export default function Footer() {
  const first = products.slice(0, 6)

  return (
    <footer className="footer section-pad">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand footer-brand"><BrandLogo variant="monochrome" /></Link>
          <p>Precision Manufacturing. Mechanical Splicing Excellence. Building high tensile strength steel structures with zero steel wastage.</p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><span><Facebook size={18} /></span></a>
            <a href="#" aria-label="Instagram"><span><Instagram size={18} /></span></a>
            <a href="#" aria-label="LinkedIn"><span><Linkedin size={18} /></span></a>
            <a href="#" aria-label="YouTube"><span><Youtube size={18} /></span></a>
          </div>
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
          <p><MapPin /> <span>{company.address}</span></p>
          <p><Phone /> <span>{company.phone1}, {company.phone2}</span></p>
          <p><Mail /> <span>{company.email}</span></p>
        </div>
        <div>
          <h4>Ratings & Reviews</h4>
          <div className="rating-big">{company.rating} {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
          <p>Based on {company.reviewCount} reviews</p>
          <AvatarStack />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sun Engineering, Coimbatore. All Rights Reserved.</span>
        <span>IN Proudly Manufacturing in India</span>
        <span>Design and Developed By <a href="https://www.keywordit.in/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline', color: 'inherit', textDecoration: 'underline' }}>Keywordit</a></span>
      </div>
    </footer>
  )
}
