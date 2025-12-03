import { Box, Chip, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Fade from '@mui/material/Fade';
import { useState } from 'react';

type VisualChip = {
  label: string;
  color: string;
  textColor: string;
};

type VisualExample = {
  topic: string;
  text: string;
};

type VisualPlaylist = {
  src: string;
  url: string;
};

type VisualIllustration = {
  src: string;
  alt?: string;
};

type VisualSituations = {
  lecture: string[];
  homeStudy: string[];
  illustration?: VisualIllustration;
};

export type VisualData = {
  title: string;
  mainType: string;
  chips: VisualChip[];
  coreIdea: {
    title: string;
    text: string;
    illustration?: VisualIllustration;
  };
  description: {
    p1: string;
    p2: string;
    illustration?: VisualIllustration;
  };
  prosCons: {
    pros: string[];
    cons: string[];
    illustration?: VisualIllustration;
  };
  generalAdvice: {
    advices: string[];
    illustration?: VisualIllustration;
  };
  situations: VisualSituations;
  generalExamples: { examples: VisualExample[]; illustration?: VisualIllustration };
  dailyChecklist: { checklists: string[]; illustration?: VisualIllustration };
  playlists: VisualPlaylist[];
};

type VisualProps = {
  data: VisualData;
};

export const Visual = ({ data }: VisualProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [activeStep, setActiveStep] = useState(0);

  const slides = [
    {
      label: 'Товч нэгтгэл',
      content: (
        <Box
          sx={{
            p: isMobile ? 2.5 : 3,
            borderRadius: 4,
            border: '1px solid rgba(56,189,248,0.5)',
            bgcolor: 'rgba(15,23,42,0.96)',
            boxShadow: '0 24px 70px rgba(15,23,42,0.95)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%)',
              pointerEvents: 'none',
            }}
          />

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={isMobile ? 2 : 3}
            sx={{
              position: 'relative',
              zIndex: 1,
              alignItems: { xs: 'flex-start', md: 'stretch' },
            }}
          >
            {data.coreIdea.illustration && (
              <Box
                sx={{
                  width: { xs: '100%', md: 'auto' },
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: { md: 117 },
                  mt: { xs: 1.5, md: 0 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(56,189,248,0.25)',
                    p: 1,
                    maxWidth: 117,
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={data.coreIdea.illustration.src}
                    alt={data.coreIdea.illustration.alt ?? data.mainType}
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      maxHeight: isMobile ? 220 : 260,
                    }}
                  />
                </Box>
              </Box>
            )}

            <Box sx={{ flex: 1.6, minWidth: 0 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'teal.200',
                  letterSpacing: 1.6,
                  textTransform: 'uppercase',
                }}
              >
                {data.title}
              </Typography>

              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                sx={{
                  color: 'common.white',
                  fontWeight: 800,
                  mb: 1.5,
                  mt: 0.5,
                }}
              >
                {data.mainType}
              </Typography>

              <Stack
                direction="row"
                spacing={1.2}
                flexWrap="wrap"
                sx={{
                  mb: 2.5,
                  rowGap: 1,
                }}
              >
                {data.chips.map((chip, index) => (
                  <Chip
                    key={index}
                    label={chip.label}
                    size="small"
                    sx={{
                      bgcolor: chip.color,
                      color: chip.textColor,
                      borderRadius: 999,
                      fontSize: 12,
                      px: 1.3,
                      py: 0.6,
                      height: 'auto',
                      lineHeight: 1.3,
                      '& .MuiChip-label': {
                        whiteSpace: 'normal',
                        display: 'block',
                        textAlign: 'left',
                      },
                    }}
                  />
                ))}
              </Stack>

              <Box
                sx={{
                  mt: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(15,23,42,0.98)',
                  border: '1px solid rgba(56,189,248,0.35)',
                  p: 1.8,
                }}
              >
                <Typography variant="body2" sx={{ color: 'teal.100', fontWeight: 700, mb: 0.75 }}>
                  {data.coreIdea.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.100' }}>
                  {data.coreIdea.text}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      ),
    },

    {
      label: 'Тайлбар',
      content: (
        <Box
          sx={{
            p: isMobile ? 2 : 2.5,
            borderRadius: 3,
            bgcolor: 'rgba(15,23,42,0.9)',
            border: '1px solid rgba(148,163,184,0.35)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} alignItems="stretch">
            {data.description.illustration && (
              <Box
                sx={{
                  width: { xs: '100%', md: 'auto' },
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: { md: 117 },
                  mt: { xs: 1.5, md: 0 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(56,189,248,0.25)',
                    p: 1,
                    maxWidth: 117,
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={data.description.illustration.src}
                    alt={data.description.illustration.alt ?? data.mainType}
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      maxHeight: isMobile ? 220 : 260,
                    }}
                  />
                </Box>
              </Box>
            )}

            <Box sx={{ flex: 1.6 }}>
              <Typography variant="subtitle1" sx={{ color: 'teal.100', fontWeight: 700, mb: 1 }}>
                Тайлбар
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100', mb: 1.5 }}>
                {data.description.p1}
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.description.p2}
              </Typography>
            </Box>
          </Stack>
        </Box>
      ),
    },

    {
      label: 'Давуу / Сул тал',
      content: (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
          {data.prosCons.illustration && (
            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                flex: 0.9,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: { md: 117 },
                mt: { xs: 1.5, md: 0 },
              }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  p: 1,
                  maxWidth: 117,
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={data.prosCons.illustration.src}
                  alt={data.prosCons.illustration.alt ?? data.mainType}
                  sx={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    maxHeight: isMobile ? 220 : 260,
                  }}
                />
              </Box>
            </Box>
          )}

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5} sx={{ flex: 2 }}>
            <Box
              flex={1}
              sx={{
                p: isMobile ? 2 : 2.3,
                borderRadius: 3,
                bgcolor: 'rgba(22,101,52,0.26)',
                border: '1px solid rgba(74,222,128,0.4)',
              }}
            >
              <Typography variant="subtitle1" sx={{ color: 'emerald.200', fontWeight: 700, mb: 1 }}>
                Давуу тал
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.prosCons.pros.map((item, index) => (
                  <span key={index}>
                    • {item}
                    {index < data.prosCons.pros.length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>

            <Box
              flex={1}
              sx={{
                p: isMobile ? 2 : 2.3,
                borderRadius: 3,
                bgcolor: 'rgba(127,29,29,0.22)',
                border: '1px solid rgba(248,113,113,0.5)',
              }}
            >
              <Typography variant="subtitle1" sx={{ color: 'red.200', fontWeight: 700, mb: 1 }}>
                Сул тал
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.prosCons.cons.map((item, index) => (
                  <span key={index}>
                    • {item}
                    {index < data.prosCons.cons.length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      ),
    },

    {
      label: 'Ерөнхий зөвлөмж',
      content: (
        <Box
          sx={{
            p: isMobile ? 2 : 2.5,
            borderRadius: 3,
            bgcolor: 'rgba(15,23,42,0.9)',
            border: '1px solid rgba(148,163,184,0.35)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
            {data.generalAdvice.illustration && (
              <Box
                sx={{
                  width: { xs: '100%', md: 'auto' },
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: { md: 117 },
                  mt: { xs: 1.5, md: 0 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(56,189,248,0.25)',
                    p: 1,
                    maxWidth: 117,
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={data.generalAdvice.illustration.src}
                    alt={data.generalAdvice.illustration.alt ?? data.mainType}
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      maxHeight: isMobile ? 220 : 260,
                    }}
                  />
                </Box>
              </Box>
            )}

            <Box sx={{ flex: 1.6 }}>
              <Typography variant="subtitle1" sx={{ color: 'teal.100', fontWeight: 700, mb: 1 }}>
                Ерөнхий зөвлөмж
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.generalAdvice.advices.map((item, index) => (
                  <span key={index}>
                    • {item}
                    {index < data.generalAdvice.advices.length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>
          </Stack>
        </Box>
      ),
    },

    {
      label: 'Ситуаци',
      content: (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
          <Stack spacing={2.5} sx={{ flex: 1.8 }}>
            <Box
              sx={{
                p: isMobile ? 2 : 2.3,
                borderRadius: 3,
                bgcolor: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(30,64,175,0.5)',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: 'blue.100', fontWeight: 700, mb: 0.75 }}>
                Хичээл / лекц дээр
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.situations.lecture.map((item, index) => (
                  <span key={index}>
                    • {item}
                    {index < data.situations.lecture.length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>

            <Box
              sx={{
                p: isMobile ? 2 : 2.3,
                borderRadius: 3,
                bgcolor: 'rgba(15,23,42,0.9)',
                border: '1px solid rgba(30,64,175,0.5)',
              }}
            >
              <Typography variant="subtitle2" sx={{ color: 'blue.100', fontWeight: 700, mb: 0.75 }}>
                Гэртээ бие даан
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.100' }}>
                {data.situations.homeStudy.map((item, index) => (
                  <span key={index}>
                    • {item}
                    {index < data.situations.homeStudy.length - 1 && <br />}
                  </span>
                ))}
              </Typography>
            </Box>
          </Stack>

          {data.situations.illustration && (
            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: { md: 117 },
                mt: { xs: 1.5, md: 0 },
              }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  p: 1,
                  maxWidth: 117,
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={data.situations.illustration.src}
                  alt={data.situations.illustration.alt ?? data.mainType}
                  sx={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    maxHeight: isMobile ? 220 : 260,
                  }}
                />
              </Box>
            </Box>
          )}
        </Stack>
      ),
    },

    {
      label: 'Жишээ хэрэглээ',
      content: (
        <Box
          sx={{
            p: isMobile ? 2 : 2.5,
            borderRadius: 3,
            bgcolor: 'rgba(15,23,42,0.96)',
            border: '1px solid rgba(30,64,175,0.5)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
            <Box sx={{ flex: 1.8 }}>
              <Typography variant="subtitle1" sx={{ color: 'teal.100', fontWeight: 700, mb: 1.5 }}>
                Жишээ хэрэглээ
              </Typography>

              <Stack spacing={2.5}>
                {data.generalExamples.examples.map((ex, index) => (
                  <Box key={index}>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'emerald.200', fontWeight: 700, mb: 0.5 }}
                    >
                      {ex.topic}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'grey.100' }}>
                      {ex.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {data.generalExamples.illustration && (
              <Box
                sx={{
                  width: { xs: '100%', md: 'auto' },
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: { md: 117 },
                  mt: { xs: 1.5, md: 0 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'rgba(15,23,42,0.9)',
                    border: '1px solid rgba(56,189,248,0.25)',
                    p: 1,
                    maxWidth: 117,
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={data.generalExamples.illustration.src}
                    alt={data.generalExamples.illustration.alt ?? data.mainType}
                    sx={{
                      width: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      maxHeight: isMobile ? 220 : 260,
                    }}
                  />
                </Box>
              </Box>
            )}
          </Stack>
        </Box>
      ),
    },

    {
      label: 'Checklist / 7 хоног',
      content: (
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
          <Box
            sx={{
              mt: 1,
              p: isMobile ? 2 : 2.3,
              borderRadius: 3,
              bgcolor: 'rgba(15,118,110,0.22)',
              border: '1px dashed rgba(45,212,191,0.7)',
              flex: 1.8,
            }}
          >
            <Typography variant="subtitle2" sx={{ color: 'teal.100', fontWeight: 700, mb: 0.75 }}>
              Өнөөдрийн хийх зүйлсийн checklist
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.100' }}>
              {data.dailyChecklist.checklists.map((item, index) => (
                <span key={index}>
                  • {item}
                  {index < data.dailyChecklist.checklists.length - 1 && <br />}
                </span>
              ))}
            </Typography>
          </Box>

          {data.dailyChecklist.illustration && (
            <Box
              sx={{
                width: { xs: '100%', md: 'auto' },
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: { md: 117 },
                mt: { xs: 1.5, md: 0 },
              }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'rgba(15,23,42,0.9)',
                  border: '1px solid rgba(56,189,248,0.25)',
                  p: 1,
                  maxWidth: 117,
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={data.dailyChecklist.illustration.src}
                  alt={data.dailyChecklist.illustration.alt ?? data.mainType}
                  sx={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    maxHeight: isMobile ? 220 : 260,
                  }}
                />
              </Box>
            </Box>
          )}
        </Stack>
      ),
    },
  ];

  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 0.5,
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'grey.100',
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {data.mainType}
        </Typography>

        <Chip
          size="small"
          label={`Слайд ${activeStep + 1}/${maxSteps} · ${slides[activeStep].label}`}
          sx={{
            bgcolor: 'rgba(15,23,42,0.9)',
            borderRadius: 999,
            border: '1px solid rgba(148,163,184,0.5)',
            color: 'grey.200',
            fontSize: 11,
          }}
        />
      </Box>

      <Fade key={activeStep} in timeout={250}>
        <Box>{slides[activeStep].content}</Box>
      </Fade>

      <Divider sx={{ borderColor: 'rgba(148,163,184,0.3)', mt: 1.5 }} />

      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: 'rgba(15,23,42,0.7)',
          borderRadius: 999,
          px: 1.5,
          py: 0.75,
          border: '1px solid rgba(51,65,85,0.9)',
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
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            endIcon={theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          >
            {!isMobile && 'Дараах'}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            startIcon={theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          >
            {!isMobile && 'Өмнөх'}
          </Button>
        }
      />
    </Box>
  );
};
