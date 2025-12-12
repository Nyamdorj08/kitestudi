import { useMemo, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Box, Snackbar, Stack, Typography } from '@mui/material';

export const PromoCard = ({
  code,
  helpBaseUrl,
}: {
  code?: string | null;
  helpBaseUrl: string; // e.g. '/step-up/promo-help' OR 'https://step-up.mn/promo-help'
}) => {
  const [copied, setCopied] = useState(false);
  const [snack, setSnack] = useState(false);

  const HELP_URL = useMemo(() => {
    if (!code) return '';
    const sep = helpBaseUrl.includes('?') ? '&' : '?';
    return `${helpBaseUrl}${sep}code=${encodeURIComponent(code)}`;
  }, [helpBaseUrl, code]);

  if (!code) return null;

  const handleOpen = () => {
    if (typeof window === 'undefined') return;
    window.open(HELP_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setSnack(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setSnack(true);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{
          mt: 2,
          p: 1.6,
          borderRadius: 2.5,
          bgcolor: 'rgba(15,23,42,0.92)',
          border: '1px solid rgba(56,189,248,0.22)',
          boxShadow: '0 18px 45px rgba(15,23,42,0.85)',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          outline: 'none',
          '&:hover': {
            bgcolor: 'rgba(15,23,42,0.98)',
            border: '1px solid rgba(56,189,248,0.45)',
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            boxShadow: '0 0 0 3px rgba(56,189,248,0.25), 0 18px 45px rgba(15,23,42,0.85)',
          },
        }}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Англи хэлний видео хичээлийн 1 сарын эрх"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen();
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(56,189,248,0.10)',
            flexShrink: 0,
          }}
        >
          <Icon icon="mdi:information-outline" style={{ fontSize: 24 }} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.4 }}>
            <Typography
              sx={{
                color: 'grey.100',
                fontSize: '0.92rem',
                fontWeight: 900,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Англи хэлний видео хичээлийн 1 сарын эрх
            </Typography>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: 'grey.400',
              fontSize: '0.82rem',
              lineHeight: 1.5,
            }}
          >
            Кодоо хуулж аваад, идэвхжүүлэх заавар унших бол энд дарна уу.
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1.1 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1.1,
                py: 0.55,
                borderRadius: 2,
                bgcolor: 'rgba(56,189,248,0.12)',
                border: '1px solid rgba(56,189,248,0.35)',
                color: 'grey.100',
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: 0.7,
                userSelect: 'text',
              }}
            >
              {code}
            </Box>

            <Box
              onClick={handleCopy}
              role="button"
              tabIndex={0}
              aria-label="Код хуулах"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleCopy(e as any);
              }}
              sx={{
                width: 40,
                height: 36,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: copied ? 'rgba(34,197,94,0.14)' : 'rgba(148,163,184,0.08)',
                border: copied
                  ? '1px solid rgba(34,197,94,0.35)'
                  : '1px solid rgba(148,163,184,0.18)',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon icon={copied ? 'mdi:check' : 'mdi:content-copy'} style={{ fontSize: 18 }} />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, opacity: 0.85 }}>
          <Icon icon="mdi:arrow-top-right" style={{ fontSize: 18 }} />
        </Box>
      </Stack>

      <Snackbar
        open={snack}
        autoHideDuration={1400}
        onClose={() => setSnack(false)}
        message={copied ? 'Код хууллаа' : 'Хуулах боломжгүй байна'}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};
