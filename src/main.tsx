import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import Router from './Router.tsx';

createRoot(document.getElementById('host')!).render(
  <StrictMode>
    <BrowserRouter>
        <section className="container">
            <div className="row">
                <div className="col-md-2">
                    <App />
                </div>
                <div className="col-md-10">
                    <Router />
                </div>
            </div>
        </section>
    </BrowserRouter>
  </StrictMode>,
)
