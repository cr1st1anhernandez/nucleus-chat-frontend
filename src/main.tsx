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
      <section className="indigo-light dark:indigo-dark min-h-screen bg-indigo-50 dark:bg-zinc-900">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </section>
    </NextUIProvider>
  </React.StrictMode>,
)
