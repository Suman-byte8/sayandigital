import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import StatsStrip from "./components/sections/StatsStrip.jsx";
import ProcessSection from "./components/sections/ProcessSection.jsx";
import NoticeSection from "./components/sections/NoticeSection.jsx";
import ApplicationSection from "./components/sections/ApplicationSection.jsx";
import Gallery from "./components/sections/Gallery.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery year={2024} />
        <StatsStrip />
        <ProcessSection />
        <NoticeSection />
        <ApplicationSection />
      </main>
      <Footer />
    </>
  );
}
