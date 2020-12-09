// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// STYLES
import './index.css';

// COMPONENTS
import App from './App';

// CONTEXT
import { FormDataProvider } from 'context/FormDataContext';

// TRANSLATION
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
