import { Link } from 'react-router-dom'
import {
  Award,
  BadgeCheck,
  Box,
  CheckCircle2,
  Download,
  Factory,
  Gauge,
  HardHat,
  Leaf,
  MapPin,
  ShieldCheck,
  Star,
  Target,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react'
import { advantages, company, heroImages, products, reviews } from '../data/products.js'
import { siteImages } from '../data/siteImages.js'

export function BrandLogo({ variant = 'secondary' }) {
  const srcMap = {
    main: '/assets/All%20Logos/main%20logo.png',
    secondary: '/assets/All%20Logos/secondary%20logo.png',
    monochrome: '/assets/All%20Logos/monocrop%20variations.png',
    icon: '/assets/All%20Logos/icon%20only2.png'
  }
  return (
    <span className={`se-logo variant-${variant}`}>
      <img src={srcMap[variant]} alt="Sun Engineering" className={`logo-img ${variant}`} />
    </span>
  )
}

export function HeroArt({ variant = 'default' }) {
  return (
    <div className={`hero-art hero-art-${variant}`} aria-hidden="true">
      <div className="halo-line line-a" />
      <div className="halo-line line-b" />
      <img className="art-rods parallax-slow" src={heroImages.rods} alt="" />
      <img className="art-coupler float-3d" src={heroImages.coupler} alt="" />
      <img className="art-machine float-3d-delay" src={heroImages.machine} alt="" />
    </div>
  )
}

export function VideoBackdrop({ src, poster }) {
  if (!src) return null
  return (
    <video className="video-backdrop" autoPlay muted loop playsInline poster={poster || heroImages.machine}>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export function PageHero({ eyebrow, title, accent, text, children, variant = 'default', videoSrc, imageSrc = siteImages.threadingSparks }) {
  return (
    <section className={`premium-hero page-hero-v2 section-pad hero-${variant}`}>
      <VideoBackdrop src={videoSrc} />
      <div className="hero-copy">
        {eyebrow && <span className="tech-chip">{eyebrow}</span>}
        <h1>
          {title} {accent && <span>{accent}</span>}
        </h1>
        {text && <p>{text}</p>}
        {children}
      </div>
      <div className="hero-single-media float-3d" aria-hidden="true">
        <img src={imageSrc} alt="" />
      </div>
    </section>
  )
}

export function VideoCard({ src, title, text, poster }) {
  return (
    <article className="video-card card-lift">
      <video muted loop playsInline preload="metadata" poster={poster || heroImages.machine} onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()}>
        <source src={src} type="video/mp4" />
      </video>
      <div>
        <span className="play-dot">Play</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

export const productHighlights = [
  { icon: ShieldCheck, title: 'High Tensile Strength', text: 'Up to 25% extra strength' },
  { icon: Leaf, title: 'Zero Steel Wastage', text: 'Eco-friendly and efficient' },
  { icon: BadgeCheck, title: 'Tested & Certified', text: 'IS standard bar break' },
]

export const serviceSteps = [
  ['01', 'Site Assessment', 'We assess site conditions, rebar sizes and project requirements.'],
  ['02', 'Threading Setup', 'Advanced thread rolling machines are set up for efficient on-site operation.'],
  ['03', 'Precision Execution', 'High precision threading ensures perfect fit and maximum strength.'],
  ['04', 'Testing & Quality Check', 'Each threaded bar or bolt is checked for accuracy, strength and fitment.'],
  ['05', 'Delivery & Support', 'Timely delivery, installation support and continued technical assistance.'],
]

export function IconPills({ items = productHighlights }) {
  return (
    <div className="icon-pills">
      {items.map(({ icon: Icon, title, text }) => (
        <span key={title}>
          <Icon />
          <b>{title}</b>
          <small>{text}</small>
        </span>
      ))}
    </div>
  )
}

export function AdvantageBand({ compact = false }) {
  const icons = [Gauge, ShieldCheck, BadgeCheck, Leaf, HardHat, Target]
  return (
    <section className={`advantage-band section-pad ${compact ? 'compact' : ''}`}>
      <div className="advantage-title">
        <span>Engineered Advantages</span>
        <h2>Stronger Structures. Smarter Construction.</h2>
      </div>
      <div className="advantage-grid">
        {advantages.slice(0, 6).map((item, index) => {
          const Icon = icons[index] || CheckCircle2
          return (
            <div key={item}>
              <Icon />
              <b>{item.split(' ').slice(0, 3).join(' ')}</b>
              <small>{item}</small>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function TrustPanel({ withQuote = false }) {
  return (
    <div className="trust-panel">
      <div>
        <span>Trusted by engineers. Proven by results.</span>
        <strong>{company.rating}</strong>
        <div className="stars">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}</div>
        <p>Based on {company.reviewCount} reviews</p>
        <AvatarStack />
      </div>
      {withQuote && (
        <blockquote>
          Excellent product quality and timely support. Their threading solutions are robust and deliver consistent performance.
          <b>- Er. Karthikeyan</b>
        </blockquote>
      )}
    </div>
  )
}

export function AvatarStack() {
  return (
    <div className="avatar-stack" aria-hidden="true">
      {reviews.map((review, index) => (
        <span key={review.name}>{review.name.split(' ').at(-1)?.[0] || index + 1}</span>
      ))}
      <span>+</span>
    </div>
  )
}

export function ProductRibbon() {
  const first = products.slice(0, 5)
  return (
    <div className="product-ribbon">
      {first.map((product, index) => (
        <Link to={`/products/${product.id}`} key={product.id} className="ribbon-card card-lift">
          <img src={product.image} alt={product.name} />
          <span>{product.name}</span>
          <small>{index === 0 ? 'View Products' : 'View Details'}</small>
        </Link>
      ))}
    </div>
  )
}

export function QualityBand() {
  const items = [
    { icon: Award, title: 'Industry Leaders', text: 'Trusted expertise' },
    { icon: Zap, title: 'High Tensile', text: 'Strength assured' },
    { icon: Leaf, title: 'Zero Wastage', text: 'Smarter splicing' },
    { icon: Wrench, title: 'On-Site Experts', text: 'Threading support' },
    { icon: Truck, title: 'Pan India', text: 'Delivery network' },
    { icon: ShieldCheck, title: 'Quality Tested', text: 'Reports provided' },
  ]
  return (
    <section className="quality-band section-pad">
      <h3>Trusted. Certified. Committed to Quality.</h3>
      <div>
        {items.map(({ icon: Icon, title, text }) => (
          <span key={title}>
            <Icon />
            <b>{title}</b>
            <small>{text}</small>
          </span>
        ))}
      </div>
    </section>
  )
}

export function StatsStrip() {
  const stats = [
    { icon: Box, value: '10,000+', label: 'Products Delivered' },
    { icon: Factory, value: '150+', label: 'Machines Deployed' },
    { icon: HardHat, value: '500+', label: 'On-Site Projects' },
    { icon: ShieldCheck, value: '100%', label: 'Quality Assured' },
  ]
  return (
    <div className="stats-strip">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label}>
          <Icon />
          <b>{value}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function ContactCta() {
  return (
    <section className="cta-strip section-pad">
      <div>
        <MapPin />
        <span>Need help choosing the right solution?</span>
        <small>Our experts are here to assist you.</small>
      </div>
      <Link className="primary-btn" to="/connect">Connect With Us</Link>
      <Link className="primary-btn" to="/request-quote"><Download size={18} /> Request Quote</Link>
    </section>
  )
}
