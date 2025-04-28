import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessCardPage from "./pages/perItemPages/BusinessCardPage";
import CalenderPage from "./pages/perItemPages/CalenderPage";
import CorporateGiftsPage from "./pages/perItemPages/CorporateGiftsPage";
import CoffeeMugsPage from "./pages/perItemPages/CoffeeMugsPage";
import PhotoFramePage from "./pages/perItemPages/PhotoFramePage";
import StandeePage from "./pages/perItemPages/StandeePage";
import StickerPage from "./pages/perItemPages/StickerPage";
import TrophyPage from "./pages/perItemPages/TrophyPage";
import PenPage from "./pages/perItemPages/PenPage";
import KeyChainPage from "./pages/perItemPages/KeyChainPage";
import TilesPage from "./pages/perItemPages/TilesPage";
import TShirtPage from "./pages/perItemPages/TShirtPage";
import LetterHeadPage from "./pages/perItemPages/LetterHeadPage";
import InvitationCardPage from "./pages/perItemPages/InvitationCardPage";
import IDCardPage from "./pages/perItemPages/IDCardPage";

const App = () => {
  const location = useLocation();
  const [footerText, setFooterText] = useState("Go Back to Home"); // Default footer text

  const setZoomLevel = () => {
    if (window.innerWidth > 768) {
      document.body.style.zoom = "80%";
    } else {
      document.body.style.zoom = "100%";
    }
  };

  useEffect(() => {
    setZoomLevel();
    window.addEventListener("resize", setZoomLevel);
    return () => {
      window.removeEventListener("resize", setZoomLevel);
    };
  }, []);

  useEffect(() => {
    const updateFooterText = () => {
      switch (location.pathname) {
        case "/":
          setFooterText("About Us");
          break;
        case "/about-us":
          setFooterText("Go Back to Home");
          break;

        case "/order-product":
        case "/product/:route":
          setFooterText("Go Back to Home");
          break;
        case "/businessCard":
          setFooterText("Go Back to Home");
          break;
        default:
          setFooterText("Go Back to Home");
      }
    };
    updateFooterText();
  }, [location.pathname]); // Dependency on pathname

  return (
    <>
      <Navbar />
      <div className=" min-h-screen max-w-[1400px] flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Product Page */}
          <Route path="/order-product" element={<ProductPage />} />
          {/* Product page for specific route */}
          <Route path="/product/:route" element={<ProductPage />} />
          {/* Item page for business card */}
          <Route
            path="/product/business-cards"
            element={<BusinessCardPage />}
          />
          {/* Item page for calendar */}
          <Route path="/product/Calendar" element={<CalenderPage />} />
          {/* Item page for corporate gifts */}
          <Route
            path="/product/corporate-gifts"
            element={<CorporateGiftsPage />}
          />
          {/* Item page for custom mugs */}
          <Route path="/product/custom-mugs" element={<CoffeeMugsPage />} />
          {/* Item page for photo frame */}
          <Route path="/product/photo-frames" element={<PhotoFramePage />} />
          {/* Item page for standees */}
          <Route path="/product/standees" element={<StandeePage />} />
          {/* Item page for stickers and vinyls */}
          <Route path="/product/stickers" element={<StickerPage />} />
          {/* Item page for trophies */}
          <Route path="/product/trophy" element={<TrophyPage />} />
          {/* Item page for pens */}
          <Route path="/product/pen" element={<PenPage />} />
          {/* Item page for keychains */}
          <Route path="/product/keychains" element={<KeyChainPage />} />
          {/* Item page for tiles */}
          <Route path="/product/tiles" element={<TilesPage />} />
          {/* Item page for t-shirts */}
          <Route path="/product/tshirts" element={<TShirtPage />} />
          {/* Item page for letter heads */}
          <Route path="/product/letter-head" element={<LetterHeadPage />} />
          {/* Item page for invitation cards */}
          <Route
            path="/product/invitation-card"
            element={<InvitationCardPage />}
          />
          {/* Item page for id card */}
          <Route path="/product/id-cards" element={<IDCardPage />} />
        </Routes>
      </div>
      {/* Updated Footer to use dynamic text */}

      <Footer page={footerText} />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
