'use client';

import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        toast.error(data.message || 'Нэвтрэх боломжгүй');
        return;
      }

      router.push('/admin/dashboard');
    } catch {
      toast.error('Алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at top, #1e293b 0, #020617 45%, #020617 100%)',
        px: 2,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 380,
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
          border: '1px solid rgba(129,230,217,0.25)',
          boxShadow: '0 0 40px 6px rgba(56,189,248,0.15)',
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center">
            <Box
              component="img"
              src="/full_white_logo.png"
              alt="STUDII"
              sx={{ width: 140, display: 'block', mx: 'auto', mb: 2 }}
            />
            <Typography variant="h6" fontWeight={700}>
              Admin нэвтрэх
            </Typography>
          </Box>

          <TextField
            fullWidth
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            sx={{ '& .MuiInputBase-root': { bgcolor: '#020617', color: 'text.primary' } }}
          />

          <Button
            fullWidth
            variant="contained"
            disabled={!password || loading}
            onClick={handleLogin}
            sx={{
              borderRadius: 999,
              py: 1.3,
              background: 'linear-gradient(90deg, #0f766e, #2563eb)',
              fontWeight: 700,
              '&:hover': { background: 'linear-gradient(90deg, #0f766e, #1d4ed8)' },
            }}
          >
            {loading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
