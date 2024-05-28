import React from 'react';
import ReactDOM from 'react-dom/client';
import { AplicacionClima } from './pages/AplicacionClima';
import './styles/main.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='div-gral'>
      <AplicacionClima />
    </div>
  </React.StrictMode>,
)
