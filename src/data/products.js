import { siteImages } from './siteImages.js'

export const company = {
  name: 'Sun Engineering',
  place: 'Coimbatore',
  brand: 'Tensile Tek Mechanical Splicing Systems',
  tagline: 'Build High Tensile Strength Steel Structure With Zero Steel Wastage',
  address: '5/216-26, Rajiv Nagar, Unjapalayam Road, Kaniyur, Coimbatore - 641659, Tamil Nadu, India',
  phone1: '+91 93601 70110',
  phone2: '+91 90920 48069',
  email: 'sunengineering1947@gmail.com',
  proprietor: 'V Ravichandran',
  rating: '4.8',
  reviewCount: '128+',
}

const A='/assets/products/'
export const heroImages = {
  machine: A+'rebar-thread-rolling-machine-250x250.jpeg',
  coupler: A+'25mm-taper-threaded-coupler-250x250.jpeg',
  rods: A+'taper-threading-250x250.jpeg',
}

export const products = [
  { id:'25mm-taper-threaded-coupler', name:'25mm Taper Threaded Coupler', category:'Couplers & Components', image:siteImages.metalCouplers, price:'Get Latest Price', size:'25 mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Coupler', description:'Precision taper threaded coupler for strong mechanical splicing and reliable rebar connection.', specs:{'Coupler Type':'Taper Threaded','Material':'High Grade Steel','Size':'25 mm','Shape':'Cylinder','Surface Type':'Black / Zinc Plated','Brand':'Sun Engineering'} },
  { id:'40mm-rebar-coupler', name:'40mm Rebar Coupler', category:'Couplers & Components', image:siteImages.metalCouplers, price:'₹95 / piece', size:'40 mm Dia', material:'Stainless Steel', surfaceType:'Hot Dipped Galvanized', type:'Rebar Coupler', description:'A heavy-duty 40mm rebar coupler for structural applications requiring high tensile strength.', specs:{'Coupler Type':'Rebar','Material':'Stainless Steel','Size':'40 mm (Dia)','Shape':'Cylinder','Surface Type':'Hot Dipped Galvanized','Brand':'Sun Engineering'} },
  { id:'shear-bolt-coupler', name:'Shear Bolt Coupler', category:'Couplers & Components', image:A+'shear-bolt-couplers-250x250.jpeg', price:'Price on Request', size:'12mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Shear Bolt', description:'Shear bolt technology ensures high tensile strength and secure rebar connection without special threading.', specs:{'Coupler Type':'Shear Bolt','Material':'High Grade Steel','Size':'12mm–40mm','Application':'Critical Structures','Testing':'Dimensional & Tensile Tested','Brand':'Sun Engineering'} },
  { id:'threaded-rebar-coupler', name:'Threaded Rebar Coupler', category:'Couplers & Components', image:A+'threaded-shear-bolt-coupler-250x250.jpeg', price:'Get Latest Price', size:'12mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Threaded Coupler', description:'Threaded rebar coupler for efficient rebar extension and mechanical splicing.', specs:{'Coupler Type':'Threaded Rebar','Material':'High Grade Steel','Size':'12mm–40mm','Thread Type':'Parallel / Taper','Brand':'Sun Engineering'} },
  { id:'parallel-threaded-couplers', name:'Parallel Threaded Couplers', category:'Couplers & Components', image:A+'25mm-taper-threaded-coupler-250x250.jpeg', price:'Contact for Best Quote', size:'12mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Parallel Threaded', description:'Parallel threaded couplers engineered for reliable structural rebar connections.', specs:{'Thread Type':'Parallel','Diameter Range':'12mm–40mm','Testing':'100% Dimensional & Tensile Tested','Reports':'Coupler Spectro & Tensile Reports'} },
  { id:'cold-forge-couplers', name:'Cold Forge Couplers', category:'Couplers & Components', image:A+'40-mm-to-32-mm-reducer-coupler-250x250.jpeg', price:'Get Latest Price', size:'16mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Cold Forge', description:'Cold forged couplers for superior strength and enhanced load transfer performance.', specs:{'Coupler Type':'Cold Forge','Material':'High Grade Steel','Size':'16mm–40mm','Use':'High Rise & Bridges'} },
  { id:'position-couplers', name:'Position Couplers', category:'Couplers & Components', image:A+'shear-bolt-couplers-250x250.jpeg', price:'Price on Request', size:'12mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Position', description:'Position couplers for accurate rebar alignment and easy installation.', specs:{'Coupler Type':'Position Coupler','Size':'12mm–40mm','Use':'Precast & Formwork'} },
  { id:'shear-bolt-threaded-couplers', name:'Shear Bolt and Threaded Couplers', category:'Couplers & Components', image:A+'threaded-shear-bolt-coupler-250x250.jpeg', price:'Contact for Best Quote', size:'16mm–40mm', material:'High Grade Steel', surfaceType:'Black / Zinc Plated', type:'Hybrid Coupler', description:'Hybrid coupler combining shear bolt strength with threaded reliability.', specs:{'Connection Method':'Shear Bolt + Threaded','Load Transfer':'Very High','Reusability':'Yes'} },
  { id:'threaded-tie-rods', name:'Threaded Tie Rods', category:'Steel Threaded Rod', image:siteImages.threadedRods, price:'Get Latest Price', size:'Custom sizes', material:'High Tensile Steel', surfaceType:'Black', type:'Threaded Rod', description:'High strength threaded tie rods suitable for structural and foundation works.', specs:{'Material':'High Tensile Steel','Length':'As per requirement','Threading':'Precision Threaded'} },
  { id:'foundation-bolts', name:'Foundation Bolts', category:'Accessories', image:siteImages.foundationBolts, price:'Price on Request', size:'Custom sizes', material:'High Grade Steel', surfaceType:'Black / Galvanized', type:'Foundation Bolt', description:'Foundation bolts manufactured for anchoring and industrial installation needs.', specs:{'Product':'Foundation Bolt','Material':'High Grade Steel','Length':'As per requirement','Use':'Anchoring & Foundation'} },
  { id:'thread-protection-caps', name:'Thread Protection Caps', category:'Accessories', image:A+'shear-bolt-couplers-250x250.jpeg', price:'Get Latest Price', size:'Multiple sizes', material:'Plastic / Steel', surfaceType:'Protective', type:'Cap', description:'Thread protection caps and sleeves to prevent damage and corrosion during handling.', specs:{'Product':'Thread Protection Cap','Use':'Thread Protection','Sizes':'Multiple'} },
  { id:'rebar-thread-rolling-machine', name:'Rebar Thread Rolling Machine', category:'Machines', image:siteImages.rollingMachine, price:'Contact for Best Quote', size:'Machine', material:'Industrial Grade', surfaceType:'Painted', type:'Machine', description:'High precision rebar thread rolling machine for superior grip and structural integrity.', specs:{'Machine Type':'Rebar Thread Rolling Machine','Usage':'Rebar Threading','Power':'As per model','Support':'Spares & Service Available'} },
  { id:'motorized-rod-cutting-machine', name:'Motorized Rod Cutting Machine', category:'Machines', image:A+'motorized-rod-cutting-machine-250x250.jpeg', price:'Get Latest Price', size:'Machine', material:'Industrial Grade', surfaceType:'Painted', type:'Machine', description:'Powerful and efficient motorized rod cutting machine for rebar and threaded rods.', specs:{'Machine Type':'Motorized Rod Cutting Machine','Usage':'Rod Cutting','Feature':'Precise Cutting'} },
  { id:'steel-threaded-rod', name:'Steel Threaded Rod', category:'Steel Threaded Rod', image:siteImages.threadedRods, price:'Price on Request', size:'Up to 40mm', material:'High Tensile Steel', surfaceType:'Black / Galvanized', type:'Threaded Rod', description:'High tensile strength threaded rods available in multiple sizes up to 40mm.', specs:{'Material':'High Tensile Steel','Size':'Up to 40mm','Application':'Construction & Industrial'} },
  { id:'rebar-threading-services', name:'Rebar Threading Services', category:'Threading Services', image:siteImages.onsiteThreading, price:'Contact for Best Quote', size:'Site Service', material:'Service', surfaceType:'On-site', type:'Service', description:'On-site rebar threading for faster execution with advanced thread rolling machines.', specs:{'Service Type':'On-site Rebar Threading','Location':'Pan India','Bar Size':'Up to 40mm'} },
  { id:'foundation-bolt-threading-services', name:'Foundation Bolt Threading Services', category:'Threading Services', image:siteImages.foundationBolts, price:'Price on Request', size:'Site Service', material:'Service', surfaceType:'On-site', type:'Service', description:'Accurate foundation bolt threading for perfect alignment and secure grip.', specs:{'Service Type':'Foundation Bolt Threading','Execution':'On-site / Workshop','Support':'Technical Support'} },
  { id:'bar-cutting-services', name:'Bar Cutting Services', category:'Threading Services', image:A+'motorized-rod-cutting-machine-250x250.jpeg', price:'Get Latest Price', size:'As required', material:'Service', surfaceType:'On-site', type:'Service', description:'On-site cutting of rebars to required length with clean and precise cuts.', specs:{'Service Type':'Bar Cutting','Cutting':'Precise & Clean','Location':'Pan India'} },
  { id:'machine-spares-service', name:'Machine Spares & Service', category:'Accessories', image:A+'rebar-thread-rolling-machine-125x125.jpeg', price:'Get Latest Price', size:'Machine spares', material:'Genuine Spares', surfaceType:'Service', type:'Spares', description:'Genuine spares and expert support to ensure machine performance.', specs:{'Product':'Machine Spares','Support':'Maintenance & Service','Availability':'On Request'} },
]

