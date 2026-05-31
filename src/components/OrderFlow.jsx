import { useState } from 'react'
import { buildOrderMessage, openWhatsApp } from '../utils/whatsappHelper.js'

const initial = { size:'', material:'', surfaceType:'', productType:'', machineType:'', power:'', usage:'', serviceType:'', siteLocation:'', barSize:'', serviceDate:'', quantity:'', unit:'piece', requirements:'', name:'', mobile:'', email:'', company:'', location:'' }
export default function OrderFlow({product}){
  const [step,setStep]=useState(1)
  const [form,setForm]=useState({...initial, size: product?.size || '', material: product?.material || '', surfaceType: product?.surfaceType || '', productType: product?.type || ''})
  const [error,setError]=useState('')
  const update=e=>setForm({...form,[e.target.name]:e.target.value})
  const need=(fields)=> fields.every(f=>String(form[f]||'').trim())
  const next=()=>{
    setError('')
    if(step===2){
      const ok = product.category.includes('Machine') ? need(['machineType','power','usage']) : product.category.includes('Service') || product.type==='Service' ? need(['serviceType','siteLocation','barSize']) : need(['size','material','surfaceType','productType'])
      if(!ok) return setError('Please complete the required product details.')
    }
    if(step===3 && (!need(['quantity','unit']) || Number(form.quantity) < 1 || Number(form.quantity) > 1000000)) return setError('Please enter a valid quantity between 1 and 1,000,000.')
    if(step===5 && !need(['name','mobile','location'])) return setError('Please enter name, mobile and location.')
    setStep(s=>Math.min(5,s+1))
  }
  const submit=()=>{
    if(!need(['name','mobile','location'])) return setError('Please enter name, mobile and location.')
    const phoneOk = /^[6-9]\d{9}$/.test(form.mobile.replace(/\D/g, '').slice(-10))
    if(!phoneOk) return setError('Enter a valid 10 digit Indian mobile number.')
    alert('Thank you! Your enquiry has been prepared. Continue on WhatsApp to send it.')
    openWhatsApp(buildOrderMessage({product, form}))
  }
  return <section className="order-flow card">
    <div className="stepper">{[1,2,3,4,5].map(n=><span key={n} className={step>=n?'on':''}>{n}</span>)}</div>
    {error && <div className="error">{error}</div>}
    {step===1 && <div className="order-step product-confirm"><img src={product.image}/><div><h2>{product.name}</h2><p>{product.description}</p><b>{product.price}</b><p>Size / Specification: {product.size}</p><button className="primary-btn" onClick={next}>Continue</button></div></div>}
    {step===2 && <div className="order-step"><h2>Let us know these specifics</h2>{product.category.includes('Machine')?<div className="form-grid"><input name="machineType" required maxLength="80" placeholder="Machine Type" onChange={update}/><input name="power" required maxLength="60" placeholder="Power Requirement" onChange={update}/><input name="usage" required maxLength="120" placeholder="Usage Purpose" onChange={update}/></div>: product.category.includes('Service')||product.type==='Service'?<div className="form-grid"><input name="serviceType" required maxLength="80" placeholder="Service Type" onChange={update}/><input name="siteLocation" required maxLength="120" placeholder="Site Location" onChange={update}/><input name="barSize" required maxLength="60" placeholder="Bar Size" onChange={update}/><input name="serviceDate" type="date" onChange={update}/></div>:<div className="form-grid"><select name="size" value={form.size} onChange={update}><option>25mm</option><option>32mm</option><option>40mm</option><option>Custom Size</option></select><select name="material" value={form.material} onChange={update}><option>Stainless Steel</option><option>Mild Steel</option><option>High Grade Steel</option><option>As Required</option></select><select name="surfaceType" value={form.surfaceType} onChange={update}><option>Hot Dipped Galvanized</option><option>Black</option><option>Zinc Plated</option></select><select name="productType" value={form.productType} onChange={update}><option>Rebar</option><option>Parallel Threaded</option><option>Shear Bolt</option><option>Position</option><option>Cold Forge</option></select></div>}<button className="primary-btn" onClick={next}>Next</button></div>}
    {step===3 && <div className="order-step"><h2>Add quantity details</h2><div className="form-grid"><input name="quantity" type="number" min="1" max="1000000" placeholder="Quantity" value={form.quantity} onChange={update}/><select name="unit" value={form.unit} onChange={update}><option>piece</option><option>nos</option><option>kg</option><option>set</option><option>service</option></select></div><button className="primary-btn" onClick={next}>Next</button></div>}
    {step===4 && <div className="order-step"><h2>Provide Additional Requirements</h2><textarea name="requirements" maxLength="800" placeholder="Additional details about your requirement..." value={form.requirements} onChange={update}></textarea><button className="primary-btn" onClick={next}>Next</button></div>}
    {step===5 && <div className="order-step"><h2>Customer Details</h2><div className="form-grid"><input name="name" required minLength="2" maxLength="80" placeholder="Full Name *" value={form.name} onChange={update}/><input name="mobile" required inputMode="tel" pattern="[0-9+() -]{10,18}" maxLength="18" placeholder="Mobile / WhatsApp Number *" value={form.mobile} onChange={update}/><input name="email" type="email" maxLength="120" placeholder="Email Address" value={form.email} onChange={update}/><input name="company" maxLength="100" placeholder="Company Name" value={form.company} onChange={update}/><input name="location" required maxLength="120" placeholder="Delivery / Site Location *" value={form.location} onChange={update}/></div><button className="primary-btn" onClick={submit}>Submit Order on WhatsApp</button></div>}
  </section>
}
