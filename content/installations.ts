export interface Installation {
  id: string
  city: string
  state: string
  systemSize: string
  installer?: string
  imageUrl: string
  caption?: string
}

// PLACEHOLDER DATA — replace with real install photos.
// To use real photos: drop them in public/installations/ and update imageUrl to "/installations/filename.jpg"
export const INSTALLATIONS: Installation[] = [
  { id: "1", city: "Long Island", state: "NY", systemSize: "8.4 kW", imageUrl: "", caption: "Roof-mount, 21 panels" },
  { id: "2", city: "Philadelphia", state: "PA", systemSize: "10.2 kW", imageUrl: "", caption: "South-facing array" },
  { id: "3", city: "Baltimore", state: "MD", systemSize: "12.0 kW", imageUrl: "", caption: "Battery + solar combo" },
  { id: "4", city: "Westchester", state: "NY", systemSize: "9.6 kW", imageUrl: "", caption: "Slate roof install" },
  { id: "5", city: "Newark", state: "NJ", systemSize: "7.8 kW", imageUrl: "", caption: "Tile roof, 19 panels" },
  { id: "6", city: "Hartford", state: "CT", systemSize: "11.4 kW", imageUrl: "", caption: "Two-array setup" },
  { id: "7", city: "Boston", state: "MA", systemSize: "8.0 kW", imageUrl: "", caption: "Asphalt shingle install" },
  { id: "8", city: "Brooklyn", state: "NY", systemSize: "6.4 kW", imageUrl: "", caption: "Flat roof ballasted" },
  { id: "9", city: "Sacramento", state: "CA", systemSize: "13.2 kW", imageUrl: "", caption: "Premium panel install" },
]
