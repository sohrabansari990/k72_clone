import React from 'react'
import Video from './video'

function herotop() {
  return (
    <div className='font-[fontone]  mx-auto text-center'>
      <div className='text-[10vw] flex  justify-center items-center uppercase leading-[9vw]'>L'étincelle</div>
      <div className='text-[10vw] flex  justify-center items-center uppercase leading-[9vw] whitespace-nowrap'>qui
        <div className='w-[15vw] h-[7vw] rounded-[4vw] overflow-hidden'><Video/></div>
        génère</div>
      <div className='text-[10vw] flex  justify-center items-center uppercase leading-[9vw]'>la créativité</div>


     

    </div>
  )
}

export default herotop
