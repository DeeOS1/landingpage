import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Европейская футбольная неделя — Tennisi',
  description: 'Топ-5 европейских лиг. Новая неделя — новые шансы.',
  openGraph: {
    title: 'Европейская футбольная неделя — Tennisi',
    description: '25 000 фрибетов каждую неделю и 60 призовых мест.',
    images: ['/assets/hero/background.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
