import React, {useContext, useEffect, useState} from 'react'
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
    const [pages, setPages] = useState([1, 2, 9, 10])
    useEffect(() => {
        console.log(page)
        if (!pages.includes(page)) {
          const paginationRoot  = [1, 2, 9, 10]
          setPages((prev) => [...paginationRoot, page].sort((a, b) => a - b));
          }
        }, [page, pages]);
        if(total == 1)
            return ;
        return (
          <div className='w-full p-4 flex items-center justify-center '>
      <ul className='flex   w-[350px] h-8 items-center justify-center gap-x-2 text-[#212B36] cursor-pointer'> 
        <li className={page === 1 ? 'w-[41.6px] h-[41.6px] grid place-content-center border text-[#017034] bg-[#007C2A80] opacity-50 border-[#01703575] rounded-[5.2px]' : 'w-[41.6px] h-[41.6px] grid place-content-center  text-[#017034] border  border-[#017034] rounded-[5.2px]'}  onClick={() => {
            if(page > 1)
              setPage(page - 1)
        }}>
        <FaGreaterThan className='rotate-180 text-xs' />
  

        </li>
        {
            pages.map((page, index) => (
                (index == parseInt( pages.length / 2)) ? 
                <>
                <li key={index} className='w-[41.6px] h-[41.6px] grid place-content-center border border-[#017034] rounded-[5.2px]'>
                  ...
              </li> 
              <li key={index} className='w-[41.6px] h-[41.6px] grid place-content-center border border-[#017034] rounded-[5.2px]'  onClick={() => setPage((page) => {
                if(page > total)
                    return
                  setPage(page)
              })}>
      
                  {page}
              </li>
                </>
              : 
              <li key={index} className='w-[41.6px] h-[41.6px] grid place-content-center border border-[#017034] rounded-[5.2px]'  onClick={() => setPage((page) => {
                if(page > total)
                    return
                  setPage(page)
              })} >
      
                  {page}
              </li>
            ))
        }
        <li className={page === total ? 'w-[41.6px] h-[41.6px] grid place-content-center border text-[#017034] bg-[#007C2A80] opacity-50 border-[#01703575] rounded-[5.2px]' : 'w-[41.6px] h-[41.6px] grid place-content-center  text-[#017034] border  border-[#017034] rounded-[5.2px]'} onClick={() => {
            if(page < total)
              setPage(page + 1)
  
        }}>
        <FaGreaterThan className='text-xs'  />
        </li>
      </ul>
    </div>
  )
}

export default Paginnation