import React, {createContext, useState } from 'react'
export const addBlogContext = createContext()
 


const ContextShare = ({children}) => {
    const [addBlogResponse,setAddBlogResponse]=useState("")
  

  return (
    <addBlogContext.Provider value={{addBlogResponse,setAddBlogResponse}}>
    
      {children}

     
    
    </addBlogContext.Provider>
  )
}

export default ContextShare