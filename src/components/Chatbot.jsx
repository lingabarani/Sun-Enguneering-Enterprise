import { useState } from 'react'
import { Bot, CheckCircle2, MessageCircle, PhoneCall, Send, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { openWhatsApp } from '../utils/whatsappHelper.js'

const quickActions = [
  {
    label: 'Product selection',
    reply: 'Share the bar size, quantity and project location. Our team will suggest the suitable coupler, threading process and report requirements.',
  },
  {
    label: 'Quote support',
    reply: 'For a fast quote, send product name, size, quantity, coating preference and delivery location.',
  },
  {
    label: 'On-site service',
    reply: 'We can coordinate threading, bar cutting and machine support. Share site location, bar diameter range and project timeline.',
  },
  {
    label: 'Test reports',
    reply: 'Tensile test and spectro report support can be aligned with the selected product and project requirement.',
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I’m SunBot. How can I help you today?' },
  ])
  const [text, setText] = useState('')

  if (!open) {
    return (
      <button className="chat-min badge-icon" onClick={() => setOpen(true)} aria-label="Open SunBot">
        <img src="/assets/All%20Logos/icon%20only.png" alt="SunBot" />
      </button>
    )
  }

  const choose = (action) => {
    setMessages((old) => [...old, { from: 'user', text: action.label }, { from: 'bot', text: action.reply }])
  }

  const submit = (e) => {
    e.preventDefault()
    const clean = text.trim()
    if (!clean) return
    setMessages((old) => [...old, { from: 'user', text: clean }, { from: 'bot', text: 'I will send this to our WhatsApp enquiry desk so the team can respond with exact details.' }])
    openWhatsApp(`Hello Sun Engineering,\n\nWebsite assistant enquiry:\n${clean}\n\nPlease guide me with product, price and next steps.`)
    setText('')
  }

  return (
    <section className="chatbot" aria-label="SunBot">
      <button className="close" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={16} /></button>
      <div className="bot-head">
        <div className="bot-avatar-badge"><img src="/assets/All%20Logos/icon%20only.png" alt="SunBot" /></div>
        <div>
          <b>SunBot</b>
          <p><CheckCircle2 size={14} /> Online enquiry desk</p>
        </div>
      </div>

      <div className="bot-thread">
        {messages.slice(-5).map((message, index) => (
          <p key={`${message.from}-${index}`} className={message.from === 'user' ? 'user-msg' : 'bot-msg'}>
            {message.text}
          </p>
        ))}
      </div>

      <div className="bot-actions">
        {quickActions.map((action) => (
          <button key={action.label} onClick={() => choose(action)}>{action.label}</button>
        ))}
      </div>

      <form className="bot-form" onSubmit={submit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={220}
          placeholder="Type your requirement"
          aria-label="Type your requirement"
        />
        <button aria-label="Send enquiry"><Send size={16} /></button>
      </form>

      <div className="bot-footer">
        <Link to="/request-quote">Quote form</Link>
        <button onClick={() => openWhatsApp('Hello Sun Engineering,\n\nI need expert support from the website assistant.')}>
          <MessageCircle size={14} /> Chat Now
        </button>
        <a href="tel:+919360170110"><PhoneCall size={14} /> Call</a>
      </div>
    </section>
  )
}
