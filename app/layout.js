import './site.css';

export const metadata = {
  title: 'Ayur Vidya Nikethan (AVN) — Centre for Integrated Wellness',
  description:
    'Integrated yogic wellness for busy, high-responsibility professionals — stress relief, posture recovery, sleep & burnout recovery and complete wellness transformation.',
  icons: {
    icon: [
      { url: '/assets/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/images/favicon_io/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
