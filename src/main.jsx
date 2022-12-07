import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ExamenApp } from '../ExamenApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExamenApp />
    </BrowserRouter>
  </React.StrictMode>
)
