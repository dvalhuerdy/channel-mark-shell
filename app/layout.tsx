import type { Metadata } from 'next';
import { Barlow_Condensed, Inter, Roboto_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-disp',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Channel Mark Shell | Shell & Structural Contractor, Cape Coral FL',
    template: '%s | Channel Mark Shell',
  },
  description:
    'Site work, flat work, shell, masonry, beam forming and framing for builders and developers across Southwest Florida. Licensed CGC1529824. Set the mark.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable} ${robotoMono.variable}`}>
      <body>
        <SiteInteractions />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
