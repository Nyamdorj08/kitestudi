'use client';

import { Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { CircularLoadingBlur } from 'src/components/circular-loading-blur';
import { StudiiService } from 'src/services';
import { StudiiAnswerResponse } from 'src/services/types/Studii.type';
import { getErrorMessage } from 'src/utils/error-message';
import { eventview } from 'src/utils/fpixel';

import { PaymentSection } from '../PaymentSection';
import { VisualDataFinder } from '../VisualData';
import { Visual, VisualData } from '../Visual';
import { FooterView } from 'src/sections/Footer';
import { ResultChecker } from 'src/sections/home/view/result-checker';

export const ResultView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const params = useParams();
  const [result, setResult] = useState<StudiiAnswerResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [hasFiredCheckout, setHasFiredCheckout] = useState(false);
  const [hasFiredPurchase, setHasFiredPurchase] = useState(false);
  const [hasFiredResultViewed, setHasFiredResultViewed] = useState(false);
  const [data, setData] = useState<VisualData | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await StudiiService().paymentCheck(params._id.toString());
      setResult(response.data);
      setLoading(false);
      if (response.data.styles) {
        console.log(VisualDataFinder(response.data.styles));
        setData(VisualDataFinder(response.data.styles));
      }
    } catch (error) {
      toast.error(getErrorMessage(error));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!params._id) return;
    if (params._id !== 'helper') {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [params._id]);

  useEffect(() => {
    if (!result) return;

    if (result.status === 'pending' && !hasFiredCheckout) {
      eventview(
        'InitiateCheckout',
        {
          value: 4900.0,
          currency: 'MNT',
          num_items: 1,
          contents: [{ id: 'studii-basic', quantity: 1, item_price: 4900.0 }],
          content_type: 'product',
        },
        { eventID: `checkout-${result._id}` }
      );
      setHasFiredCheckout(true);
    }

    if (result.status === 'paid' && !hasFiredPurchase) {
      eventview(
        'Purchase',
        {
          value: 4900.0,
          currency: 'MNT',
          num_items: 1,
          contents: [{ id: 'st-basic', quantity: 1, item_price: 4900.0 }],
          content_type: 'product',
        },
        { eventID: `purchase-${result._id}` }
      );
      setHasFiredPurchase(true);
    }

    if (result.status === 'completed' && !hasFiredResultViewed) {
      eventview('ResultViewed', {}, { eventID: `result-${result._id}` });
      setHasFiredResultViewed(true);
    }
  }, [result, hasFiredCheckout, hasFiredPurchase, hasFiredResultViewed]);

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
          <Container>
            <PaymentSection result={result} onCheckPayment={fetchData} />
          </Container>
        )}

        {loading && <CircularLoadingBlur loading={loading} />}

        {!loading && result && (result.status === 'paid' || result.status === 'completed') && (
          <Container maxWidth="md">
            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // maxWidth: { md: 220 },
                mt: { xs: 1.5, md: 0 },
                mb: 5,
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

              <Box sx={{ position: 'relative' }}>{data && <Visual data={data} />}</Box>
            </Paper>
          </Container>
        )}
        <FooterView />
      </Box>
    </>
  );
};
