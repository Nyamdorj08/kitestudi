'use client';

import { Box, CircularProgress, Stack, Typography } from '@mui/material';

export const PaymentSection = () => {
  return (
    <Box
      sx={{
        maxWidth: 480,
        mx: 'auto',
        mt: 8,
        px: 3,
        pt: 5,
        pb: 5,
        borderRadius: 4,
        border: '1px solid rgba(129,230,217,0.25)',
        background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
        boxShadow: '0 0 40px 6px rgba(56,189,248,0.15)',
        textAlign: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Box
          sx={{ borderRadius: 3, overflow: 'hidden', p: 1, maxWidth: 180, width: '100%' }}
        >
          <Box
            component="img"
            src="/full_white_logo.png"
            alt="STUDII"
            sx={{ width: '100%', display: 'block' }}
          />
        </Box>

        <CircularProgress
          size={48}
          thickness={3}
          sx={{
            color: 'rgba(56,189,248,0.9)',
            '& .MuiCircularProgress-circle': { strokeLinecap: 'round' },
          }}
        />

        <Stack spacing={1}>
          <Typography variant="h6" fontWeight={700} sx={{ color: 'common.white' }}>
            Дүгнэлт бэлтгэгдэж байна...
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 320 }}>
            Таны хариултыг хүлээн авлаа. Удахгүй дүгнэлт чинь бэлэн болно — энэ хуудсыг хаахгүй
            байгаарай.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
