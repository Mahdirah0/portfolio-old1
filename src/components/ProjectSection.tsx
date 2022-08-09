import { ProjectData, IProjectData } from '../projectData';
import Project from './Project';
import { Box, Grid, Typography } from '@mui/material';

const ProjectSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px 40px',
          paddingBottom: '50px',
        }}
      >
        <Typography
          sx={{ margin: '20px 0 40px 0' }}
          variant='h4'
          component='h4'
        >
          Project Showcase
        </Typography>
        <Grid container spacing={6}>
          {ProjectData.map((item: IProjectData, index: number) => (
            <Project
              key={index}
              name={item.name}
              url={item.url}
              img={item.img}
              tech={item.tech}
              description={item.description}
              sourceCodeUrl={item.sourceCodeUrl}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectSection;
