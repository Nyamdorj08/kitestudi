/* Likert Scale (1–5) — Theme friendly */
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/** value: 1–5 | null, onChange: (n: number) => void */
export function Likert({
  value,
  onChange,
}: {
  value: number | null;
  onChange: (n: number) => void;
}) {
  const theme = useTheme();

  // твоий dark–teal + neon accent-т ойр улаанаас ногоон хүртэл
  const scale = [
    theme.palette.error?.main || '#ef4444', // 1
    '#f2994a', // 2
    '#eab308', // 3 (warm yellow)
    '#34d399', // 4 (teal green)
    theme.palette.success?.main || '#00ffb3', // 5 (neon green)
  ];

  const Circle = (i: number) => (
    <Box
      key={i}
      role="button"
      tabIndex={0}
      aria-label={`${i} / 5`}
      onClick={() => onChange(i)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onChange(i)}
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: `3px solid ${scale[i - 1]}`,
        cursor: 'pointer',
        transition: 'transform .12s, box-shadow .12s, background-color .12s, border-color .12s',
        backgroundColor: value === i ? scale[i - 1] : 'transparent',
        boxShadow: value === i ? `0 0 0 6px ${scale[i - 1]}22` : 'none',
        '&:hover': {
          transform: 'scale(1.06)',
          boxShadow: `0 0 0 8px ${scale[i - 1]}22`,
        },
        '@media (max-width:600px)': { width: 48, height: 48 },
      }}
    />
  );

  return (
    <>
      <Stack direction="row" justifyContent="center" spacing={3} mt={1.5}>
        {[1, 2, 3, 4, 5].map(Circle)}
      </Stack>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
          САНАЛ НИЙЛЭХГҮЙ
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>
          САНАЛ НИЙЛНЭ
        </Typography>
      </Box>
    </>
  );
}
