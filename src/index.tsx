// STYLES
import './index.css';
// TRANSLATION
import './i18n';

// COMPONENTS
import App from './App';
// CONTEXT
import { FormDataProvider } from 'context/FormDataContext';
// REACT
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
