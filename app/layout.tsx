import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Shababnews — Lebanon’s Youth Magazine',
  description:
    "Shababnews — Lebanon's leading youth magazine covering academic news, schools, universities, and events in North Lebanon since 2001.",
  keywords: ['Shababnews', 'Lebanon', 'Tripoli', 'youth', 'universities', 'schools', 'news'],
  icons: { icon: '/logo12.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <AuthProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
