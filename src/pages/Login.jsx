import { Mail, ShieldCheck, Users } from 'lucide-react'
import { BrandLogo } from '../components/PremiumBlocks.jsx'
import { siteImages } from '../data/siteImages.js'

export default function Login() {
  return (
    <section className="login-page section-pad" style={{ '--login-bg': `url("${siteImages.engineersConsulting}")` }}>
      <div className="login-hero">
        <span className="tech-chip">Tensile Tek Mechanical Splicing Systems</span>
        <h1>Precision. Strength. <span>Zero Compromise.</span></h1>
        <p>Engineered mechanical splicing and rebar threading solutions that build stronger, safer and longer lasting structures.</p>
        <div className="login-visual float-3d"><img src={siteImages.engineersConsulting} alt="Engineers reviewing drawings at construction site" /></div>
        <div className="secure-strip"><span><ShieldCheck /> Secure Login</span><span><Users /> Trusted by Engineers</span><span><Mail /> 24/7 Support</span></div>
      </div>
      <form className="login-card card">
        <BrandLogo compact />
        <h2>Welcome <span>Back</span></h2>
        <p>Sign in to access your account and manage your projects.</p>
        <label>Email Address<input placeholder="youremail@example.com" type="email" /></label>
        <label>Password<input placeholder="Enter your password" type="password" /></label>
        <div className="form-row"><label><input type="checkbox" defaultChecked /> Remember me</label><a>Forgot Password?</a></div>
        <button className="primary-btn" type="button">Sign In</button>
        <p>Don't have an account? <b>Request Access</b></p>
        <button className="outline-btn" type="button">Sign in with Google</button>
      </form>
    </section>
  )
}
