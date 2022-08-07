import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0',
        minHeight: '400px',
      }}
      id='about'
    >
      <Typography variant='h4' component='h4'>
        About Me
      </Typography>
      <Typography variant='subtitle1' component='p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque
        officia ipsum, facilis hic provident ab consequatur quis a? Vero maxime
        illo ab veritatis perferendis est esse exercitationem sint omnis.
      </Typography>
    </Box>
  );
};

export default About;
