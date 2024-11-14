

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


import HeroSection from './components/HeroSection';
import StatsGrid from './components/StatsGrid';
import ThreeDCardsSection from './components/ThreeDCardsSection';

import BlogCarousel from './components/BlogCarousel';
import ImageCarousel from './components/ui/ImageCarousel';




import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="px-4 sm:px-12 lg:px-24">
     
      <HeroSection />
      <StatsGrid />
      <ThreeDCardsSection />
      <Slider />
      <BlogCarousel />
      <div className="mt-10">
        <ImageCarousel />

        
      </div>
      

      
    </div>
    
  );
}
