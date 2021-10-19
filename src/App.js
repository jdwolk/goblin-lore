import { ThemeProvider } from '@emotion/react';

import { GlobalStyles, Theme } from './styles';
import { Routes } from './routing/Routes';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
