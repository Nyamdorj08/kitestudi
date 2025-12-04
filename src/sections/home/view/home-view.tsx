'use client';

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  LinearProgress,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Fade,
  Stack,
} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { CircularLoadingBlur } from 'src/components/circular-loading-blur';
import { StudiiService } from 'src/services';
import { questions } from 'src/utils/constants';
import { getErrorMessage } from 'src/utils/error-message';
import { eventview, pageview } from 'src/utils/fpixel';
import { hasCommonEmailTypo, isValidEmail } from 'src/utils/validators';
import { FooterView } from 'src/sections/Footer';

export const HomeView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const qs = useSearchParams();

  const [stage, setStage] = useState<'start' | 'quiz' | 'email'>('start');
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [customAnswer, setCustomAnswer] = useState('');
  const [email, setEmail] = useState('');
  const [fadeIn, setFadeIn] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [confirmEmailDialog, setConfirmEmailDialog] = useState(false);
  const [showWhy, setShowWhy] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedValue = answers[currentIndex];
  const isCustomSelected =
    selectedValue !== null &&
    !currentQuestion.options.find((option) => option.value === selectedValue);

  useEffect(() => {
    if (stage === 'start') {
      pageview();
    } else if (stage === 'quiz') {
      eventview('ViewContent');
    } else if (stage === 'email') {
      eventview('Lead');
    }
  }, [stage]);

  const handleEmailConfirm = () => {
    if (!isValidEmail(email)) {
      toast.error('И-мэйл хаяг буруу байна');
      return;
    }

    const suggestion = hasCommonEmailTypo(email);
    if (suggestion) {
      toast.warning(`⚠️ Та @${suggestion} гэж бичих гэж байв уу? И-мэйлээ дахин шалгана уу.`);
    } else {
      setConfirmEmailDialog(true);
    }
  };

  const handleFinalSubmit = async () => {
    setConfirmEmailDialog(false);
    setLoading(true);
    const fbclid = qs.get('fbclid') || undefined;

    try {
      const response = await StudiiService().answers({ email, answers, fbclid });
      router.push(`/${response.data._id}`);
    } catch (error) {
      const feedbackmessage = getErrorMessage(error);
      toast.error(feedbackmessage);
      setLoading(false);
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updated = [...answers];
    updated[currentIndex] = parseInt(value);
    setAnswers(updated);
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAnswer(value);
    const updated = [...answers];
    updated[currentIndex] = parseInt(value);
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setCustomAnswer('');
        setFadeIn(true);
      }, 200);
    } else {
      setStage('email');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setCustomAnswer('');
        setFadeIn(true);
      }, 200);
    }
  };

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          py: 6,
          background: 'radial-gradient(circle at top, #1e293b 0, #020617 45%, #020617 100%)',
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularLoadingBlur loading={loading} />

        <Paper
          sx={{
            width: '100%',
            maxWidth: 720,
            p: isMobile ? 3 : 4,
            borderRadius: 4,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(129,230,217,0.35)',
            background: 'linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.98))',
            boxShadow: '0 0 40px 6px rgba(56,189,248,0.20)',
          }}
        >
          {/* START STAGE */}
          {stage === 'start' && (
            <Fade in>
              <Box textAlign="center">
                <Stack spacing={2.5} alignItems="center">
                  <Box
                    sx={{
                      width: { xs: 150, md: 180 },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
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

                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      sx={{
                        mb: 1.5,
                        color: 'text.primary',
                      }}
                    >
                      Чиний суралцах системийг задлан шинжилнэ
                    </Typography>
                    <Typography variant="body1" fontSize="0.97rem" sx={{ color: 'text.secondary' }}>
                      Чи ямар үед хамгийн хурдан, гүн, удаан мартахгүйгээр сурдаг вэ?
                      <br />
                      <strong>
                        Бодол, зуршил, цагийн менежмент чинь суралцах чадварыг хаана нь гацааж
                        байгааг ил гаргаж өгнө.
                      </strong>
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setStage('quiz')}
                    sx={{
                      px: 6,
                      py: 1.4,
                      borderRadius: 999,
                      fontSize: '1.02rem',
                      background: 'linear-gradient(90deg, #0f766e, #2563eb, #22c55e)',
                      fontWeight: 700,
                      boxShadow: '0 0 22px rgba(34,197,94,0.45)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #0f766e, #1d4ed8, #4ade80)',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 0 30px rgba(52,211,153,0.7)',
                      },
                      transition: 'all 0.16s ease-in-out',
                    }}
                  >
                    Тест эхлүүлэх
                  </Button>

                  <Stack
                    direction={isMobile ? 'column' : 'row'}
                    spacing={1.2}
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 1 }}
                  >
                    <Button
                      variant="text"
                      onClick={() => setShowWhy(true)}
                      sx={{
                        fontWeight: 500,
                        color: 'text.secondary',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      💡 Яагаад энэ тест хэрэгтэй вэ?
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Fade>
          )}

          {/* QUIZ STAGE */}
          {stage === 'quiz' && (
            <Box sx={{ maxWidth: 560, mx: 'auto' }}>
              <Stack spacing={2.5}>
                <Box
                  sx={{
                    width: { xs: 140, md: 160 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mx: 'auto',
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

                <Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={0.5}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: 'grey.300', fontSize: '0.8rem', fontWeight: 500 }}
                    >
                      Асуулт {currentIndex + 1} / {questions.length}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
                    >
                      {progressPercent - 5}% бөглөсөн
                    </Typography>
                  </Stack>

                  <LinearProgress
                    variant="determinate"
                    value={progressPercent}
                    sx={{
                      mb: 1.3,
                      height: 7,
                      borderRadius: 999,
                      backgroundColor: 'rgba(15,23,42,0.9)',
                      overflow: 'hidden',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(90deg, #22c55e, #38bdf8, #6366f1)',
                      },
                    }}
                  />
                </Box>

                <Fade in={fadeIn} timeout={250} key={currentIndex}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      p: { xs: 1.8, md: 2.4 },
                      bgcolor: 'rgba(15,23,42,0.96)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 60%)',
                        pointerEvents: 'none',
                      }}
                    />

                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          color: 'text.primary',
                          mb: 1,
                          fontSize: { xs: '1.05rem', md: '1.15rem' },
                        }}
                      >
                        {currentQuestion.question}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontStyle: 'italic',
                          fontSize: '0.85rem',
                          mb: 2.4,
                        }}
                      >
                        ☑️ Таны бодит байдалд хамгийн ойр тохирох хувилбарыг сонгоорой.
                      </Typography>

                      <RadioGroup
                        value={isCustomSelected ? 'custom' : selectedValue || ''}
                        onChange={handleOptionChange}
                      >
                        <Stack spacing={1}>
                          {currentQuestion.options.map((opt, idx) => {
                            const isSelected = !isCustomSelected && selectedValue === opt.value;

                            return (
                              <FormControlLabel
                                key={idx}
                                value={opt.value}
                                label={
                                  <Box
                                    sx={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: 0.25,
                                    }}
                                  >
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: 'grey.100',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.5,
                                      }}
                                    >
                                      {opt.label}
                                    </Typography>
                                    {isSelected && (
                                      <Typography
                                        variant="caption"
                                        sx={{
                                          fontSize: '0.7rem',
                                          color: '#22c55e',
                                        }}
                                      >
                                        ✔ Одоогоор сонгосон
                                      </Typography>
                                    )}
                                  </Box>
                                }
                                control={
                                  <Radio
                                    sx={{
                                      color: 'rgba(148,163,184,0.9)',
                                      '&.Mui-checked': {
                                        color: '#38bdf8',
                                      },
                                    }}
                                  />
                                }
                                sx={{
                                  position: 'relative',
                                  alignItems: 'center',
                                  m: 0,
                                  borderRadius: 2,
                                  px: 1.6,
                                  py: 0.9,
                                  pl: 2.3,
                                  minHeight: 0,
                                  overflow: 'hidden',
                                  bgcolor: isSelected
                                    ? 'rgba(15,23,42,0.98)'
                                    : 'rgba(15,23,42,0.9)',
                                  transition:
                                    'background-color 0.16s ease, transform 0.12s ease, box-shadow 0.16s ease',
                                  boxShadow: isSelected ? '0 10px 24px rgba(15,23,42,0.9)' : 'none',
                                  transform: isSelected ? 'translateY(-1px)' : 'none',
                                  '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 10,
                                    top: 9,
                                    bottom: 9,
                                    width: 2,
                                    borderRadius: 999,
                                    background: isSelected
                                      ? 'linear-gradient(180deg, #22c55e, #38bdf8)'
                                      : 'rgba(51,65,85,0.9)',
                                  },
                                  '&:hover': {
                                    bgcolor: 'rgba(15,23,42,1)',
                                  },
                                }}
                              />
                            );
                          })}
                        </Stack>
                      </RadioGroup>

                      <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
                        <Button
                          onClick={handleBack}
                          disabled={currentIndex === 0}
                          sx={{
                            color: 'text.secondary',
                            textTransform: 'none',
                            fontSize: '0.85rem',
                            px: 1.5,
                            minWidth: 0,
                          }}
                        >
                          Өмнөх
                        </Button>

                        <Button
                          variant="contained"
                          onClick={handleNext}
                          disabled={!answers[currentIndex] || answers[currentIndex] === 0}
                          sx={{
                            px: 4,
                            py: 1,
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
                          {currentIndex < questions.length - 1 ? 'Дараах' : 'Дуусгах'}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Fade>
              </Stack>
            </Box>
          )}

          {/* EMAIL STAGE */}
          {stage === 'email' && (
            <Fade in>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: 'text.primary', mb: 1.5 }}
                >
                  🎉 Үр дүн бэлэн боллоо!
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                  Таны <strong>суралцах хэв маяг, анхаарал, цагийн менежмент, төвлөрөл</strong> ямар
                  алдаанаас болж алдагддаг, юуг өөрчлөхөд хамгийн их нөлөө үзүүлэхийг нарийвчлан
                  дүгнээд и-мэйлээр илгээнэ.
                  <br />
                  Дүгнэлт нь хувийн бөгөөд зөвхөн та харах боломжтой.
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Таны и-мэйл"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={email.length > 0 && !isValidEmail(email)}
                  helperText={
                    email.length > 0 && !isValidEmail(email) ? 'И-мэйл хаяг буруу байна' : ' '
                  }
                  sx={{
                    mt: 1,
                    '& .MuiInputBase-root': {
                      bgcolor: '#020617',
                      color: 'text.primary',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  onClick={handleEmailConfirm}
                  disabled={!isValidEmail(email)}
                  sx={{
                    mt: 3,
                    mb: 1,
                    width: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #0f766e, #2563eb, #22c55e)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #0f766e, #1d4ed8, #4ade80)',
                    },
                  }}
                >
                  Дүгнэлтээ и-мэйлээр авах
                </Button>
                <Typography
                  variant="caption"
                  sx={{ mt: 1, display: 'block', color: 'text.secondary' }}
                >
                  🛡️ Таны и-мэйл зөвхөн дүгнэлт илгээхэд ашиглагдана. Бусад зорилгоор хадгалах,
                  сурталчилгаа илгээхгүй.
                </Typography>
              </Box>
            </Fade>
          )}
        </Paper>

        {/* Preview dialog */}
        <Dialog open={showPreview} onClose={() => setShowPreview(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Жишээ дүгнэлт</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Доорх дүгнэлт нь жишээ хариултууд дээр тулгуурласан бөгөөд AI болон суралцах
              сэтгэлзүйн загварчлал ашиглан боловсруулагдсан болно.
            </Typography>
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                p: 2,
                whiteSpace: 'pre-line',
                fontSize: '0.95rem',
                borderLeft: `4px solid ${theme.palette.primary.light}`,
              }}
            >
              1. Таны суралцах зан төлөвийн онцлог
              <br />
              Хариултуудаас харахад та суралцахдаа ихэвчлэн гадны дарамт, хугацааны шахалтаар
              хөдөлдөг. Өөрөө сонирхоод эхлүүлэхээс илүү “хийхээс өөр аргагүй” үед төвлөрөл чинь
              огцом нэмэгддэг. Энэ нь богино хугацаанд үр дүн гаргах боломж олгодог ч урт хугацааны
              тогтвортой дадал үүсэхэд саад болж байна.
              <br />
              <br />
              2. Анхаарал, төвлөрлийн хэв маяг
              <br />
              Та нэгэн зэрэг олон зүйл бодох хандлагатай, үүгээрээ өөрийгөө дэмий ядаргаанд
              оруулдаг. Энгийн, жижиг task-уудыг хойшлуулж, эцэст нь бөөгнөрүүлэн хийдэг тул
              суралцах процесс урамгүй, ядраасан мэдрэмжтэй болдог. Мөн та “төгс эхлэх” гэсэн
              хүлээлтээс болж эхний алхмаа дутуу хийж, өөрийгөө шүүмжилдэг.
              <br />
              <br />
              3. Өөрчлөлтийн боломж ба практик алхам
              <br />
              Та суралцах системээ зөв тавьбал хурдан дасан зохицдог төрлийн хүн. 25–40 минутын
              богино төвлөрлийн блок, дүрэмтэй амралт, жижиг ахицуудаа тэмдэглэж харах систем
              нэвтрүүлснээр таны гүйцэтгэл эрс сайжирна. Таны зорилго бол “их сургах” биш, харин
              “тогтмол баг багаар ахих”-ыг систем болгох явдал.
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowPreview(false)}>Хаах</Button>
          </DialogActions>
        </Dialog>

        {/* Why dialog */}
        <Dialog open={showWhy} onClose={() => setShowWhy(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Яагаад энэ тест хэрэгтэй вэ?</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              Ихэнх хүмүүс “хичээлээ сайн давтах ёстой” гэж боддог ч{' '}
              <strong>юу нь яг алдаатай</strong> байгаагаа мэддэггүй. Таны сурдаггүй шалтгаан
              ихэнхдээ тархи, анхаарал, зуршлын системтэй холбоотой байдаг.
            </Typography>
            <ul>
              <li>📌 Аль үед, ямар орчинд та хамгийн сайн сурдгаа тодорхой харна</li>
              <li>
                ⏰ Хойш тавьдаг зуршил, төвлөрөл сарнидаг мөчүүдийн үндсэн шалтгааныг олж харна
              </li>
              <li>🧠 “Илүү их биш, илүү ухаалгаар сурах” хувийн стратеги гаргах суурь болно</li>
            </ul>
            <Typography variant="body2" color="text.secondary">
              Энэ бол ганц удаа бөглөх тест. Гэхдээ үр дүн нь таны дараагийн олон жилийн суралцах
              систем, ажлын хэв маягт нөлөөлөх боломжтой.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowWhy(false)}>Хаах</Button>
          </DialogActions>
        </Dialog>

        {/* Confirm email dialog */}
        <Dialog open={confirmEmailDialog} onClose={() => setConfirmEmailDialog(false)}>
          <DialogTitle>И-мэйл хаяг зөв үү?</DialogTitle>
          <DialogContent>
            <Typography variant="body1" gutterBottom>
              Та <strong>{email}</strong> хаяг руу дүгнэлтээ илгээх гэж байна.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Энэ и-мэйл хаяг зөв эсэхийг шалгаарай.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmEmailDialog(false)}>Буцах</Button>
            <Button variant="contained" onClick={handleFinalSubmit}>
              Зөв, илгээх
            </Button>
          </DialogActions>
        </Dialog>

        <FooterView />
      </Box>
    </>
  );
};
