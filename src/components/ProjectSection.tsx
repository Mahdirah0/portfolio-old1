import { ProjectData, IProjectData } from '../projectData';
import Project from './Project';
import { Container, Box, Grid, Card, Typography } from '@mui/material';

//
// sx={{
//   display: 'flex',
//   flexWrap: 'wrap',
//   width: 600,
//   minHeight: 1000,
//   p: 1,
//   m: 1,
// }}

const ProjectSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 40px',
        }}
      >
        <Typography
          sx={{ margin: '20px 0 40px 0' }}
          variant='h4'
          component='h4'
        >
          Project Showcase
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '100%',
          }}
        >
          {ProjectData.map((item: IProjectData) => (
            <Project
              name={item.name}
              url={item.url}
              img={item.img}
              tech={item.tech}
              description={item.description}
              sourceCodeUrl={item.sourceCodeUrl}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectSection;
