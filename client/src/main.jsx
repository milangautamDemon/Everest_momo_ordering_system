import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import MapProvider from './provider/MapProvider.jsx';
import ErrorBoundary from './error/ErrorBoundary.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary >
      <MapProvider>
          <App />
      </MapProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
