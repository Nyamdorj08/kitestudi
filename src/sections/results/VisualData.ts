import { MIXED_AUDITORY } from './datas/MixedAuditory';
import { MIXED_KINESTHETIC } from './datas/MixedKinesthetic';

import { MIXED_VISUAL } from './datas/MixedVisual';
import { SOCIAL_AUDITORY } from './datas/SocialAuditory';
import { SOCIAL_KINESTHETIC } from './datas/SocialKinesthetic';
import { SOCIAL_READWRITE } from './datas/SocialReadWrite';
import { SOCIAL_VISUAL } from './datas/SocialVisual';
import { SOLO_AUDITORY } from './datas/SoloAuditory';
import { SOLO_KINESTHETIC } from './datas/SoloKinesthetic';
import { SOLO_READWRITE } from './datas/SoloReadWrite';
import { SOLO_VISUAL } from './datas/SoloVisual';

export const DATA_MAP: Record<string, any> = {
  // ---- SOLO ----
  'solo visual': SOLO_VISUAL,
  'solo auditory': SOLO_AUDITORY,
  'solo readwrite': SOLO_READWRITE,
  'solo kinesthetic': SOLO_KINESTHETIC,

  // 'solo visual - solo auditory': SOLO_VISUAL_AUDITORY,
  // 'solo visual - solo readwrite': SOLO_VISUAL_READWRITE,
  // 'solo visual - solo kinesthetic': SOLO_VISUAL_KINESTHETIC,
  // 'solo auditory - solo readwrite': SOLO_AUDITORY_READWRITE,
  // 'solo auditory - solo kinesthetic': SOLO_AUDITORY_KINESTHETIC,
  // 'solo readwrite - solo kinesthetic': SOLO_READWRITE_KINESTHETIC,

  // 'solo visual - solo auditory - solo readwrite': SOLO_VISUAL_AUDITORY_READWRITE,
  // 'solo visual - solo auditory - solo kinesthetic': SOLO_VISUAL_AUDITORY_KINESTHETIC,
  // 'solo visual - solo readwrite - solo kinesthetic': SOLO_VISUAL_READWRITE_KINESTHETIC,
  // 'solo auditory - solo readwrite - solo kinesthetic': SOLO_AUDITORY_READWRITE_KINESTHETIC,

  // 'solo visual - solo auditory - solo readwrite - solo kinesthetic':
  //   SOLO_VISUAL_AUDITORY_READWRITE_KINESTHETIC,

  // ---- MIXED ----
  'mixed visual': MIXED_VISUAL,
  'mixed auditory': MIXED_AUDITORY,
  // 'mixed readwrite': MIXED_READWRITE,
  'mixed kinesthetic': MIXED_KINESTHETIC,

  // 'mixed visual - mixed auditory': MIXED_VISUAL_AUDITORY,
  // 'mixed visual - mixed readwrite': MIXED_VISUAL_READWRITE,
  // 'mixed visual - mixed kinesthetic': MIXED_VISUAL_KINESTHETIC,
  // 'mixed auditory - mixed readwrite': MIXED_AUDITORY_READWRITE,
  // 'mixed auditory - mixed kinesthetic': MIXED_AUDITORY_KINESTHETIC,
  // 'mixed readwrite - mixed kinesthetic': MIXED_READWRITE_KINESTHETIC,

  // 'mixed visual - mixed auditory - mixed readwrite': MIXED_VISUAL_AUDITORY_READWRITE,
  // 'mixed visual - mixed auditory - mixed kinesthetic': MIXED_VISUAL_AUDITORY_KINESTHETIC,
  // 'mixed visual - mixed readwrite - mixed kinesthetic': MIXED_VISUAL_READWRITE_KINESTHETIC,
  // 'mixed auditory - mixed readwrite - mixed kinesthetic': MIXED_AUDITORY_READWRITE_KINESTHETIC,

  // 'mixed visual - mixed auditory - mixed readwrite - mixed kinesthetic':
  //   MIXED_VISUAL_AUDITORY_READWRITE_KINESTHETIC,

  // ---- SOCIAL ----
  'social visual': SOCIAL_VISUAL,
  'social auditory': SOCIAL_AUDITORY,
  'social readwrite': SOCIAL_READWRITE,
  'social kinesthetic': SOCIAL_KINESTHETIC,

  // 'social visual - social auditory': SOCIAL_VISUAL_AUDITORY,
  // 'social visual - social readwrite': SOCIAL_VISUAL_READWRITE,
  // 'social visual - social kinesthetic': SOCIAL_VISUAL_KINESTHETIC,
  // 'social auditory - social readwrite': SOCIAL_AUDITORY_READWRITE,
  // 'social auditory - social kinesthetic': SOCIAL_AUDITORY_KINESTHETIC,
  // 'social readwrite - social kinesthetic': SOCIAL_READWRITE_KINESTHETIC,

  // 'social visual - social auditory - social readwrite': SOCIAL_VISUAL_AUDITORY_READWRITE,
  // 'social visual - social auditory - social kinesthetic': SOCIAL_VISUAL_AUDITORY_KINESTHETIC,
  // 'social visual - social readwrite - social kinesthetic': SOCIAL_VISUAL_READWRITE_KINESTHETIC,
  // 'social auditory - social readwrite - social kinesthetic': SOCIAL_AUDITORY_READWRITE_KINESTHETIC,

  // 'social visual - social auditory - social readwrite - social kinesthetic':
  //   SOCIAL_VISUAL_AUDITORY_READWRITE_KINESTHETIC,
};

export const VisualDataFinder = (styles: string[]) => {
  const key = styles.join(' - '); // жишээлбэл: "solo visual - solo auditory"

  return DATA_MAP[key] ?? null;
};
