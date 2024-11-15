

// import HeroSection from './components/HeroSection';
// import StatsGrid from './components/StatsGrid';
// import ThreeDCardsSection from './components/ThreeDCardsSection';
// import ValidatorSection from './components/ValidatorSection';
// // import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo'; // Default import

// // import { TimelineDemo } from "./components/timeline-demo";

// import FeatureCards from './components/FeatureCards';

// export default function Home() {
//   return (
//     <div className='px-24'>
//       <HeroSection />
//       <StatsGrid />
//       <ThreeDCardsSection />
//       <ValidatorSection />
//       {/* <TimelineDemo /> */}

//       {/* <AnimatedTestimonialsDemo /> This should work now */}
//       <FeatureCards />
//     </div>
//   );
// }


// import HeroSection from './components/HeroSection';
// import StatsGrid from './components/StatsGrid';
// import ThreeDCardsSection from './components/ThreeDCardsSection';
// import ValidatorSection from './components/ValidatorSection';
// import BlogCarousel from './components/BlogCarousel';


// import FeatureCards from './components/FeatureCards';

// export default function Home() {
//   return (
//     <div className='px-4 sm:px-12 lg:px-24'>
//       <HeroSection />
//       <StatsGrid />
//       <ThreeDCardsSection />
//       <ValidatorSection />
//       <BlogCarousel />
      
     
//       <FeatureCards />
//     </div>
//   );
// }


// import HeroSection from './components/HeroSection';
// import StatsGrid from './components/StatsGrid';
// import ThreeDCardsSection from './components/ThreeDCardsSection';

// // import BlogCarousel from './components/BlogCarousel';
// import ImageCarousel from './components/ui/ImageCarousel';
// import { Preview } from "./components/Preview";
// // import { PulseBeams } from "@/app/components/ui/PulseBeam";

// import { PulseBeams, SVGs } from "@/app/components/ui/PulseBeam";  // Adjust the path as necessary


// import Slider from "./components/Slider";

// export default function Home() {
//   return (
//     <div className="px-4 sm:px-12 lg:px-24">
     
//       <HeroSection />
//       <StatsGrid />
//       <ThreeDCardsSection />
//       <Slider />
//       <Preview />
//       <PulseBeams />


//       {/* <BlogCarousel /> */}
//       <div className="mt-10">
//         <ImageCarousel />

        
//       </div>

      

      
//     </div>
    
//   );
// }


import HeroSection from './components/HeroSection';
import StatsGrid from './components/StatsGrid';
import ThreeDCardsSection from './components/ThreeDCardsSection';
import ImageCarousel from './components/ui/ImageCarousel';
import { Preview } from "./components/Preview";
import { PulseBeams } from "@/app/components/ui/PulseBeam";  // Adjust the path as necessary
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="px-4 sm:px-12 lg:px-24">
      <HeroSection />
      
      {/* Stats Grid Section */}
      <div className="mt-12">
        <StatsGrid />
      </div>

      {/* 3D Cards Section */}
      <div className="mt-12">
        <ThreeDCardsSection />
      </div>

      
      {/* Slider Section */}
      <div className="mt-12">
        <Slider />
      </div>

      {/* Pulse Beams Animation */}
      <div className="mt-12">
        <PulseBeams />
      </div>


      {/* Preview Section */}
      {/* <div className="mt-12">
        <Preview />
      </div> */}

      

      {/* Image Carousel Section */}
      {/* <div className="mt-12">
        <ImageCarousel />
      </div> */}
    </div>
  );
}
