import { ThemeProvider } from '@emotion/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { GlobalStyles, Theme } from './styles';
import { Routes } from './routing/Routes';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <ParallaxProvider>
        <GlobalStyles />
        <Routes />
      </ParallaxProvider>
    </ThemeProvider>
  );
};

export default App;
