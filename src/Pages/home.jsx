import React, { useContext } from 'react'
import Video from '../components/home/video'
import Herotop from '../components/home/herotop'
import Bottom from '../components/home/bottom'
import { fullNavbarContext } from '../context/NavContext'

function home() {
  const [clickNav, setClickNav] = useContext(fullNavbarContext)
 
  return (
    <div className=''>
    {!clickNav ? (
      <div>
        <div className='h-screen w-screen fixed'>
          <Video/>
        </div>
        <div>
          <div className="h-screen w-screen relative flex flex-col justify-between">
            <Herotop/>
            <Bottom/>
          </div>
        </div>

      </div>

) : null}
</div>
  )
}

export default home
