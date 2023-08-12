
import { Box } from '@chakra-ui/react';
import './App.css';
import HolePage from './Pages/HolePage';
import Navbar from './Pages/Navbar';
import Particle from './Components/Particle';

function App() {
  return (
    <>
    <Particle/>
    <div>
    <Box  w="100%" >
      <Navbar  />
     <HolePage />
     <video autoPlay loop muted>
              <source src="" type="video/mp4" />
            </video>
    </Box>
    </div>
    </>
    
  );
}

export default App;
