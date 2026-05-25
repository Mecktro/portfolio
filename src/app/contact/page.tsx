import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
