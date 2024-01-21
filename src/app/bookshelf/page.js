import Image from 'next/image'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import BookGalley from '../components/BookGallery'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <BookGalley />
      </div>
      <Footer />
    </main>
  )
}
