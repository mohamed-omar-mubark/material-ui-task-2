import React from 'react';
import HomeSection from './components/HomeSection';
import { CssBaseline, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <HomeSection />
      </Container>
    </div>
  );
};

export default App;