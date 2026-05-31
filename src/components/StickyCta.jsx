import { FileText, MessageCircle, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { openWhatsApp, generalMessage } from '../utils/whatsappHelper.js'

export default function StickyCta() {
  return (
    <div className="sticky-cta" aria-label="Quick enquiry actions">
      <Link to="/request-quote" className="sticky-cta-main">
        <FileText size={18} />
        <span>Request Quote</span>
      </Link>
      <button onClick={() => openWhatsApp(generalMessage())} aria-label="Connect on WhatsApp">
        <MessageCircle size={18} />
      </button>
      <a href="tel:+919360170110" aria-label="Call Sun Engineering">
        <PhoneCall size={18} />
      </a>
    </div>
  )
}
