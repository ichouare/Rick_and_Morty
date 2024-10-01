import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ContextProvider from '../Context/context.jsx'




// const RootLayout = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements( 
//     //  <Route errorElement={<ErrorPage />}>
//     <Route path="/" element={<Navbar />} >
//      <Route index  element={<Home />} />
//      <Route path='product/:id' element={<InfoProduct />} />
//    </Route >
//    )
//    )
 
//   return (
//     <>
//     <Navbar/>
//      <RouterProvider router={router} />
//     <App />
//     <Footer/>
//     </>
//   )
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)
