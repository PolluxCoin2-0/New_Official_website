import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



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


