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
    <section className='w-full flex flex-col items-center'>
         <div className='  min-w-[450px] w-[450px] flex p-2  items-center gap-x-4 bg-white rounded-[32px] shadow-xl'>
        <input  placeholder='Search...' className='bg-white  shadow-none outline-0 outline-white grow  h-8 px-3  ' value={name} onChange={(e) => setName(e.target.value)} />
        <CiSearch  className='text-[24px] cursor-pointer  h-8 w-8 rounded-lg  text-center'/>
        </div>

    <div className='w-full grid grid-flow-col  place-items-center font-Montserrat min-h-[261px] '>
        <div className=''>

        <Select onValueChange={(value) => setGender(value)}>
        <label htmlFor='gender' className='text-base font-medium leading-5 text-[#333333]'>Gender:</label>
        <SelectTrigger name='gender' id="gender" className="w-[180px]" >
            <SelectValue placeholder="Select gender" className="capitalize placeholder:capitalize" value={gender}  />
        </SelectTrigger>
        <SelectContent>
           {genderList.map((item)=> {
            return <SelectItem  value={item} key={item} className='data-[state=checked]:bg-green-500 data-[state=checked]:text-white'>{item}</SelectItem>
           }) }
        </SelectContent>
        </Select>
        </div>
        <div>
        <div className=''>
        <Select onValueChange={(value) => setSpecies(value)}>
        <label htmlFor='gender' className='text-base font-medium leading-5 text-[#333333]'>Species:</label>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Species" className="capitalize placeholder:capitalize" />
        </SelectTrigger>
        <SelectContent>
        {SpeciesList.map((item)=> {
            return <SelectItem value={item} key={item} className='data-[state=checked]:bg-green-500 data-[state=checked]:text-white'>{item}</SelectItem>
           }) }
        </SelectContent>
        </Select>
        </div>
        </div>
        <div>
        <div className=''>
   

        <Select onValueChange={(value) => setStatus(value)}>
        <label htmlFor='gender' className='text-base font-medium leading-5 text-[#333333]'>Satus:</label>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select satus"  className="capitalize placeholder:capitalize" />
        </SelectTrigger>
        <SelectContent>
        {statusList.map((item)=> {
            return <SelectItem value={item} key={item} className='data-[state=checked]:bg-green-500 data-[state=checked]:text-white' >{item}</SelectItem>
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