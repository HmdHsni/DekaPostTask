import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Todos } from './Components/Todos';
import './i18n';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Router>
  //   <App />
  //   <Routes>
  //          <Route path="/todos" element={<Todos />} />
          
  //        </Routes>
  // </Router>
  <React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>
  
);
reportWebVitals();
