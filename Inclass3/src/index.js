import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyButton from './Ex/Ex0/MyButton';
import MySection from './Ex/Ex0/MySection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
    <p>Ex0.3</p>
    <MySection>
    <MyButton>My button text</MyButton>
  </MySection>
  </React.StrictMode>

);
