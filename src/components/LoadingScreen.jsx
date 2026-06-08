import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Check if we already showed it this session (optional, but good for UX)
    const hasLoaded = sessionStorage.getItem('sun_loaded')
    if (hasLoaded) {
      setLoading(false)
      return
    }

    sessionStorage.setItem('sun_loaded', 'true')

    const fadeTimer = setTimeout(() => {
      setFading(true)
    }, 1800)
    
    const hideTimer = setTimeout(() => {
      setLoading(false)
    }, 2300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
      <div className="loading-wrapper">
        <img src="/assets/All%20Logos/icon%20only2.png" alt="Sun Engineering Loading" className="loading-logo" />
      </div>
    </div>
  )
}
