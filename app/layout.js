import '../styles/scss/main.scss';
import Header from '@/components/Header'
import Footer from '@/components/Footer';

import { Providers } from './Providers/providers';
import ToastProvider from './Providers/ToastProvider';
import PaymentStatusHandler from '@/components/PaymentStatusHandler';
import { Suspense } from 'react';

export const metadata = {
  title: "Musapur Turf",
  description: "The Home of Football in Musapur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <Suspense fallback={null}>
            <PaymentStatusHandler />
          </Suspense>
          {children}
          <ToastProvider />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
