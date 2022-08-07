import React from 'react';
import { IProjectData } from '../projectData';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Project: React.FC<IProjectData> = ({
  name,
  url,
  img,
  tech,
  description,
  sourceCodeUrl,
}) => {
  return (
    <Card sx={{ width: '25%' }}>
      <CardMedia
        component='img'
        height='250'
        image={`${process.env.PUBLIC_URL}/images/${img}`}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography sx={{ maxWidth: 350 }}>{description}</Typography>
        <Box sx={{ display: 'flex' }}>
          {tech.map((item) => (
            <Typography
              sx={{ margin: '5px 5px 0 0' }}
              variant='body2'
              color='text.secondary'
            >
              {item}
            </Typography>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size='small'>
          <Link underline='none' href={sourceCodeUrl}>
            Source Code
          </Link>
        </Button>
        <Button size='small'>
          <Link underline='none' href={url}>
            Website
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
