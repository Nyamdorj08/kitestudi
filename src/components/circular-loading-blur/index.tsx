import { Box, CircularProgress } from '@mui/material';

export const CircularLoadingBlur = ({ loading }: { loading?: boolean }) => {
  if (loading) {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return null;
};
