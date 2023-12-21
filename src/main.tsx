import { Auth0Provider } from '@auth0/auth0-react'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat'
import Home from './components/Home'
import Nav from './components/Nav'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <section className="indigo-light dark:indigo-dark min-h-screen bg-indigo-50 dark:bg-[#000]">
        <Auth0Provider
          domain="dev-6b65ys4qlr8h2eoi.us.auth0.com"
          clientId="aobfHy2Yy6reQIHLbvEfRA2UR2qvsGzL"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </Auth0Provider>
      </section>
    </NextUIProvider>
  </React.StrictMode>,
)
