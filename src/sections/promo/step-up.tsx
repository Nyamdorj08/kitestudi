'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Icon } from '@iconify/react/dist/iconify.js';

import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  Paper,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

export const StepUpPropmoView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sp = useSearchParams();

  const code = sp.get('code') || '';

  const [snack, setSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState('Код хууллаа');

  const steps = useMemo(
    () => [
      {
        icon: 'mdi:content-copy',
        title: '1) Кодоо хуул',
        desc: 'Дээрх “хуулах” дээр дарж кодоо хуулна.',
        src: null,
      },
      {
        icon: 'mdi:login-variant',
        title: '2) Step-Up руу ор',
        desc: 'Step-Up сайт/апп руугаа нэвтэрнэ.',
        src: 'https://studyy.b-cdn.net/illustrations/promo/stepup/1.png',
      },
      {
        icon: 'mdi:ticket-percent',
        title: '3) “Урамшуулал / Promo” хэсгийг ол',
        desc: '“Promo код” хэсэг дээр орно.',
        src: 'https://studyy.b-cdn.net/illustrations/promo/stepup/2.png',
      },
      {
        icon: 'mdi:check-decagram',
        title: '4) Paste хийгээд идэвхжүүл',
        desc: 'Кодоо paste хийгээд "Код ашиглах" дарна.',
        src: 'https://studyy.b-cdn.net/illustrations/promo/stepup/3.png',
      },
    ],
    []
  );

  const handleCopy = async () => {
    if (!code) {
      setSnackMsg('Код олдсонгүй');
      setSnack(true);
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
      setSnackMsg('Код хууллаа');
      setSnack(true);
    } catch {
      setSnackMsg('Хуулах боломжгүй байна');
      setSnack(true);
    }
  };

  const handleOpenStepup = () => {
    if (typeof window === 'undefined') return;
    window.open(
      'https://step-up.mn/english/foundation/grammar/2/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          py: 6,
          background: 'radial-gradient(circle at top, #1e293b 0, #020617 45%, #020617 100%)',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: 720,
            p: isMobile ? 3 : 4,
            borderRadius: 4,
            backdropFilter: 'blur(20px)',
            border: '  1px solid rgba(129,230,217,0.35)',
            background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
            boxShadow: '0 0 40px 6px rgba(56,189,248,0.20)',
          }}
        >
          <Stack spacing={1.6}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: 999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(56,189,248,0.12)',
                  border: '1px solid rgba(56,189,248,0.22)',
                  flexShrink: 0,
                }}
              >
                <Icon icon="mdi:information-outline" style={{ fontSize: 24 }} />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography fontWeight={950} sx={{ color: 'grey.100', lineHeight: 1.2 }}>
                  Идэвхжүүлэх заавар
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  Урамшууллын кодоо хэрхэн ашиглах вэ
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ borderColor: 'rgba(148,163,184,0.16)' }} />

            <Stack spacing={0.9}>
              <Typography variant="body2" sx={{ color: 'grey.300', fontWeight: 800 }}>
                Таны код
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="stretch">
                <Box
                  sx={{
                    flex: 1,
                    px: 1.2,
                    py: 1.05,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(56,189,248,0.10)',
                    border: '1px solid rgba(56,189,248,0.22)',
                    color: 'grey.100',
                    fontWeight: 950,
                    fontSize: 13,
                    letterSpacing: 0.9,
                    userSelect: 'text',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={code || 'Код олдсонгүй'}
                >
                  {code || 'Код олдсонгүй'}
                </Box>

                <Button
                  onClick={handleCopy}
                  variant="outlined"
                  disabled={!code}
                  sx={{
                    borderRadius: 2.5,
                    fontWeight: 950,
                    textTransform: 'none',
                    px: 2,
                    py: 1.05,
                    boxShadow: '0 14px 30px rgba(56,189,248,0.18)',
                    whiteSpace: 'nowrap',
                  }}
                  startIcon={<Icon icon="mdi:content-copy" />}
                >
                  Хуулах
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.2 }}>
                <Icon icon="mdi:cursor-default-click-outline" />
                <Typography variant="caption" sx={{ color: 'grey.500' }}>
                  Дараах алхмуудыг дагаад кодоо идэвхжүүлээрэй.
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={1.1} sx={{ mt: 0.4 }}>
              {steps.map((s, i) => (
                <Stack
                  spacing={1.5}
                  sx={{
                    p: 1.2,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(15,23,42,0.55)',
                    border: '1px solid rgba(148,163,184,0.14)',
                  }}
                >
                  <Stack key={s.title} direction="row" spacing={1.2}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(148,163,184,0.08)',
                        border: '1px solid rgba(148,163,184,0.16)',
                        flexShrink: 0,
                      }}
                    >
                      <Icon icon={s.icon} style={{ fontSize: 18 }} />
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ color: 'grey.100', fontWeight: 950, fontSize: 14 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'grey.400' }}>
                        {i === 1 ? (
                          <>
                            <span>
                              <a
                                href="https://step-up.mn/english/foundation/grammar/2/"
                                target="_blank"
                                style={{ color: '#fff' }}
                              >
                                Энд дарж вебсайт руу нэвтэрнэ үү
                              </a>{' '}
                            </span>
                          </>
                        ) : (
                          <>{s.desc}</>
                        )}
                      </Typography>
                    </Box>
                  </Stack>

                  {s.src && (
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={s.src}
                        alt="STUDII-MAIN"
                        sx={{
                          width: '100%',
                          display: 'block',
                        }}
                      />
                    </Box>
                  )}
                </Stack>
              ))}
            </Stack>

            <Divider sx={{ borderColor: 'rgba(148,163,184,0.16)' }} />

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              justifyContent="space-between"
            >
              <Stack spacing={0.2}>
                <Typography sx={{ color: 'grey.200', fontWeight: 900, fontSize: 13 }}>
                  Хэрвээ “Promo / Урамшуулал” хэсэг олдохгүй байвал
                </Typography>
                <Typography variant="caption" sx={{ color: 'grey.500' }}>
                  Апп/сайтаа шинэчлээд дахин оролдоорой.
                </Typography>
              </Stack>

              <Button
                onClick={handleOpenStepup}
                variant="outlined"
                sx={{
                  borderRadius: 2.5,
                  textTransform: 'none',
                  fontWeight: 900,
                  borderColor: 'rgba(56,189,248,0.32)',
                  color: 'grey.100',
                  '&:hover': { borderColor: 'rgba(56,189,248,0.55)' },
                }}
                endIcon={<Icon icon="mdi:open-in-new" />}
              >
                Step-Up нээх
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Box>

      <Snackbar
        open={snack}
        autoHideDuration={1400}
        onClose={() => setSnack(false)}
        message={snackMsg}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};
