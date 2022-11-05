import React from 'react';
import ReactDOM from 'react-dom/client';
import MyButton from './Ex/Ex0/MyButton';
import MySection from './Ex/Ex0/MySection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MySection>
    <MyButton>My button text</MyButton>
  </MySection>

);
