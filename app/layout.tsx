import './globals.css';
import Header from '@/components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-white text-gray-700 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
