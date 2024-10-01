import React from 'react'
import { Button } from "@/components/ui/button"

const Error = () => {
        const handleRefresh = () => {
          window.location.reload(); // Refresh the current page
        };
    return (
    <div className='w-full h-full flex flex-col items-center justify-center  text-3xl font-Jim text-green-500'>
        <h1>Oops! Something went wrong.</h1>
        <Button onClick={handleRefresh}  className='mt-4' >
      Refresh Page
    </Button>
        
    </div>
  )
}

export default Error