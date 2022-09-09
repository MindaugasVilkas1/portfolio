import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n'
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(<div sx={{ marginTop: '250px', marginBottom: '250px', textAlign: 'center' }}>
    <h1 >Loading...</h1>
  </div>)} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Suspense>
);