export const advantages = [
  'Reduce steel consumption up to 30% per lapping',
  'Cost saving up to 75% per lapping',
  'Save labour charges',
  'Eliminate extra labour',
  '25% extra tensile strength from TMT bar strength',
  'Coupler supply and threading services all over India',
  'Tensile test as per IS standard with bar break',
  'Coupler spectro report will be provided',
  'Sizes available up to 40mm bar size',
]

export const faqs = [
  {q:'What products and services does Sun Engineering offer?', a:'We manufacture and supply rebar couplers, threaded bars, shear bolt couplers, tie rods, foundation bolts, rebar thread rolling machines and on-site rebar threading services.'},
  {q:'Is on-site rebar threading service available?', a:'Yes. We provide on-site rebar threading and foundation bolt threading services for construction and industrial projects.'},
  {q:'What sizes of couplers and threaded bars are available?', a:'Sizes are available up to 40mm bar size, with custom sizes based on project requirements.'},
  {q:'Can you provide test reports and certifications?', a:'Yes. Tensile tests can be proved as per IS standard with bar break, and coupler spectro reports can be provided.'},
  {q:'Do you offer pan-India supply and service?', a:'Yes. Coupler supply and threading services are available all over India.'},
  {q:'How can I request a quote or place an order?', a:'Use Request Quote, Order Now, WhatsApp Order or Call Now. The website will prepare your requirement and send it directly to WhatsApp.'},
]

export const reviews = [
  {name:'Er. Karthikeyan', role:'Project Manager, Coimbatore', text:'Excellent product quality and timely support. Their threading machines are robust and deliver consistent performance.'},
  {name:'V. Raghavendran', role:'Structural Engineer, Bengaluru', text:'Coupler strength and finish are excellent. Test reports were provided promptly.'},
  {name:'Arun Prasad', role:'Site Engineer, Coimbatore', text:'On-site threading service saved us significant time and labour. Highly recommended.'},
  {name:'Suresh Babu', role:'Contractor, Hyderabad', text:'Reliable couplers and strong technical support. Our go-to partner for mechanical splicing.'},
]

export const certifications = ['ISO 9001:2015', 'Tensile Test Reports', 'Spectro Reports', 'IS Standard Bar Break']

export const clientSegments = ['High-rise Contractors', 'Bridge & Metro Works', 'Industrial Foundations', 'Precast Manufacturers', 'Infrastructure EPC Teams']
