import React from 'react'

const Footer = () => {
  return (
    <div className="absolute bottom-4 items-end  w-full px-3">
            <footer className="text-white w-full  px-3 flex items-center  relative ">
          <div className="w-full h-full flex items-center gap-3 absolute left-0 z-20">
            <i class="ri-global-line text-[2vw]"></i>
            <h1 className="text-[1.8vw] font-semibold ">MONTREAL_07:09:01</h1>
          </div>
          <div className="flex  whitespace-nowrap gap-3 mx-auto z-20">
            <a className="hover:text-[#d2fd51]" href="">Politique de confidentialité</a>
            <a className="hover:text-[#d2fd51]" href="">Avis de confidentialité</a>
            <a className="hover:text-[#d2fd51]" href="">Rapport éthique</a>
            <a className="hover:text-[#d2fd51]" href="">Options de consentement</a>
          </div>
          <div className="flex gap-2 z-20 absolute right-0">
            <div className="border-3   hover:border-[#d2fd51] hover:text-[#d2fd51] cursor-pointer border-white text-4xl rounded-3xl w-18 flex justify-center items-center">
                <h1 className="font-bold px-8">FB</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] cursor-pointer border-white text-4xl rounded-3xl w-18 flex justify-center items-center">
                <h1 className="font-bold">IG</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] cursor-pointer border-white text-4xl rounded-3xl w-18 flex justify-center items-center">
                <h1 className="font-bold">IN</h1>
            </div>
            <div className="border-3  hover:border-[#d2fd51] hover:text-[#d2fd51] cursor-pointer border-white text-4xl rounded-3xl w-18 flex justify-center items-center">
                <h1 className="font-bold">BE</h1>
            </div>
          </div>
        </footer>
        </div>
  )
}

export default Footer
