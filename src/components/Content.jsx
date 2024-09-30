import React, {useContext} from 'react'
import {Datacontext}  from '../../Context.js/context'
import Cart from './cart';
import Paginnation from './paginnation.jsx';



const Content = () => {
    const {data, isLoading, error, name, setName} =  useContext(Datacontext)
  return (
    <section className='max-w-[1216px] w-full flex flex-col items-center justify-center gap-16 p-4'>
                <h1 className='text-4xl text-center max-w-[639px]  font-semibold'>Meet the Wildest Characters 
from the Rick and Morty Multiverse!</h1>
     
        <section className='w-full min-h-full h-auto flex items-center justify-center gap-8 flex-wrap'>
        {
          isLoading? (
            <div className='text-center'>Loading...</div>
          ) : error? (
            <div className='text-center'>An error occurred: {error}</div>
          ) : (
            <>
          {  data.map((character) => (
                <Cart data={character} />
            ))}
           
            </>
          )
        }

        </section>

    </section>
  )
}

export default Content