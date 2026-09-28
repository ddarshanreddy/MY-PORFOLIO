import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const metadata: Metadata = {
  title: 'D Darshan | AI/ML • Generative AI • Full Stack Developer',
  description: 'Portfolio of D Darshan, an Information Science & Engineering student focused on AI/ML, Generative AI, full-stack development and intelligent technology solutions.',
  openGraph: {
    title: 'D Darshan | AI/ML • Generative AI • Full Stack Developer',
    description: 'Portfolio of D Darshan, an Information Science & Engineering student focused on AI/ML, Generative AI, full-stack development and intelligent technology solutions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
