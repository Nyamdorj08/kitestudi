'use client';

import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Submission = {
  id: string;
  email: string;
  status: 'pending' | 'approved';
  styles: string[];
  created_at: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [approvingId, setApprovingId] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      if (res.status === 401) {
        router.push('/admin');
        return;
      }
      const data = await res.json();
      setSubmissions(data);
    } catch {
      toast.error('Мэдээлэл татаж чадсангүй');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleApprove = async (id: string) => {
    setApprovingId(id);
    try {
      const res = await fetch(`/api/admin/approve/${id}`, { method: 'POST' });
      if (!res.ok) throw new Error('Алдаа');
      toast.success('Батлагдлаа');
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: 'approved' } : s))
      );
    } catch {
      toast.error('Батлах боломжгүй');
    } finally {
      setApprovingId(null);
    }
  };

  const pending = submissions.filter((s) => s.status === 'pending');
  const approved = submissions.filter((s) => s.status === 'approved');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #1e293b 0, #020617 45%, #020617 100%)',
        px: { xs: 2, md: 4 },
        py: 4,
      }}
    >
      <Stack spacing={3} maxWidth={900} mx="auto">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              component="img"
              src="/full_white_logo.png"
              alt="STUDII"
              sx={{ height: 32, display: 'block' }}
            />
            <Typography variant="h6" fontWeight={700}>
              Admin Dashboard
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1.5}>
            <Chip
              label={`Хүлээгдэж байна: ${pending.length}`}
              sx={{ bgcolor: 'rgba(234,179,8,0.15)', color: '#fde047', borderRadius: 999 }}
            />
            <Chip
              label={`Батлагдсан: ${approved.length}`}
              sx={{ bgcolor: 'rgba(34,197,94,0.15)', color: '#86efac', borderRadius: 999 }}
            />
          </Stack>
        </Stack>

        {loading ? (
          <Box textAlign="center" py={6}>
            <CircularProgress sx={{ color: 'rgba(56,189,248,0.9)' }} />
          </Box>
        ) : (
          <Paper
            sx={{
              borderRadius: 3,
              background: 'rgba(15,23,42,0.96)',
              border: '1px solid rgba(148,163,184,0.2)',
              overflow: 'hidden',
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: 'grey.400', borderColor: 'rgba(148,163,184,0.1)' }}>И-мэйл</TableCell>
                    <TableCell sx={{ color: 'grey.400', borderColor: 'rgba(148,163,184,0.1)' }}>Хэв маяг</TableCell>
                    <TableCell sx={{ color: 'grey.400', borderColor: 'rgba(148,163,184,0.1)' }}>Огноо</TableCell>
                    <TableCell sx={{ color: 'grey.400', borderColor: 'rgba(148,163,184,0.1)' }}>Статус</TableCell>
                    <TableCell sx={{ color: 'grey.400', borderColor: 'rgba(148,163,184,0.1)' }} align="right">Үйлдэл</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {submissions.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} align="center" sx={{ color: 'grey.500', py: 4, borderColor: 'rgba(148,163,184,0.1)' }}>
                        Submission байхгүй байна
                      </TableCell>
                    </TableRow>
                  )}
                  {submissions.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell sx={{ color: 'grey.100', borderColor: 'rgba(148,163,184,0.08)' }}>
                        {row.email}
                      </TableCell>
                      <TableCell sx={{ borderColor: 'rgba(148,163,184,0.08)' }}>
                        <Stack direction="row" spacing={0.5} flexWrap="wrap" gap={0.5}>
                          {row.styles?.map((s, i) => (
                            <Chip
                              key={i}
                              label={s}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(56,189,248,0.1)',
                                color: 'grey.200',
                                fontSize: 11,
                                borderRadius: 999,
                              }}
                            />
                          ))}
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ color: 'grey.400', fontSize: 13, borderColor: 'rgba(148,163,184,0.08)' }}>
                        {new Date(row.created_at).toLocaleString('mn-MN')}
                      </TableCell>
                      <TableCell sx={{ borderColor: 'rgba(148,163,184,0.08)' }}>
                        <Chip
                          label={row.status === 'pending' ? 'Хүлээгдэж байна' : 'Батлагдсан'}
                          size="small"
                          sx={{
                            borderRadius: 999,
                            bgcolor:
                              row.status === 'pending'
                                ? 'rgba(234,179,8,0.15)'
                                : 'rgba(34,197,94,0.15)',
                            color: row.status === 'pending' ? '#fde047' : '#86efac',
                          }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ borderColor: 'rgba(148,163,184,0.08)' }}>
                        {row.status === 'pending' && (
                          <Button
                            size="small"
                            variant="contained"
                            disabled={approvingId === row.id}
                            onClick={() => handleApprove(row.id)}
                            sx={{
                              borderRadius: 999,
                              fontSize: 12,
                              px: 2,
                              background: 'linear-gradient(90deg, #0f766e, #22c55e)',
                              '&:hover': { background: 'linear-gradient(90deg, #0f766e, #16a34a)' },
                            }}
                          >
                            {approvingId === row.id ? '...' : 'Approve'}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}

        <Button
          variant="text"
          onClick={fetchSubmissions}
          sx={{ color: 'text.secondary', alignSelf: 'flex-start' }}
        >
          Шинэчлэх
        </Button>
      </Stack>
    </Box>
  );
}
