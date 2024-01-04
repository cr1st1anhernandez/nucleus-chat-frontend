import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import DocumentationPage from '../pages/DocumentationPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import Nav from './Nav'

export default function App() {
  return (
    <BrowserRouter>
      <section className="min-h-screen bg-indigo-50 indigo-light dark:bg-[#000] dark:indigo-dark">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
