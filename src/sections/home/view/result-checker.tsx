'use client';

import {
  Box,
  Paper,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const ResultChecker = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const [resultId, setResultId] = useState('');

  const handleGo = () => {
    const trimmed = resultId.trim();
    if (!trimmed) return;
    router.push(`/${trimmed}`);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleGo();
    }
  };

  return (
    <Paper
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        p: isMobile ? 3 : 4,
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(129,230,217,0.35)',
        background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
        boxShadow: '0 0 40px 6px rgba(56,189,248,0.20)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top center, rgba(56,189,248,0.22), transparent 55%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          width: { xs: 140, md: 160 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
          mb: 3,
        }}
      >
        <Box
          component="img"
          src="/full_white_logo.png"
          alt="STUDII-MAIN"
          sx={{
            width: '100%',
            display: 'block',
          }}
        />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            textAlign: 'center',
            mb: 3,
          }}
        >
          Төлбөр хийсний дараа таны гүйлгээний утганд байх зурагт үзүүлсэн 8 оронтой тоог оруулаад
          хариугаа шалгах/дахин харах боломжтой. <br />
          Жишээ: 56781234
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',

            mb: 3,
          }}
        >
          <Box
            component="img"
            src="/55.png"
            alt="STUDII-MAIN"
            sx={{
              width: '100%',
              display: 'block',
              borderRadius: 4,
            }}
          />
        </Box>

        <Stack direction={isMobile ? 'column' : 'row'} spacing={1.5} alignItems="center">
          <TextField
            fullWidth
            placeholder="Жишээ: 56781234"
            value={resultId}
            onChange={(e) => setResultId(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              '& .MuiInputBase-root': {
                bgcolor: '#020617',
                color: 'common.white',
                borderRadius: 999,
                px: 1.5,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(148,163,184,0.6)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(148,163,184,0.9)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#38bdf8',
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleGo}
            disabled={!resultId.trim()}
            sx={{
              flexShrink: 0,
              px: 4,
              py: 1.1,
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: 'linear-gradient(90deg, #0f766e, #2563eb)',
              boxShadow: '0 14px 34px rgba(37,99,235,0.55)',
              '&:hover': {
                background: 'linear-gradient(90deg, #0f766e, #1d4ed8)',
                boxShadow: '0 18px 40px rgba(37,99,235,0.7)',
              },
            }}
          >
            Шалгах
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
