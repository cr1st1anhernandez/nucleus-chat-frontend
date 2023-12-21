import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth0ProviderWithNavigate } from './components/AuthProviderWithNavigate'
import { AuthenticationGuard } from './components/AuthenticationGuard'
import CallbackPage from './components/CallbackPage'
import Chat from './components/Chat'
import Documentation from './components/Documentation'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Nav from './components/Nav'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <section className="min-h-screen bg-indigo-50 indigo-light dark:bg-[#000] dark:indigo-dark">
            <Nav />
            <Routes>
              <Route path="/callback" element={<CallbackPage />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/chat"
                element={<AuthenticationGuard component={Chat} />}
              />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
