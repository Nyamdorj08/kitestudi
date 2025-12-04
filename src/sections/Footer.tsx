import { Box, Stack, Typography, IconButton, Link, Container } from '@mui/material';
import { FacebookIcon, InstagramIcon } from 'src/assets/icons';

export const FooterView = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={6} textAlign="center" mx="auto">
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          STUDII тест нь та харах, сонсох зэрэг танин мэдэхүйн аль чадвараа илүү сайн ашиглаж
          сурдгийг тодорхойлдог бөгөөд тухайн хэв маягаа хэрхэн сайжруулах, ямар нөхцөлд яаж ашиглах
          болон юун дээр анхаарах вэ гэсэн цогц зөвлөмж өгдөг.
        </Typography> */}

        <Stack direction="row" spacing={2} justifyContent="center" mt={1.5}>
          <IconButton target="_blank" href="https://www.facebook.com/profile.php?id=61584663269654">
            <FacebookIcon sx={{ color: 'text.secondary' }} />
          </IconButton>
          <IconButton target="_blank" href="https://instagram.com/studii.mn">
            <InstagramIcon sx={{ color: 'text.secondary' }} />
          </IconButton>
        </Stack>

        {/* === New Support Link === */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 2,
            color: 'primary.light',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <Link
            href="/helper" // Messenger support link (change if needed)
            target="_blank"
            underline="none"
            sx={{ color: 'inherit', fontSize: '0.75rem' }}
          >
            Хариугаа харж чадаагүй бол энд дарна уу
          </Link>
        </Typography>

        <Typography sx={{ color: 'text.secondary' }} variant="caption" mt={1.5} display="block">
          © 2025 STUDII.MN — <strong>STUDII MONGOLIA</strong>
        </Typography>
      </Box>
    </Container>
  );
};
