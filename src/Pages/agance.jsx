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
    "/src/components/images/1.png",
    "/src/components/images/2.png",
    "/src/components/images/3.png",
    "/src/components/images/4.png",
    "/src/components/images/5.png",
    "/src/components/images/6.png",
    "/src/components/images/7.png",
    "/src/components/images/8.png",
    "/src/components/images/9.png",
    "/src/components/images/10.png",
    "/src/components/images/11.png",

  ]


useGSAP(function () {
    const tl = gsap.timeline()
    tl.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top -10%',
        end: 'top -170%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 3, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
    ScrollTrigger.create({
    trigger: ".section-two",
    start: "bottom 50%",
    end: "bottom bottom",
    onEnter: () => gsap.set(parentRef.current, { backgroundColor: "#000" }),
    onLeaveBack: () => gsap.set(parentRef.current, { backgroundColor: "" }),
    // markers: true,
  })
    
  })


  return (
    <div ref={parentRef} className='parent text-black font-[fonttwo]'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-56 top-20 lg:left-[30vw] left-[30vw] bg-amber-300'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[fonttwo]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='last lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      {/* <h1 className="text-red-600 text-2xl"><Link to="/dummy">click to go</Link></h1> */}
      </div>
      <div className="section-two">
      <Section2 />

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
