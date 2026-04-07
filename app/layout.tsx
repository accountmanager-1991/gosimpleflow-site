import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Simple Flow — Lock in your electric rate for 25 years | Solar Made Simple",
  description: "Simple Flow installs residential solar in NY, PA, MD, NJ, CT, MA, and CA. 100% virtual process, fast installation, $0 down. Get your free quote in 60 seconds.",
  keywords: ["solar installer", "residential solar", "NY solar", "PA solar", "MD solar", "solar panels", "solar quote"],
  openGraph: {
    title: "Simple Flow — Solar Made Simple",
    description: "Lock in your electric rate for 25 years. $0 down. We handle everything.",
    type: "website",
    url: "https://www.gosimpleflow.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
