import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import {theme} from './theme';
import { ThemeApp } from 'styled-components';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeApp theme={theme}>
    <App />
    </ThemeApp>
  </React.StrictMode>
);