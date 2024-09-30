import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ContextProvider from '../Context.js/context.jsx'




const Layout = () => {
  return (
    <>
    <Navbar/>
    <App />
    <Footer/>
    </>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <Layout />
    </ContextProvider>
  </StrictMode>,
)
