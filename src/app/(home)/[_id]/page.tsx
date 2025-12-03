import { Metadata } from 'next';
import { ResultView } from 'src/sections/results/view/result-view';

export const metadata: Metadata = {
  title: 'S.E.L.F.E.C.T — 2 минутын өөрийгөө хорлох зуршлын тест',
  description: 'Өдөр тутмын зуршил, шийдвэр, айдас чамайг хэрхэн хорлож байгааг мэдэж ав.',
};

export default function Page() {
  return <ResultView />;
}
