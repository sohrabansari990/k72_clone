import React, { createContext, useState } from 'react'

export const fullNavbarContext = createContext()

const NavContext = ({children}) => {

    const [clickNav, setClickNav] = useState(false)
    
  return (
    <div>
      <fullNavbarContext.Provider value={[clickNav, setClickNav]}>
        {children}
      </fullNavbarContext.Provider>
    </div>
  )
}

export default NavContext
