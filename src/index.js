import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App/App';
import Loading from './components/Loading/Loading';
import './i18next';
import './stylesheet/main.css';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
);
