import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { AuthProvider } from './contexts/AuthProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
