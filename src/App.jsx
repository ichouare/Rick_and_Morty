import { useState, useEffect, useContext } from 'react'
import './App.css'
import axios from 'axios'

import Banner from './components/Banner.jsx'
import Content from './components/Content.jsx';
import Filter from './components/Filter.jsx';
import {Datacontext} from '../Context.js/context.jsx'
import Paginnation from './components/paginnation.jsx';


function App() {
  const {isLoading, setIsLoading, setData, setError, name, gender, species, status, page, setTotal} = useContext(Datacontext)

  useEffect(  () => {
  const fetchData = async () => {
    try{
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

  return (
    <main className=' font-sans-work min-w-full min-h-screen h-auto bg-white flex  gap-16 flex-col items-center  text-black  px-8'>
      <Banner />
      <Filter/>
      <Content />
      <Paginnation/>
      

      
    </main>
  )
}

export default App
