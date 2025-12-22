import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import DownloadCVButton from '@/components/DownloadCVButton'

export default function Page() {
  return (
    <>
      <Header />
      <main className="px-6 md:px-16">
        <section id="home">
          <Home />
        </section>

        <hr className="border-zinc-800 mb-4 md:mb-0" />

        <section id="about">
          <About />
        </section>

        <hr className="border-zinc-800 mt-8 md:mt-0" />

        <section id="projects">
          <Projects />
        </section>

        <hr className="border-zinc-800 md:my-4" />

        <section className='flex flex-row items-center justify-center'>
          <DownloadCVButton />
        </section>

        <hr className="border-zinc-800 my-4" />

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
