import { useState, useEffect, useContext } from 'react'
import './App.css'
import axios from 'axios'


import {Datacontext} from '../Context/context.jsx'
import  Home from './components/pages/Home.jsx'
import  Details from './components/pages/Detail.jsx'
import Navbar from './components/Navbar.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Route , Routes, createRoutesFromElements } from 'react-router';

function App() {
  const {isLoading, setIsLoading, setData, setError, name, gender, species, status, page, setTotal} = useContext(Datacontext)

  useEffect(  () => {
  const fetchData = async () => {
    try{
      setError('')
      setIsLoading(true)
      const {data} = await axios(
        'https://rickandmortyapi.com/api/character', {
          params: {
            name: name ,
            gender: gender,
            species: species,
            status: status,
            page: page,
          }
        }
      )
      setData(data.results)
      setTotal(data.info.pages)
      setIsLoading(false)
    }catch(e) {
      setIsLoading(false)
      setError(e.message)
    }

  }
  fetchData()
  }, [name, gender, species, status, page])

  const router = createBrowserRouter(
    createRoutesFromElements( 
    <Route path="/" element={<Navbar />} >
     <Route index  element={<Home />} />
     <Route path='/:id' element={<Details />} />
   </Route >
   )
   )

  return (
    <main className=' font-sans-work min-w-full min-h-screen h-auto bg-white flex  gap-16 flex-col items-center  text-black'>
        <RouterProvider router={router} />
     
      

      
    </main>
  )
}

export default App
