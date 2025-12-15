import React from 'react'
import Footer from '../Nav/Footer'

const ProjectFooter = () => {
  return (
    <div className='w-full h-[30vw] pb-5 bg-black flex flex-col justify-between px-3'>
      <div className='w-[100%] h-auto flex justify-between items-center pt-3 '>
          <div className="flex w-[50%] gap-2 text-white  ">
            <div className="border-3   hover:border-[#d2fd51] hover:text-[#d2fd51] px-8 py-0 leading-20 pb-1 cursor-pointer border-white  rounded-full w-auto flex justify-center items-center">
                <h1 className="font-bold  text-[5vw]">FB</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] px-8 py-0 leading-20 pb-1 cursor-pointer border-white  rounded-full w-auto flex justify-center items-center">
                <h1 className="font-bold text-[5vw]">IG</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] px-8 py-0 leading-20 pb-1 cursor-pointer border-white  rounded-full w-auto flex justify-center items-center">
                <h1 className="font-bold text-[5vw]">IN</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] px-8 py-0 leading-20 pb-1 cursor-pointer border-white  rounded-full w-auto flex justify-center items-center">
                <h1 className="font-bold text-[5vw]">BE</h1>
            </div>
          </div>

          <div className='border-3 gap-3 leading-20 text-white flex items-center py-1 px-6 cursor-pointer hover:text-[#d2fd51] hover:border-[#d2fd51] justify-center border-white rounded-full'>
            <h1 className='text-[5vw]'>CONTACT</h1>
            <i class="ri-heart-fill text-[5vw]"></i>
          </div>


      </div>
       <footer className="text-white w-full bottom-0 px-3 flex items-center  relative ">
          <div className="w-full h-full flex items-center gap-3 absolute left-0 z-20">
            <i class="ri-global-line text-[2vw]"></i>
            <h1 className="text-[1.8vw] font-semibold ">MONTREAL_07:09:01</h1>
          </div>
          <div className="flex  whitespace-nowrap gap-3 mx-auto  z-20">
            <a className="hover:text-[#d2fd51]" href="">Politique de confidentialité</a>
            <a className="hover:text-[#d2fd51]" href="">Avis de confidentialité</a>
            <a className="hover:text-[#d2fd51]" href="">Rapport éthique</a>
            <a className="hover:text-[#d2fd51]" href="">Options de consentement</a>
          </div>
          <a className="hover:text-[#d2fd51] text-[1vw] z-20" href="">RETUR EN HAUT</a>
        </footer>
    </div>
  )
}

export default ProjectFooter
