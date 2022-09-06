import React from 'react';

// 'client' addition  changed in recent React update v18
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

// Grab html doc by root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render App component
root.render(<App />)
