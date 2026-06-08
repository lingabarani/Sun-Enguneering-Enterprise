import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ArrowRight, FileText, Menu, X } from 'lucide-react'
import { BrandLogo } from './PremiumBlocks.jsx'

const links = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/products', 'Products & Services'],
  ['/gallery', 'Gallery'],
  ['/connect', 'Connect With Us'],
]

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
      {links.map(([to,label])=><NavLink key={to} to={to} onClick={close}>{label}</NavLink>)}
      <Link to="/request-quote" className="quote-btn" onClick={close}>Request Quote</Link>
    </div>}
  </header>
}
