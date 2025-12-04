'use client';

import { Box, Button, Grid, Link, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
        maxWidth: 520,
        mx: 'auto',
        mt: 4,
        px: 3,
        pt: 3,
        pb: 2,
        borderRadius: 4,
        border: '1px solid rgba(129,230,217,0.35)',
        background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
        boxShadow: '0 0 40px 6px rgba(56,189,248,0.20)',
      }}
    >
      {/* Title */}

      <Box
        sx={{
          width: { xs: '100%', md: 'auto' },
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // maxWidth: { md: 220 },
          mt: { xs: 1.5, md: 0 },
          mb: 1.5,
        }}
      >
        <Box
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            p: 1,
            maxWidth: 220,
            width: '100%',
          }}
        >
          <Box
            component="img"
            src={'/full_white_logo.png'}
            alt={'STUDII-MAIN'}
            sx={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
              maxHeight: isMobile ? 220 : 260,
            }}
          />
        </Box>
      </Box>

      <Typography
        variant="h6"
        fontWeight={800}
        textAlign="center"
        sx={{
          mb: 1,
          color: 'text.primary',
          textShadow: '0 1px 2px rgba(15,23,42,0.9)',
          textTransform: 'uppercase',
        }}
      >
        дүгнэлтийг нээхэд ердөө <strong>4900₮</strong>
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        Таны суралцах хэв маяг, анхаарал, цагийн менежмент, хойш тавих зуршлын{' '}
        <strong>AI анализ</strong> бэлэн болсон.
      </Typography>

      {/* Info pill */}
      <Stack alignItems="center" spacing={2.5} mt={3}>
        {/* <Box
          p={2}
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(15,118,110,0.18), rgba(59,130,246,0.22))',
            border: '1px solid rgba(45,212,191,0.6)',
            color: 'text.primary',
            fontWeight: 500,
            fontSize: '0.95rem',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          4900₮ — Надад бол нэг аяга кофе ☕
          <br />
          Харин чамд бол дараагийн <strong>олон жилийн суралцах roadmap</strong> болно.
        </Box> */}

        <Typography
          variant="body1"
          fontWeight={700}
          sx={{ color: 'text.primary', textAlign: 'center', mt: 1 }}
        >
          QR кодыг уншуулж төлбөр хийгээд,
          <br /> <u>“Төлбөр шалгах”</u> товчийг дарна уу.
        </Typography>

        {/* QR card */}
        <Paper
          variant="outlined"
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 3,
            borderColor: 'rgba(129,230,217,0.5)',
            backgroundColor: 'rgba(15,23,42,0.95)',
          }}
        >
          <img
            src={`data:image/png;base64,${result.qr_image}`}
            alt="QR төлбөр"
            style={{ width: 220, height: 220, objectFit: 'contain' }}
          />
        </Paper>

        {/* Mobile bank app shortcuts */}
        {isMobile && result.urls?.length ? (
          <Box mt={2} width="100%">
            <Stack alignItems="center">
              <Button
                variant="contained"
                size="large"
                onClick={onCheckPayment}
                sx={{
                  borderRadius: 999,
                  px: 4,
                  background: 'linear-gradient(90deg, #0f766e, #2563eb, #22c55e)',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(90deg, #0f766e, #1d4ed8, #4ade80)',
                  },
                }}
              >
                Төлбөр шалгах
              </Button>
            </Stack>

            <Box mt={1.5}>
              <Typography
                sx={{ textAlign: 'center', color: 'text.secondary' }}
                variant="body1"
                fontWeight={800}
                gutterBottom
              >
                Эсвэл банкны аппаар төлөх
              </Typography>
            </Box>

            <Grid container spacing={2} mt={1}>
              {result.urls.map((url, idx) => (
                <Grid item xs={3} key={idx} textAlign="center">
                  <Link href={url.link} target="_blank" underline="none">
                    <img
                      src={url.logo}
                      alt={url.name}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        objectFit: 'contain',
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
      </Stack>

      {/* Desktop main button */}
      <Stack alignItems="center" mt={3}>
        <Button
          variant="contained"
          size="large"
          onClick={onCheckPayment}
          sx={{
            width: isMobile ? '100%' : 'auto',
            px: isMobile ? 3 : 6,
            py: 1.4,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #0f766e, #2563eb, #22c55e)',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 0 20px rgba(52,211,153,0.6)',
            '&:hover': {
              background: 'linear-gradient(90deg, #0f766e, #1d4ed8, #4ade80)',
              boxShadow: '0 0 26px rgba(52,211,153,0.8)',
            },
          }}
        >
          Төлбөр шалгах
        </Button>
      </Stack>
    </Box>
  );
};
