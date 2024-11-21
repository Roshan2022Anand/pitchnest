import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'pitchnest',
  description: 'Entrepreneurs can pitch their ideas to investors',
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
