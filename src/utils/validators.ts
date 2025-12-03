export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return emailRegex.test(email);
};

export const hasCommonEmailTypo = (email: string): string | null => {
  const lower = email.toLowerCase();

  const typoSuggestions: Record<string, string> = {
    'gmal.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'gnail.com': 'gmail.com',
    'gmial.com': 'gmail.com',
    'gamil.com': 'gmail.com',
    'gmail.co': 'gmail.com',
    'gmail.con': 'gmail.com',
    'yaho.com': 'yahoo.com',
    'yhoo.com': 'yahoo.com',
    'hotmai.com': 'hotmail.com',
    'hotmail.co': 'hotmail.com',
    'icloud.con': 'icloud.com',
    'outlok.com': 'outlook.com',
    'mail.comn': 'mail.com',
  };

  for (const typo in typoSuggestions) {
    if (lower.endsWith(`@${typo}`)) {
      return typoSuggestions[typo];
    }
  }

  return null;
};
