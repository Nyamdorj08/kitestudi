import { Box, Typography, Fade, Stack } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import { useState, useEffect, MouseEvent, TouchEvent, useRef } from 'react';

const introSlides = [
  {
    illustration: 'https://studyy.b-cdn.net/illustrations/home/1.png',
    text: `
Өөрийн суралцах хэв маягийг мэдэж авахаар бусдаасаа түрүүлж алхсан танд баяр хүргэе.
`,
  },
  {
    illustration: 'https://studyy.b-cdn.net/illustrations/home/2.png',
    text: `
Аливааг сурдаг онцлогоо мэдэж авах адал явдлаар дүүрэн аялалд урьж байна. 
`,
  },
  {
    illustration: 'https://studyy.b-cdn.net/illustrations/home/3.png',
    text: `
Амжилттай суралцах нууц нь танд өөрт байгаа. Үүнийг олоход тань бид тусалъя.
`,
  },
];

const steps = introSlides.length;

export const IntroSlider = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % steps);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + steps) % steps);
  };

  // Autoplay every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  // Tap: left/right area
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  // Swipe: touch events
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;

    const THRESHOLD = 40; // px
    if (Math.abs(diff) > THRESHOLD) {
      if (diff > 0) {
        // swipe right → previous
        handlePrev();
      } else {
        // swipe left → next
        handleNext();
      }
    }

    touchStartX.current = null;
  };

  return (
    <Box
      sx={{
        borderRadius: 3,
        p: { xs: 2.2, md: 2.8 },
        bgcolor: 'rgba(15,23,42,0.96)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        my: 1.5,
      }}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BG glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 62%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 400, md: 500 },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Fade key={index} in timeout={900}>
          <Stack spacing={1.5} sx={{ width: '100%' }}>
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
                src={introSlides[index].illustration}
                alt="STUDII-MAIN"
                sx={{
                  width: '100%',
                  display: 'block',
                }}
              />
            </Box>

            <Box sx={{ width: '100%', mb: 3 }}>
              <Typography
                variant="body1"
                fontSize={{ xs: '1rem', md: '1.03rem' }}
                sx={{
                  width: '100%',
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
                dangerouslySetInnerHTML={{ __html: introSlides[index].text }}
              />
            </Box>
          </Stack>
        </Fade>
      </Box>

      {/* Dots indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 14,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <MobileStepper
          variant="dots"
          steps={steps}
          position="static"
          activeStep={index}
          nextButton={<Box />}
          backButton={<Box />}
          sx={{
            bgcolor: 'rgba(15,23,42,0.7)',
            borderRadius: 999,
            px: 1.5,
            py: 0.75,
            '& .MuiMobileStepper-dots': {
              flexGrow: 1,
              justifyContent: 'center',
            },
            '& .MuiMobileStepper-dot': {
              bgcolor: 'rgba(148,163,184,0.5)',
              width: 6,
              height: 6,
            },
            '& .MuiMobileStepper-dotActive': {
              bgcolor: 'rgba(56,189,248,0.95)',
              width: 18,
              borderRadius: 999,
            },
            '& .MuiMobileStepper-backButton, & .MuiMobileStepper-nextButton': {
              display: 'none',
            },
          }}
        />
      </Box>
    </Box>
  );
};
