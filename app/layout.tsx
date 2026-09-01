import type { Metadata } from 'next';
import { Oswald, Source_Sans_3, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';
import './globals.css';

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-disp',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  weight: ['500', '600'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Channel Mark Shell | Site Work, Shell & Masonry, Cape Coral FL',
    template: '%s | Channel Mark Shell',
  },
  description:
    'Quality construction from the ground up. Site work, flat work, shell, masonry, beam forming and framing across Southwest Florida. Licensed CGC1529824.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SiteInteractions />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
