export const WHATSAPP_NUMBER = '919080274486'
export const PHONE_PRIMARY = '+919360170110'
export const PHONE_SECONDARY = '+919092048069'

export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}

export function buildOrderMessage({ product, form }) {
  return `Hello Sun Engineering,\n\nI want to place an order / enquiry.\n\nProduct Details:\nProduct Name: ${product?.name || ''}\nPrice: ${product?.price || 'Price on Request'}\nSize: ${form.size || product?.size || ''}\nMaterial: ${form.material || product?.material || ''}\nSurface Type: ${form.surfaceType || product?.surfaceType || ''}\nProduct Type: ${form.productType || product?.category || ''}\n\nOrder Details:\nQuantity: ${form.quantity || ''} ${form.unit || ''}\nAdditional Requirement: ${form.requirements || ''}\n\nCustomer Details:\nName: ${form.name || ''}\nMobile: ${form.mobile || ''}\nEmail: ${form.email || ''}\nCompany: ${form.company || ''}\nLocation: ${form.location || ''}\n\nPlease share final price, availability, delivery time, and payment details.\n\nThank you.`
}

export function buildQuoteMessage(form) {
  return `Hello Sun Engineering,\n\nI want to request a quote.\n\nCustomer Details:\nName: ${form.name || ''}\nCompany: ${form.company || ''}\nPhone / WhatsApp: ${form.phone || ''}\nEmail: ${form.email || ''}\nProject Location: ${form.location || ''}\n\nRequirement Details:\nProduct / Service Requested: ${form.product || ''}\nMaterial / Bar Size: ${form.barSize || ''}\nRequired Quantity: ${form.quantity || ''}\nPreferred Timeline: ${form.timeline || ''}\nAdditional Message: ${form.message || ''}\n\nPlease share the best quotation, availability, delivery timeline, and payment details.\n\nThank you.`
}

export function generalMessage() {
  return `Hello Sun Engineering, I’d like to know more about your products.`
}
