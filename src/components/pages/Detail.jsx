import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router'
import {Datacontext} from '../../../Context/context.jsx'
import axios from 'axios'
import Loading from '../Laoding.jsx'
import Error from '../Error.jsx'


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
    <section className='w-full h-full flex flex-col items-center justify-center gap-y-8     p-0'>
      <h1 className='text-4xl text-center w-[715px]  font-semibold font-sans-work leading-10'>
      Discover the Secrets of Rick Sanchez
      from the Rick and Morty Universe!" 🧬🚀
      </h1>
      <div className='w-full  flex items-center justify-center  min-h-[528px]  h-[528px]  ' >
        {isLoading? (
            <div className='text-center w-full 0'><Loading/></div>
          ) : error? (
            <div className='text-center w-full '>
              <Error />
            </div>
        ) : (
          <div className=' bg-white shadow-2xl  rounded-[15.46px] w-[1017px] max-w-[1017px] p-[20.61px]  border-[1.29px] h-full flex items-center gap-[20.61px] '>
          <div className='w-[463.78px] min-h-[463.78px] h-[463.78px] rounded-[7.73px]'>
          <img src={info.image} alt={info.name} className='w-full h-full object-fill' />
          </div>
          <div className='w-[463.78px] min-h-[463.78px] h-[463.78px] flex flex-col items-center gap-8 py-8'>
            <h2 className='text-3xl  text-[#017034] font-normal text-[50px] font-Jim'>{info.name}</h2>
            <div className='w-[403px] min-h-[322px] text-base font-semibold font-Inter   '>
            <ul className='list-disc text-base p-10 py-8 '>
            <li>Status: {info.status}</li>
            <li>Species: {info.species}</li>
            <li>Gender: {info.gender}</li>
            </ul>
            <p className='w-[80%] text-base font-semibold leading-6 '>
              <span className='text-[#017034]'>{info.name}</span> is a <span className='text-[#017034]'>{info.gander} {info.species}</span> who is currently <span className='text-[#017034]'>{info.status}</span>. He remains a core figure in the <span className='text-[#017034]'>{info.species}</span> species
            </p>

            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Details