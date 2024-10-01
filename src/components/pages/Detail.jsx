import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router'
import {Datacontext} from '../../../Context/context.jsx'
import axios from 'axios'
const Details = () => {
  const {error, setError, setIsLoading, isLoading } = useContext(Datacontext)
  const {id} = useParams()
  const [info, setInfo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('')
        setIsLoading(true);
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        // console.log(response);
        setIsLoading(false);
        setInfo(data);
        console.log(data)
      } catch (e) {
        setIsLoading(false);
        setError(e.message);
      }
    };

    fetchData();
  }, [id]); // Added id as a dependency

  return (
    <section className='w-full h-full flex flex-col items-center gap-8  '>
      <h1 className='text-4xl text-center max-w-[639px]  font-semibold'>
      Discover the Secrets of Rick Sanchez
      from the Rick and Morty Universe!" 🧬🚀
      </h1>
      <div className='w-full  flex items-center  min-h-[528px] p-[20.61px] gap-x-[20.61]' >
        {isLoading? (
          <div className='text-center'>Loading...</div>
        ) : error? (
          <div className='text-center'>An error occurred: {error}</div>
        ) : (
          <>
          <img src={info.image} alt={info.name} className='w-[300px] h-[300px] object-cover' />
            <h2 className='text-3xl font-bold'>{info.name}</h2>
          <div>
            <p>Status: {info.status}</p>
            <p>Species: {info.species}</p>
            <p>Gender: {info.gender}</p>
          </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Details