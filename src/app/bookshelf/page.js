import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import BookGalley from '../components/BookGallery/BookGallery'
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Daniel's Bookshelf</title>
      </Head>
      <main className="flex min-h-screen flex-col bg-[#010f18]">
        <Navbar />
        <div className="container mt-24 mx-auto px-8 md:px-12 py-4">
          <BookGalley />
        </div>
        <Footer />
      </main>
    </>
  )
}
