import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Connect from './pages/Connect.jsx'
import Login from './pages/Login.jsx'
import RequestQuote from './pages/RequestQuote.jsx'
import FAQs from './pages/FAQs.jsx'
import Order from './pages/Order.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <LoadingScreen />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
