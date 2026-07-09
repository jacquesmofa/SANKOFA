import HeroSection from "./components/HeroSection";
import SankofaPreview from "./components/SankofaPreview";
import NominationPreview from "./components/NominationPreview";
import TicketPreview from "./components/TicketPreview";
import CawapPreview from "./components/CawapPreview";
import GalleryPreview from "./components/GalleryPreview";
import NominationCTA from "./components/NominationCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SankofaPreview />
      <NominationPreview />
      <TicketPreview />
      <CawapPreview />
      <GalleryPreview />
      <NominationCTA />
    </main>
  );
}