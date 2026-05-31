import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
export default function FAQAccordion({items}){
  const [open,setOpen]=useState(0)
  return <div className="faq-list">{items.map((it,i)=><div key={it.q} className="faq-item">
    <button onClick={()=>setOpen(open===i?null:i)}><span>{i+1}. {it.q}</span><ChevronDown className={open===i?'rotate':''}/></button>
    {open===i && <p>{it.a}</p>}
  </div>)}</div>
}
