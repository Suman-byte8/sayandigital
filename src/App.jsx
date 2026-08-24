import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import StatsStrip from './components/sections/StatsStrip.jsx'
import ProcessSection from './components/sections/ProcessSection.jsx'
import NoticeSection from './components/sections/NoticeSection.jsx'
import ApplicationSection from './components/sections/ApplicationSection.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <ProcessSection />
        <NoticeSection />
        <ApplicationSection />
      </main>
      <Footer />
    </>
  )
}
