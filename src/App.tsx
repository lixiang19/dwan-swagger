import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style';
import routes from './routes';
import './App.global.css';
import theme from './assets/theme';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{renderRoutes(routes)}</ThemeProvider>
    </HashRouter>
  );
}
export default App;
