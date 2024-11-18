import HeroSection from "./components/HeroSection";
import StatsGrid from "./components/StatsGrid";
import ThreeDCardsSection from "./components/ThreeDCardsSection";
import Performance from "./components/Performance";
import Evolution from "./components/Evolution";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="px-4 sm:px-12 lg:px-24">

      <HeroSection />
      <StatsGrid />
      <ThreeDCardsSection />
      <Performance />
      <Evolution />
      <Slider />

    </div>
  );
}
