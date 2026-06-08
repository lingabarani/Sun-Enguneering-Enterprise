import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowRight, FileText, Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { BrandLogo } from './PremiumBlocks.jsx'
import { products } from '../data/products.js'

const links = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products & Services'],
  ['/gallery', 'Gallery'],
  ['/connect', 'Connect With Us'],
]

function MobileProductsDropdown({ close }) {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <div className="mobile-dropdown-wrapper">
      <div 
        className="mobile-dropdown-toggle" 
        onClick={() => setExpanded(!expanded)}
        style={{ 
          padding: '14px', 
          border: '1px solid var(--line-soft)', 
          background: 'rgba(255,255,255,.03)', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center', 
          gap: '8px',
          cursor: 'pointer', 
          color: 'var(--text)' 
        }}
      >
        <span style={{ fontWeight: 500 }}>Products & Services</span>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      
      {expanded && (
        <div 
          className="mobile-dropdown-content open" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            background: 'rgba(0,0,0,0.4)', 
            borderLeft: '2px solid var(--gold)' 
          }}
        >
          <NavLink 
            to="/products" 
            onClick={close} 
            style={{ padding: '12px 18px', fontSize: '0.95rem', textAlign: 'right', color: 'var(--gold)', fontWeight: 600 }}
          >
            All Products & Services
          </NavLink>
          {products.map(p => (
            <NavLink 
              key={p.id} 
              to={`/products/${p.id}`} 
              className={({isActive}) => isActive ? 'active' : ''} 
              onClick={close} 
              style={{ padding: '12px 18px', fontSize: '0.9rem', textAlign: 'right', borderTop: '1px solid var(--line-soft)' }}
            >
              {p.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const close=()=>setOpen(false)
  return <header className="navbar">
    <Link to="/" className="brand" onClick={close}>
      <BrandLogo variant="secondary" />
    </Link>
    <nav className="desktop-nav">
      {links.map(([to,label])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}
    </nav>
    <div className="nav-actions">
      <Link className="quote-btn" to="/request-quote"><FileText size={18}/> Request Quote <ArrowRight size={18}/></Link>
      <button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </div>
    {open && <div className="mobile-menu">
      {links.map(([to,label]) => {
        if (label === 'Products & Services') {
          return <MobileProductsDropdown key={to} close={close} />
        }
        return <NavLink key={to} to={to} onClick={close}>{label}</NavLink>
      })}
      <Link to="/request-quote" className="quote-btn" onClick={close}>Request Quote</Link>
    </div>}
  </header>
}
