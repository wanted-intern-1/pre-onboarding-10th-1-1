import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

import Router from './routes/router';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;
