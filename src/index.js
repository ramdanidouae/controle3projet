import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App';
import AddTask from './components/AddTask';
import './index.css';
import react from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AddTask></AddTask>
  </React.StrictMode>
);