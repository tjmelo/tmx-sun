import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import Client from './Client.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <BrowserRouter>
      <Client />
    </BrowserRouter>
  </StrictMode>,
)
