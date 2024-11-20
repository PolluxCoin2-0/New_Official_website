import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'PolluxChainn - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
  description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'PolluxCoin, blockchain, cryptocurrency, decentralized web, developers',
  openGraph: {
    title: 'PolluxCoin - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
    description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
    url: 'https://polluxchain.com/',
    images: '/favicon.png',
  },
  twitter: {
    card: '/summary_large_image',
    title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
    description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
    url: 'https://polluxchain.com/',
    images: '/favicon.png',
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      
      
      <body >
        <Navbar />
        <main className=' w-full p-2'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




// import { ReactNode } from 'react';
// import './globals.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="relative min-h-screen dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
//         {/* Radial gradient for background fade */}
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//         <Navbar />
//         <main className="relative w-full p-2 z-10">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
