const imageBase = '/assets/images%20hd/'
const fieldBase = '/assets/feild%20images/'
const img = (name) => `${imageBase}${encodeURIComponent(name)}`
const fImg = (name) => `${fieldBase}${encodeURIComponent(name)}`

export const siteImages = {
  homeConstruction: fImg('ChatGPT Image Jun 8, 2026, 01_38_42 AM (3).png'),
  threadingSparks: fImg('ChatGPT Image Jun 8, 2026, 01_38_43 AM (1).png'),
  metalCouplers: img('ChatGPT Image May 31, 2026, 05_09_32 PM (3).png'),
  onsiteThreading: fImg('ChatGPT Image Jun 8, 2026, 01_38_43 AM (2).png'),
  threadedRods: img('ChatGPT Image May 31, 2026, 05_09_34 PM (5).png'),
  rollingMachine: img('ChatGPT Image May 31, 2026, 05_09_35 PM (6).png'),
  qualityAssurance: img('ChatGPT Image May 31, 2026, 05_09_36 PM (7).png'),
  foundationBolts: img('ChatGPT Image May 31, 2026, 05_09_37 PM (8).png'),
  bridgeProject: fImg('ChatGPT Image Jun 8, 2026, 01_38_43 AM (4).png'),
  engineersConsulting: fImg('ChatGPT Image Jun 8, 2026, 01_38_44 AM (5) (1).png'),
}
