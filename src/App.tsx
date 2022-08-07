import { Box } from '@mui/material';
import About from './components/About';
import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
import Hero from './components/Hero';

// backgroundColor: '#1C1C1B',

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <ProjectSection />
    </Box>
  );
}

export default App;
