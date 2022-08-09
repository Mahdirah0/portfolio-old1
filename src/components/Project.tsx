import React from 'react';
import { IProjectData } from '../projectData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Project: React.FC<IProjectData> = ({
  name,
  url,
  img,
  tech,
  description,
  sourceCodeUrl,
}) => {
  return (
    <Grid item md={6} lg={6} xl={3} sm={12}>
      <Box
        sx={{
          border: '1px solid #E5E7E9',
          borderRadius: '15px',
          minWidth: '25%',
          minHeight: '460px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '8px 8px 5px #F2F3F4',
          overflow: 'hidden',
        }}
      >
        <Box>
          <Box>
            <img
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={name}
              style={{
                height: '250px',
                width: '100%',
                objectFit: 'fill',
              }}
            />
          </Box>
          <Box sx={{ marginLeft: '15px' }}>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography sx={{ maxWidth: '550px' }}>{description}</Typography>
          </Box>
        </Box>
        <Box sx={{ margin: '10px 15px' }}>
          <Box sx={{ display: 'flex', margin: '10px 0' }}>
            {tech.map((item: any, index: number) => (
              <Box
                key={index}
                sx={{
                  padding: '5px 10px',
                  textAlign: 'center',
                  marginRight: '5px',
                  marginTop: '10px',
                  backgroundColor: '#E5E7E9',
                  borderRadius: '2px',
                }}
              >
                <Typography
                  sx={{ color: 'black' }}
                  variant='body2'
                  color='text.secondary'
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Button size='small' sx={{ marginLeft: '-5px' }}>
            <Link underline='none' href={sourceCodeUrl}>
              Source Code
            </Link>
          </Button>
          <Button size='small'>
            <Link underline='none' href={url}>
              Website
            </Link>
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Project;
