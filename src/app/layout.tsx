import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'PolluxCoin - Your gateway to a Hybrid Layer 1 Blockchain.',
  description: 'PolluxCoin is a next-generation decentralized platform empowering developers to build scalable blockchain solutions.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'PolluxCoin, blockchain, cryptocurrency, decentralized web, developers',
  openGraph: {
    title: 'PolluxCoin - Your gateway to a Hybrid Layer 1 Blockchain',
    description: 'Empower your blockchain journey with PolluxCoin\'s cutting-edge technology.',
    url: 'https://poxcoindev.netlify.app/',
    images: '/favicon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolluxCoin - Your gateway to a Hybrid Layer 1 Blockchain',
    description: 'PolluxCoin is a next-generation decentralized platform.',
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
