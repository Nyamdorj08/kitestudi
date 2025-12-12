'use client';

import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  Chip,
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import { StudiiAnswerResponse } from 'src/services/types/Studii.type';

type PaymentSectionProps = {
  result: StudiiAnswerResponse;
  onCheckPayment: () => void;
};

export const PaymentSection = ({ result, onCheckPayment }: PaymentSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        maxWidth: 560,
        mx: 'auto',
        mt: 4,
        px: 3,
        pt: 3,
        pb: 2.5,
        borderRadius: 4,
        border: '1px solid rgba(129,230,217,0.35)',
        background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
        boxShadow: '0 0 40px 6px rgba(56,189,248,0.20)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(circle at 18% 0%, ${alpha(
            theme.palette.primary.light,
            0.16
          )}, transparent 55%)`,
        }}
      />

      <Stack spacing={2} sx={{ position: 'relative' }}>
        <Box
          sx={{
            width: { xs: '100%', md: 'auto' },
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 1.5, md: 0 },
            mb: 0.5,
          }}
        >
          <Box sx={{ borderRadius: 3, overflow: 'hidden', p: 1, maxWidth: 220, width: '100%' }}>
            <Box
              component="img"
              src="/full_white_logo.png"
              alt="STUDII-MAIN"
              sx={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                maxHeight: isMobile ? 220 : 260,
              }}
            />
          </Box>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
          <Chip
            icon={<LockRoundedIcon />}
            label="Нэг удаагийн төлбөр"
            size="small"
            sx={{
              borderRadius: 999,
              bgcolor: alpha(theme.palette.common.white, 0.06),
              border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
              color: 'text.primary',
            }}
          />
          <Chip
            icon={<WorkspacePremiumRoundedIcon />}
            label="Дүгнэлт + 7 алхам"
            size="small"
            sx={{
              borderRadius: 999,
              bgcolor: alpha(theme.palette.common.white, 0.06),
              border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
              color: 'text.primary',
            }}
          />
          <Chip
            icon={<BoltRoundedIcon />}
            label="Төлбөр баталгаажмагц нээгдэнэ"
            size="small"
            sx={{
              borderRadius: 999,
              bgcolor: alpha(theme.palette.success.main, 0.12),
              border: `1px solid ${alpha(theme.palette.success.main, 0.35)}`,
              color: 'text.primary',
            }}
          />
        </Stack>

        <Typography
          variant="h6"
          fontWeight={950}
          sx={{
            mt: 1,
            textAlign: 'center',
            lineHeight: 1.25,
            textShadow: '0 1px 2px rgba(15,23,42,0.9)',
          }}
        >
          <Box component="span" sx={{ color: 'primary.main' }}>
            “Муу сураад”
          </Box>{' '}
          байгаа юм биш.
          <br />
          Зүгээр л буруу аргаар{' '}
          <Box component="span" sx={{ color: 'warning.light' }}>
            сураад{' '}
          </Box>{' '}
          байгаа юм.
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 1.6,
            borderRadius: 3,
            borderColor: alpha(theme.palette.warning.main, 0.55),
            backgroundColor: alpha(theme.palette.common.black, 0.18),
          }}
        >
          <Stack direction="row" spacing={1.2} alignItems="flex-start">
            <WarningAmberRoundedIcon />
            <Stack spacing={0.4}>
              <Typography variant="body2" fontWeight={950}>
                Та өөрийн онцлогт таарахгүй аргаар суралцаж байна
              </Typography>
              <Typography variant="body2"> </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <strong>Өөртөө тохирох арга барилгүй</strong> учраас сурах нэрийн дор{' '}
                <strong> ойлгосон мэт болоод л мартаж</strong> үнэт цагаа үрж байна.
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        <Paper
          variant="outlined"
          sx={{
            mt: 0.5,
            p: 2,
            borderRadius: 3,
            borderColor: alpha(theme.palette.success.main, 0.55),
            backgroundColor: alpha(theme.palette.common.black, 0.18),
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight={980}>
            6,900₮
            <br />
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Ганцхан удаа <strong>хагас таваг хоолны мөнгө</strong> төлөөд өөрт таарсан суралцах арга
            барилаа олж авна.
          </Typography>

          <Stack spacing={0.8} mt={1.2} sx={{ textAlign: 'left', maxWidth: 460, mx: 'auto' }}>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TaskAltRoundedIcon fontSize="small" />
              <Typography variant="body2">
                Таны хамгийн сайн суралцах хэв маягийг <strong>нэрлэнэ</strong>.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TaskAltRoundedIcon fontSize="small" />
              <Typography variant="body2">
                Дараагийн 7 хоногт яг юу хийхийг чинь <strong>хэлнэ</strong>.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TaskAltRoundedIcon fontSize="small" />
              <Typography variant="body2">Юуг яаж хэрхэн сурах талаар жишээг танд өгнө.</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TaskAltRoundedIcon fontSize="small" />
              <Typography variant="body2">
                1 цагийн урттай зөвхөн танд зориулсан Spotify Playlist.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <TaskAltRoundedIcon fontSize="small" />
              <Typography variant="body2">
                20+ видео хичээл / унших / сонсох / ажиллах материал бүхий step-up.mn англи хэлний
                онлайн сургалтыг үзэх 1 сарын эрх.
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        {isMobile && result.urls?.length ? (
          <Box mt={0.5} width="100%">
            <Typography
              sx={{ textAlign: 'center', color: 'text.secondary' }}
              variant="body2"
              fontWeight={950}
              gutterBottom
            >
              Банкны аппаар 10 секундэд төлөөд суралцах арга барилаа олж ав
            </Typography>

            <Grid container spacing={2} mt={0.5}>
              {result.urls.map((url, idx) => (
                <Grid item xs={3} key={idx} textAlign="center">
                  <Link href={url.link} target="_blank" underline="none">
                    <Box
                      component="img"
                      src={url.logo}
                      alt={url.name}
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        objectFit: 'contain',
                        border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
                        bgcolor: alpha(theme.palette.common.white, 0.06),
                        p: 0.6,
                      }}
                    />
                    <Typography
                      variant="caption"
                      component="div"
                      mt={0.5}
                      sx={{ wordBreak: 'break-word', color: 'text.secondary' }}
                    >
                      {url.name}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}

        <Typography
          variant="body2"
          fontWeight={950}
          sx={{ color: 'text.secondary', textAlign: 'center', mt: 0.5 }}
        >
          QR код уншуулж төлөөд
          <br />
          <Box component="span" sx={{ color: 'text.primary' }}>
            “Дүгнэлтээ нээх”
          </Box>{' '}
          товчийг дар — тэр үед дүгнэлт чинь шууд гарна.
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            mt: 0.5,
            p: 2,
            borderRadius: 3,
            borderColor: 'rgba(129,230,217,0.5)',
            backgroundColor: 'rgba(15,23,42,0.95)',
            mx: 'auto',
          }}
        >
          <Box
            component="img"
            src={`data:image/png;base64,${result.qr_image}`}
            alt="QR төлбөр"
            sx={{ width: 230, height: 230, objectFit: 'contain', display: 'block' }}
          />
        </Paper>

        <Stack alignItems="center" mt={1}>
          <Button
            variant="contained"
            size="large"
            onClick={onCheckPayment}
            sx={{
              width: '100%',
              maxWidth: 440,
              borderRadius: 999,
              py: 1.35,
              px: 4,
              background: 'linear-gradient(90deg, #0f766e, #2563eb, #22c55e)',
              fontWeight: 980,
              fontSize: '1rem',
              letterSpacing: 0.2,
              '&:hover': {
                background: 'linear-gradient(90deg, #0f766e, #1d4ed8, #4ade80)',
              },
            }}
          >
            ДҮГНЭЛТЭЭ НЭЭХ
          </Button>

          <Typography
            variant="caption"
            sx={{ mt: 0.8, textAlign: 'center', color: alpha(theme.palette.common.white, 0.6) }}
          >
            Secure төлбөр • QPay / Банкны аппууд •
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
