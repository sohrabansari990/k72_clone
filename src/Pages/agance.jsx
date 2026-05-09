import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // <-- Add this
import Section2 from "../components/agance/Section2";
import Section3 from "../components/agance/Section3";
import { Link } from "react-router-dom";
import Section4 from "../components/agance/Section4";

function Agance() {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const parentRef = useRef(null)

  const imageArray = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
  ]


  useGSAP(function () {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

     ScrollTrigger.create({
      trigger: ".last",
      start: "top bottom",
      // endTrigger: "#page1",
      // end: "100% top",
    
      invalidateOnRefresh: true,
      // markers: true,
      onUpdate: (self) => {
        let imageIndex;
        if (self.progress < 1) {
          imageIndex = Math.floor(self.progress * imageArray.length)
        } else {
          imageIndex = imageArray.length - 1
        }
        imageRef.current.src = imageArray[imageIndex]
      }
    })

    ScrollTrigger.create({
      trigger: ".section-two",
      start: "bottom 50%",
      end: "bottom bottom",
      onEnter: () => gsap.set(parentRef.current, { backgroundColor: "#000" }),
      onLeaveBack: () => gsap.set(parentRef.current, { backgroundColor: "" }),
    })
  })


  return (
    <div ref={parentRef} className='parent text-black font-[fonttwo] relative'>
      <div className="relative">
        <div ref={imageDivRef} className='sticky top-[50vh] z-0 h-0 pointer-events-none'>
          <div className='absolute left-1/2 top-0 overflow-hidden -translate-x-1/2 -translate-y-1/2 lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] bg-amber-300'>
            <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
          </div>
        </div>

        <div id='page1' className='py-1 relative'>
          <div className='relative z-10 lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>

          <div className='last relative z-10 lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>

        <div className="section-two">
          <Section2 />
        </div>
      </div>

      <div className="h-full w-full">
        <Section3 />
      </div>
      <div className="mt-[40vh]">
        <Section4 />
      </div>
    </div>
  )
}
export default Agance;
