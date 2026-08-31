import { ReactLenis } from "lenis/react";
import { I18nProvider } from "./i18n/I18nContext.jsx";
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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, anchors: true }}>
      <I18nProvider>
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
      </I18nProvider>
    </ReactLenis>
  );
}
