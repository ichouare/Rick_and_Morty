import React, {useContext, useS} from 'react'
import {Datacontext}  from '../../Context/context'
import Cart from './cart';
import Loading from './Laoding.jsx';
import Error from './Error.jsx';



const Content = () => {
    const {data, isLoading, error, name, setName} =  useContext(Datacontext)
  return (
    <section className='  flex flex-col items-center justify-center gap-16 p-4 '>
                <h1 className='text-4xl text-center max-w-[639px]  font-semibold'>Meet the Wildest Characters 
from the Rick and Morty Multiverse!</h1>
     
        <section className='w-full min-h-full h-auto flex items-center  gap-8 flex-wrap justify-center xl:justify-start 2xl:justify-center    xl:ps-[60px]  '>
        {
          isLoading? (
            <div className='text-center w-full 0'><Loading/></div>
          ) : error? (
            <div className='text-center w-full '>
              <Error />
            </div>
          ) : (
            <>
          {  data.map((character, _) => (
                <Cart data={character} key={_} />
            ))}
           
            </>
          )
        }

        </section>

    </section>
  )
}

export default Content