import { useParams } from 'react-router-dom'
import { products } from '../data/products.js'
import OrderFlow from '../components/OrderFlow.jsx'
export default function Order(){const {id}=useParams(); const product=products.find(p=>p.id===id)||products[0]; return <><section className="page-hero section-pad"><h1>Order / Enquiry <span>{product.name}</span></h1><p>Fill product details and send the complete enquiry to WhatsApp.</p></section><section className="section-pad"><OrderFlow product={product}/></section></>}
