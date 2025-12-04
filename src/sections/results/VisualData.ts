import { MIXED_AUDITORY } from './datas/MixedAuditory';
import { MIXED_AUDITORYKINESTHETIC } from './datas/MixedAuditoryKinesthetic';
import { MIXED_AUDITORYREADWRITE } from './datas/MixedAuditoryReadWrite';
import { MIXED_AUDITORYREADWRITEKINESTHETIC } from './datas/MixedAuditoryReadWriteKinesthetic';
import { MIXED_KINESTHETIC } from './datas/MixedKinesthetic';
import { MIXED_READWRITEKINESTHETIC } from './datas/MixedReadWriteKinesthetic';
import { MIXED_VISUALREADWRITEKINESTHETIC } from './datas/MixedReadWriteKinesthetics';

import { MIXED_VISUAL } from './datas/MixedVisual';
import { MIXED_VISUAL_AUDITORY } from './datas/MixedVisualAuditory';
import { MIXED_VISUALAUDITORYKINESTHETIC } from './datas/MixedVisualAuditoryKinesthetics';
import { MIXED_VISUALAUDITORYREADWRITE } from './datas/MixedVisualAuditoryReadWrite';
import { MIXED_VISUALKINESTHETIC } from './datas/MixedVisualKinesthetic';
import { MIXED_VISUALREADWRITE } from './datas/MixedVisualReadWrite';
import { SOCIAL_AUDITORY } from './datas/SocialAuditory';
import { SOCIAL_AUDITORYKINESTHETIC } from './datas/SocialAuditoryKinesthetic';
import { SOCIAL_AUDITORYREADWRITE } from './datas/SocialAuditoryReadWrite';
import { SOCIAL_AUDITORYREADWRITEKINESTHETIC } from './datas/SocialAuditoryReadWriteKinesthetic';
import { SOCIAL_KINESTHETIC } from './datas/SocialKinesthetic';
import { SOCIAL_READWRITE } from './datas/SocialReadWrite';
import { SOCIAL_VISUALREADWRITEKINESTHETIC } from './datas/SocialReadWriteKinesthetic';
import { SOCIAL_VISUAL } from './datas/SocialVisual';
import { SOLO_VISUALAUDITORY } from './datas/SocialVisualAuditory';
import { SOCIAL_VISUALAUDITORYKINESTHETIC } from './datas/SocialVisualAuditoryKinesthetic';
import { SOCIAL_VISUALAUDITORYREADWRITE } from './datas/SocialVisualAuditoryReadWrite';
import { SOCIAL_VISUALKINESTHETIC } from './datas/SocialVisualKinesthetic';
import { SOLO_AUDITORY } from './datas/SoloAuditory';
import { SOLO_AUDITORYKINESTHETIC } from './datas/SoloAuditoryKinesthetic';
import { SOLO_AUDITORYREADWRITE } from './datas/SoloAuditoryReadWrite';
import { SOLO_AUDITORYREADWRITEKINESTHETIC } from './datas/SoloAuditoryReadWriteKinesthetic';
import { SOLO_KINESTHETIC } from './datas/SoloKinesthetic';
import { SOLO_READWRITE } from './datas/SoloReadWrite';
import { SOCIAL_READWRITEKINESTHETIC } from './datas/SoloReadWriteKinesthetic';
import { SOLO_VISUALREADWRITEKINESTHETIC } from './datas/SoloReadWriteKinesthetics';
import { SOLO_VISUAL } from './datas/SoloVisual';
import { SOLO_VISUALAUDITORYKINESTHETIC } from './datas/SoloVisualAuditoryKinesthetic';
import { SOLO_VISUALAUDITORYREADWRITE } from './datas/SoloVisualAuditoryReadWrite';
import { SOLO_VISUALAUDITORYREADWRITEKINESTHETIC } from './datas/SoloVisualAuditoryReadWriteKinesthetic';
import { SOLO_VISUALKINESTHETIC } from './datas/SoloVisualKinesthetic';

