import { Box } from '@mui/material';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

export default function App() {
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </Box>
  );
}
