import { MessageCircle } from 'lucide-react'
import { generalMessage, openWhatsApp } from '../utils/whatsappHelper.js'
export default function WhatsAppButton(){return <button className="whatsapp-float" onClick={()=>openWhatsApp(generalMessage())}><MessageCircle/> <span>Order on WhatsApp</span></button>}
