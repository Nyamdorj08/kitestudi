import { Metadata } from 'next';
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Studii.mn - суралцах хэв маягийн тест',
  description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
  openGraph: {
    title: 'Studii.mn - суралцах хэв маягийн тест',
    description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
    url: 'https://studii.mn',
    type: 'website',
    images: [
      {
        url: 'https://studii.mn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
      },
    ],
  },
};

export default function Page() {
  return <HomeView />;
}
