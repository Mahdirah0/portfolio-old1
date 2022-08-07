import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: '',
        justifyContent: 'center',
        backgroundColor: '#F4F6F6',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/heroImage0.jpg)`,
        backgroundSize: 'contain',
      }}
    >
      <Box
        sx={{
          margin: '0 60px',
        }}
      >
        <Typography gutterBottom variant='h5' component='h5'>
          Hello! I am
        </Typography>
        <Typography gutterBottom variant='h2'>
          Mahdi Rahman
        </Typography>
        <Typography gutterBottom variant='h4'>
          A Developer based in London
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
