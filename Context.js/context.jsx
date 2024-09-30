import React, {createContext , useState} from 'react'





export const Datacontext = createContext(null)

const ContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [species, setSpecies] = useState('')
  const [status, setStatus] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1)


  return (
    <Datacontext.Provider value={
     {
      isLoading ,
      setIsLoading,
      data, 
      setData,
      error, 
      setError,
      name,
      setName,
      gender,
      setGender,
      species,
      setSpecies,
      page, 
      setPage,
      status,
      setStatus,
      setTotal,
      total


     }
    }
    >
        {children}
    </Datacontext.Provider>
  )
}

export default ContextProvider