import React, {useContext, useEffect} from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { FaGreaterThan } from "react-icons/fa6";
  import { Datacontext } from '../../Context/context';




const Paginnation = () => {
    const { page, setPage, total} = useContext(Datacontext)
    const pages = [1, 2, 9, 10]
    useEffect(() => {
        console.log(page)
        if (!pages.includes(page)) {
            pages.push(page)
          }
        }, [page, pages]);
  return (
    <div className='w-full p-4 flex items-center justify-center'>
      <ul className='flex   w-[350px] h-8 items-center gap-x-2 text-[#212B36] cursor-pointer'> 
        <li className='w-[31.2px] h-[28.6px] grid place-content-center border border-[#017034] rounded-sm
'>
        <FaGreaterThan className='rotate-180 text-xs'  onClick={() => {
            if(page > 1)
            setPage(page - 1)
  
        }}/>
        </li>
        {
            pages.map((page, index) => (
                (index ==( pages.length / 2)) ?  <li key={index} className='w-[31.2px] h-[28.6px] grid place-content-center border border-[#017034] rounded-sm' onClick={() => setPage(page)}>
                  ...
              </li> : 
              <li key={index} className='w-[31.2px] h-[28.6px] grid place-content-center border border-[#017034] rounded-sm'  >
                <li onClick={() => setPage(page)}>
                  {page}
                </li>
              </li>
            ))
        }
        <li className='w-[31.2px] h-[28.6px] grid place-content-center border border-[#017034] rounded-sm'>
        <FaGreaterThan className='text-xs' onClick={() => {
            if(page < total)
            setPage(page + 1)
  
        }} />
        </li>
      </ul>
    </div>
  )
}

export default Paginnation