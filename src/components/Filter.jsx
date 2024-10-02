import React, {useContext, useEffect, useState} from 'react'
import {Datacontext}  from '../../Context/context'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const Filter = () => {
    const [categories, setGategories] = useState([])
    const {isLoading, error, name, setName, gender, setGender, species, setSpecies, status, setStatus} =  useContext(Datacontext)

    useEffect(  () => {
        const fetchData = async () => {
          try{
            const {data} = await axios(
              'https://rickandmortyapi.com/api/character'
            )
            setGategories(data.results)

          }catch(e) {

          }
      
        }
        fetchData()
        }, [])

    const genderList = [...new Set(categories.map((item) => item.gender))];
    const SpeciesList = [...new Set(categories.map((item) => item.species))];
    const statusList = [...new Set(categories.map((item) => item.status))];
  return ( 
    <section className='min-w-full  flex flex-col items-center   px-2 md:px-0   '>
         <div className='w-[80%]  md:w-[450px] h-[60px] flex p-3   items-center gap-x-4 bg-white rounded-[32px] box_shadow'>
        <input  placeholder='Search...' className='bg-white   shadow-none outline-0 outline-white grow   h-full px-3   ' value={name} onChange={(e) => setName(e.target.value)} />
        <CiSearch  className='  text-[24px] cursor-pointer  h-8 w-8 rounded-lg  text-center'/>
        </div>

    <div className='w-full lg:max-w-[1216px] grid grid-flow-row min-h-[500px] py-8 md:py-20 gap-y-8 lg:gap-y-0 lg:py-0 lg:grid-flow-col  place-items-center  font-Montserrat md:min-h-[261px] h-auto   '>
        <div className='w-[308px] h-[80px]  ms-4  '>

        <Select onValueChange={(value) => setGender(value)}>
        <label htmlFor='gender' className=' box_shadowtext-base font-medium leading-5 text-[#333333] mb-2 block'>Gender:</label>
        <SelectTrigger name='gender' id="gender" className=" w-[200px]  md:w-[280px] h-[50px] shadow-lg" >
            <SelectValue placeholder="Select gender" className="capitalize placeholder:capitalize box_shadow" value={gender}  />
        </SelectTrigger>
        <SelectContent className='' >
           {genderList.map((item)=> {
            return <SelectItem  value={item} key={item} className='w-[200px]  md:w-[280px] h-[50px] cursor-pointer data-[state=checked]:bg-green-500 data-[state=checked]:text-white'>{item}</SelectItem>
           }) }
        </SelectContent>

        </Select>
        </div>
        <div>
        <div className='w-[308px] h-[80px]  ms-4 '>
        <Select onValueChange={(value) => setSpecies(value)}>
        <label htmlFor='gender' className='text-base font-medium leading-5 text-[#333333] mb-2 block '>Species:</label>
        <SelectTrigger className="w-[200px]  md:w-[280px] h-[50px]  shadow-lg">
            <SelectValue placeholder="Select Species" className="capitalize placeholder:capitalize" />
        </SelectTrigger>
        <SelectContent>
        {SpeciesList.map((item)=> {
            return <SelectItem value={item} key={item} className=' w-[200px]  md:w-[280px] h-[50px] cursor-pointer data-[state=checked]:bg-green-500 data-[state=checked]:text-white'>{item}</SelectItem>
           }) }
        </SelectContent>
        </Select>
        </div>
        </div>
        <div>
        <div className='w-[308px] h-[80px]  ms-4  '>
   

        <Select onValueChange={(value) => setStatus(value)}>
        <label htmlFor='gender' className='text-base font-medium leading-5 text-[#333333] mb-2 block'>Satus:</label>
        <SelectTrigger className="w-[200px]  md:w-[280px] h-[50px]  shadow-lg">
            <SelectValue placeholder="Select satus"  className="capitalize placeholder:capitalize" />
        </SelectTrigger>
        <SelectContent>
        {statusList.map((item)=> {
            return <SelectItem value={item} key={item} className='w-[200px]  md:w-[280px] h-[50px] cursor-pointer data-[state=checked]:bg-green-500 data-[state=checked]:text-white' >{item}</SelectItem>
           }) }
        </SelectContent>
        </Select>
        </div>
        </div> 
    </div>

    </section>
  )
}

export default Filter