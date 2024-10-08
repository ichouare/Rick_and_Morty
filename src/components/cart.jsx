import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
  import { Button } from "@/components/ui/button"
  import {Link, useNavigate, Outlet} from 'react-router-dom'
  import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Cart = ({data}) => {
  const {id , name, species, created , image, status, gender} = data
  return (
    <Card key={id} className='font-poppins cursor-pointer w-full md:min-w-[392px] md:w-[392px]  md:h-[608px] md:min-h-[608px] rounded-[12px] md:p-2 flex flex-col  shadow-none  m-0 '>
    <CardHeader>
        <Avatar className='w-full min-h-[200px]  md:min-h-[360px]  rounded-[14px]  '>
      <AvatarImage src={image} />
      <AvatarFallback className='w-full min-h-[200px]  md:min-h-[360px]  rounded-[12px] text-black/60 text-3xl'>RM</AvatarFallback>
    </Avatar>
    </CardHeader>
<CardContent className='flex flex-col gap-1'>
      <CardDescription className='bg-[#4B6BFB0D] py-1 w-fit px-2 mb-2 text-center rounded-sm  text-[#4B6BFB]'>{species}</CardDescription>
      <CardDescription className='capitalize tracking-wide font-blod text-black'> name : <span className='font-normal text-black/80 ms-3'> {name} </span></CardDescription>
      <CardDescription className='capitalize tracking-wide font-blod text-black'> status : <span className='font-normal text-black/80 ms-3'> {status} </span></CardDescription>
      <CardDescription className='capitalize tracking-wide font-blod text-black '>  Gender : <span className='font-normal text-black/80 ms-3'> {gender} </span></CardDescription>
</CardContent>
    <CardFooter className='flex'>
      <Link to={`/${id}`} className="w-[88px] text-center p-2 font-sans-work font-medium text-[14px]  rounded-[6px] capitalize text-[#017034] bg-[#007C2A33] hover:bg-[#007C2A33] cursor-pointer">details</Link>
    </CardFooter>
  </Card>
  )
}

export default Cart