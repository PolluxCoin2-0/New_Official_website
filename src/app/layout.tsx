import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Head from 'next/head'; 


// export const metadata = {
//   title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
//   description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
//   viewport: 'width=device-width, initial-scale=1',
//   robots: 'index, follow',
//   keywords: 'PolluxCoin, polluxChain, blockchain, cryptocurrency, decentralized web, developers, staking, governance',
//   openGraph: {
//     type: 'website',
//     title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
//     description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
//     url: 'https://polluxchain.com/',
//     images: [
//       {
//         url: '/favicon.png', // Image from public directory
//         width: 1200,
//         height: 630,
//         alt: 'PolluxChain Blockchain Revolutionizing Decentralization'
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
//     description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
//     url: 'https://polluxchain.com/',
//     images: [
//       {
//         url: '/favicon.png', // Image from public directory
//         alt: 'PolluxChain Blockchain'
//       },
//     ],
//   },
// };



export const metadata = {
  title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
  description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: 'PolluxCoin, polluxChain, blockchain, cryptocurrency, decentralized web, developers, staking, governance',
  openGraph: {
    type: 'website',
    title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
    description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
    url: 'https://polluxchain.com/',
    images: [
      {
        url: 'https://polluxchain.com/favicon.png', // Full URL for the image
        width: 1200,
        height: 630,
        alt: 'PolluxChain Blockchain Revolutionizing Decentralization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization.',
    description: 'Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance.',
    url: 'https://polluxchain.com/',
    images: [
      {
        url: 'https://polluxchain.com/favicon.png', // Full URL for the image
        alt: 'PolluxChain Blockchain',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
       <Head>
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@PolluxChain" /> {/* Replace with your Twitter handle */}
        <meta name="twitter:title" content="PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization." />
        <meta name="twitter:description" content="Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance." />
        <meta name="twitter:image" content="https://polluxchain.com/favicon.png" /> {/* Full URL for the image */}

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PolluxChain - The Hybrid Layer 1 Blockchain Revolutionizing Decentralization." />
        <meta property="og:description" content="Empowering Blockchain Evolution with Scalability, Staking, and Seamless Governance." />
        <meta property="og:url" content="https://polluxchain.com/" />
        <meta property="og:image" content="https://polluxchain.com/favicon.png" />

        {/* JSON-LD Schema Markup for WebPage */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "PolluxChain - Get Started",
            "url": "https://www.polluxchain.com/",
            "description": "Start your journey with PolluxChain, the hybrid Layer 1 blockchain platform with scalability, staking, and seamless governance.",
            "potentialAction": {
              "@type": "Action",
              "name": "Get Started",
              "target": "https://www.polluxchain.com/"
            }
          }
          `}
        </script>
      </Head>
      
      <body >
        <Navbar />
        <main className=' w-full p-2'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}




