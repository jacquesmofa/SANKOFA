import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AwardNight from "./pages/AwardNight";
import Sankofa from "./pages/Sankofa";
import Nomination from "./pages/Nomination";
import Tickets from "./pages/Tickets";
import { AlbumPage, GalleryIndex } from "./pages/Gallery";
import Cawap from "./pages/Cawap";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <a href="#main" className="sr-only z-[200] bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Header />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/award-night" element={<AwardNight />} />
          <Route path="/sankofa" element={<Sankofa />} />
          <Route path="/nomination" element={<Nomination />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/gallery" element={<GalleryIndex />} />
          <Route path="/gallery/:slug" element={<AlbumPage />} />
          <Route path="/cawap" element={<Cawap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
