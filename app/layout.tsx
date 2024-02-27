import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './ui/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magic eight ball app',
  description: 'Created by Pinehead Coder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} justify-evenly flex min-h-screen flex-col items-center`}>
        <div className='flex flex-grow flex-col justify-center'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
