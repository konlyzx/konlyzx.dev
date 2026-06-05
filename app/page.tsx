import Footer from '@/components/footer'
import Geo from '@/components/home/geo'
import Hero from '@/components/home/hero'
import Experience from '@/components/home/experience'
import Projects from '@/components/home/projects'

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Geo />
      <Footer />
    </div>
  )
}
