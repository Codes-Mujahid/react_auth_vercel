import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // BrowserRouter পরিবর্তে HashRouter
import { AppContextProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <AppContextProvider>
        <App/>
      </AppContextProvider>
    </HashRouter>
  </StrictMode>
)
