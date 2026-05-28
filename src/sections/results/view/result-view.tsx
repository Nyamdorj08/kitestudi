'use client';

import { Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import { CircularLoadingBlur } from 'src/components/circular-loading-blur';
import { StudiiService } from 'src/services';
import { StudiiAnswerResponse } from 'src/services/types/Studii.type';
import { getErrorMessage } from 'src/utils/error-message';

import { PaymentSection } from '../PaymentSection';
import { VisualDataFinder } from '../VisualData';
import { Visual, VisualData } from '../Visual';
import { FooterView } from 'src/sections/Footer';
import { ResultChecker } from 'src/sections/home/view/result-checker';

const POLL_INTERVAL_MS = 5000;

export const ResultView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const params = useParams();
  const [result, setResult] = useState<StudiiAnswerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<VisualData | null>(null);

  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async () => {
    try {
      const response = await StudiiService().paymentCheck(params._id.toString());
      setResult(response.data);
      if (response.data.styles) {
        setData(VisualDataFinder(response.data.styles));
      }
      return response.data.status;
    } catch (error) {
      toast.error(String(getErrorMessage(error)));
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!params._id || params._id === 'helper') {
      setLoading(false);
      return;
    }

    fetchData().then((status) => {
      if (status === 'pending') {
        pollingRef.current = setInterval(async () => {
          const newStatus = await fetchData();
          if (newStatus === 'approved') {
            if (pollingRef.current) clearInterval(pollingRef.current);
          }
        }, POLL_INTERVAL_MS);
      }
    });

    return () => {
      if (pollingRef.current) clearInterval(pollingRef.current);
    };
  }, [params._id]);

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(circle at top, #1e293b 0, #020617 45%, #020617 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: isMobile ? 4 : 8,
        }}
      >
        {params._id && params._id === 'helper' && (
          <Container maxWidth="sm">
            <ResultChecker />
          </Container>
        )}

        {!loading && result && result.status === 'pending' && (
          <Container maxWidth="sm">
            <PaymentSection />
          </Container>
        )}

        {loading && <CircularLoadingBlur loading={loading} />}

        {!loading && result && result.status === 'approved' && (
          <Container maxWidth="md">
            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 1.5, md: 0 },
                mb: 5,
              }}
            >
              <Box
                sx={{ borderRadius: 3, overflow: 'hidden', p: 1, maxWidth: 220, width: '100%' }}
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

            <Paper
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 5,
                p: isMobile ? 3 : 4,
                background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
                border: '1px solid rgba(148,163,184,0.4)',
                boxShadow: '0 25px 80px rgba(15,23,42,0.9)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at top center, rgba(56,189,248,0.2), transparent 55%)',
                  pointerEvents: 'none',
                }}
              />
              <Box sx={{ position: 'relative' }}>
                {data && <Visual data={data} result={result} />}
              </Box>
            </Paper>
          </Container>
        )}
        <FooterView />
      </Box>
    </>
  );
};
