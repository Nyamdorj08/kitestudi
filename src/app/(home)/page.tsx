import { Metadata } from 'next';
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'S.E.L.F.E.C.T — 2 минутын өөрийгөө хорлох зуршлын тест',
  description: 'Өдөр тутмын зуршил, шийдвэр, айдас чамайг хэрхэн хорлож байгааг мэдэж ав.',
  openGraph: {
    title: 'S.E.L.F.E.C.T — 2 минутын өөрийгөө хорлох зуршлын тест',
    description: 'Өдөр тутмын зуршил, шийдвэр, айдас чамайг хэрхэн хорлож байгааг мэдэж ав.',
    url: 'https://selfect.eetneb.dev',
    type: 'website',
    images: [
      {
        url: 'https://selfect.eetneb.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SELFECT өөрийгөө хорлох зуршлын тест',
      },
    ],
  },
};

export default function Page() {
  return <HomeView />;
}
