// VARK questions: Q1,Q3,Q4,Q6,Q7,Q9,Q10,Q11 (0-indexed: 0,2,3,5,6,8,9,10)
// options: 1=visual, 2=auditory, 3=readwrite, 4=kinesthetic
// Social questions: Q2,Q5,Q8,Q12 (0-indexed: 1,4,7,11)
// options: 1=solo, 2=mixed, 3=social

const VARK_INDICES = [0, 2, 3, 5, 6, 8, 9, 10];
const SOCIAL_INDICES = [1, 4, 7, 11];

export function calculateStyles(answers: (number | null)[]): string[] {
  const vark = { visual: 0, auditory: 0, readwrite: 0, kinesthetic: 0 };
  const social = { solo: 0, mixed: 0, social: 0 };

  for (const i of VARK_INDICES) {
    const a = answers[i];
    if (a === 1) vark.visual++;
    else if (a === 2) vark.auditory++;
    else if (a === 3) vark.readwrite++;
    else if (a === 4) vark.kinesthetic++;
  }

  for (const i of SOCIAL_INDICES) {
    const a = answers[i];
    if (a === 1) social.solo++;
    else if (a === 2) social.mixed++;
    else if (a === 3) social.social++;
  }

  const maxVark = Math.max(vark.visual, vark.auditory, vark.readwrite, vark.kinesthetic);
  const dominantVark: string[] = [];
  if (vark.visual === maxVark) dominantVark.push('visual');
  if (vark.auditory === maxVark) dominantVark.push('auditory');
  if (vark.readwrite === maxVark) dominantVark.push('readwrite');
  if (vark.kinesthetic === maxVark) dominantVark.push('kinesthetic');

  const maxSocial = Math.max(social.solo, social.mixed, social.social);
  let socialStyle = 'solo';
  if (social.mixed === maxSocial) socialStyle = 'mixed';
  else if (social.social === maxSocial) socialStyle = 'social';
  else socialStyle = 'solo';

  return dominantVark.map((v) => `${socialStyle} ${v}`);
}
