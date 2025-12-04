import { Metadata } from 'next';
import { ResultView } from 'src/sections/results/view/result-view';

export const metadata: Metadata = {
  title: 'Studii.mn - суралцах хэв маягийн тест',
  description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
};

export default function Page() {
  return <ResultView />;
}
