import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n'
import './index.css';
import App from './App';
import { Typography, Box } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={( <Box sx={{marginTop: '250px', marginBottom: '250px',textAlign: 'center'}}>
  <Typography variant="h3">Loading...</Typography>
</Box>)} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);