export const DATA_MAP: Record<string, any> = {
  // ---- SOLO ----
  'solo visual': SOLO_VISUAL,
  'solo auditory': SOLO_AUDITORY,
  'solo readwrite': SOLO_READWRITE,
  'solo kinesthetic': SOLO_KINESTHETIC,

  'solo visual - solo auditory': SOLO_VISUALAUDITORY,
  // 'solo visual - solo readwrite': SOLO_VISUALREADWRITE,
  'solo visual - solo kinesthetic': SOLO_VISUALKINESTHETIC,
  'solo auditory - solo readwrite': SOLO_AUDITORYREADWRITE,
  'solo auditory - solo kinesthetic': SOLO_AUDITORYKINESTHETIC,
  // 'solo readwrite - solo kinesthetic': SOLO_READWRITEKINESTHETIC,

  'solo visual - solo auditory - solo readwrite': SOLO_VISUALAUDITORYREADWRITE,
  'solo visual - solo auditory - solo kinesthetic': SOLO_VISUALAUDITORYKINESTHETIC,
  'solo visual - solo readwrite - solo kinesthetic': SOLO_VISUALREADWRITEKINESTHETIC,
  'solo auditory - solo readwrite - solo kinesthetic': SOLO_AUDITORYREADWRITEKINESTHETIC,

  'solo visual - solo auditory - solo readwrite - solo kinesthetic':
    SOLO_VISUALAUDITORYREADWRITEKINESTHETIC,

  // ---- MIXED ----
  'mixed visual': MIXED_VISUAL,
  'mixed auditory': MIXED_AUDITORY,
  // 'mixed readwrite': MIXED_READWRITE,
  'mixed kinesthetic': MIXED_KINESTHETIC,

  'mixed visual - mixed auditory': MIXED_VISUAL_AUDITORY,
  'mixed visual - mixed readwrite': MIXED_VISUALREADWRITE,
  'mixed visual - mixed kinesthetic': MIXED_VISUALKINESTHETIC,
  'mixed auditory - mixed readwrite': MIXED_AUDITORYREADWRITE,
  'mixed auditory - mixed kinesthetic': MIXED_AUDITORYKINESTHETIC,
  'mixed readwrite - mixed kinesthetic': MIXED_READWRITEKINESTHETIC,

  'mixed visual - mixed auditory - mixed readwrite': MIXED_VISUALAUDITORYREADWRITE,
  'mixed visual - mixed auditory - mixed kinesthetic': MIXED_VISUALAUDITORYKINESTHETIC,
  'mixed visual - mixed readwrite - mixed kinesthetic': MIXED_VISUALREADWRITEKINESTHETIC,
  'mixed auditory - mixed readwrite - mixed kinesthetic': MIXED_AUDITORYREADWRITEKINESTHETIC,

  // 'mixed visual - mixed auditory - mixed readwrite - mixed kinesthetic':
  //   MIXED_VISUALAUDITORYREADWRITEKINESTHETIC,

  // ---- SOCIAL ----
  'social visual': SOCIAL_VISUAL,
  'social auditory': SOCIAL_AUDITORY,
  'social readwrite': SOCIAL_READWRITE,
  'social kinesthetic': SOCIAL_KINESTHETIC,

  // 'social visual - social auditory': SOCIAL_VISUAL_AUDITORY,
  // 'social visual - social readwrite': SOCIAL_VISUAL_READWRITE,
  'social visual - social kinesthetic': SOCIAL_VISUALKINESTHETIC,
  'social auditory - social readwrite': SOCIAL_AUDITORYREADWRITE,
  'social auditory - social kinesthetic': SOCIAL_AUDITORYKINESTHETIC,
  'social readwrite - social kinesthetic': SOCIAL_READWRITEKINESTHETIC,

  'social visual - social auditory - social readwrite': SOCIAL_VISUALAUDITORYREADWRITE,
  'social visual - social auditory - social kinesthetic': SOCIAL_VISUALAUDITORYKINESTHETIC,
  'social visual - social readwrite - social kinesthetic': SOCIAL_VISUALREADWRITEKINESTHETIC,
  'social auditory - social readwrite - social kinesthetic': SOCIAL_AUDITORYREADWRITEKINESTHETIC,

  // 'social visual - social auditory - social readwrite - social kinesthetic':
  //   SOCIAL_VISUALAUDITORYREADWRITEKINESTHETIC,
};

export const VisualDataFinder = (styles: string[]) => {
  const key = styles.join(' - '); // жишээлбэл: "solo visual - solo auditory"

  return DATA_MAP[key] ?? null;
};
