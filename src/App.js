import { Container, ThemeProvider } from '@material-ui/core';
import React from 'react';
import TopNav from './components/organisms/TopNav/TopNav.js';

import theme from './components/theme.js';



const App = () => {
    return (
      <ThemeProvider theme={theme}>
          <Container maxWidth='md'>
            <TopNav />
          </Container>
      </ThemeProvider>
      );
};

export default App;
