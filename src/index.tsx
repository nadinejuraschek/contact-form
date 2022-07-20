// STYLES
import './index.css';
// TRANSLATION
import './i18n';

// COMPONENTS
import App from './App';
// REACT
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
