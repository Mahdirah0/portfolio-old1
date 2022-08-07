import { Box, Link, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
      }}
    >
      <Typography
        sx={{ border: '2.5px solid black', padding: '5px' }}
        fontSize='30px'
        variant='h2'
        component='div'
      >
        MR
      </Typography>
      <Box component='nav'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyle: 'none',
            width: '350px',
          }}
          component='ul'
        >
          <li style={{ fontSize: '20px' }}>
            <Link href='#' underline='none' color='inherit'>
              Home
            </Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href='#about' underline='none' color='inherit'>
              About Me
            </Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href='#' underline='none' color='inherit'>
              Projects
            </Link>
          </li>
          <li style={{ fontSize: '20px' }}>
            <Link href='#' underline='none' color='inherit'>
              Contact
            </Link>
          </li>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
