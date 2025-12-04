import { Box, Stack, Typography, IconButton } from '@mui/material';
import { FacebookIcon, InstagramIcon } from 'src/assets/icons';

export const FooterView = () => {
  return (
    <Box mt={6} textAlign="center" maxWidth={640}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        STUDII тест нь таны суралцах хэв маяг, анхаарал, цагийн менежмент, хойш тавих зуршил,
        сэтгэлгээний хэв маягийг тодорхойлох зорилготой. Үр дүн нь зөвлөгөө, оношлогоо биш бөгөөд
        таны өөрийгөө илүү сайн ойлгоход чиглэсэн аналитик ойлголт өгөх зорилготой юм.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={1.5}>
        <IconButton target="_blank" href="https://www.facebook.com/profile.php?id=61584663269654">
          <FacebookIcon sx={{ color: 'text.secondary' }} />
        </IconButton>
        <IconButton target="_blank" href="https://instagram.com/studii.mn">
          <InstagramIcon sx={{ color: 'text.secondary' }} />
        </IconButton>
      </Stack>
      <Typography sx={{ color: 'text.secondary' }} variant="caption" mt={2} display="block">
        © 2025 STUDII.MN — <strong>STUDII MONGOLIA</strong>
      </Typography>
    </Box>
  );
};
