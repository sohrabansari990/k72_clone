import React, { useLayoutEffect } from "react";
import img1 from "../components/images/mainNavImg/NavImg1.jpg";
import img2 from "../components/images/mainNavImg/projects2.jpg";
import img3 from "../components/images/mainNavImg/projects3.jpg";
import img4 from "../components/images/mainNavImg/projects4.jpg";
import img5 from "../components/images/mainNavImg/projects5.jpg";
import img6 from "../components/images/mainNavImg/projects6.jpg";
import img7 from "../components/images/mainNavImg/projects7.jpg";
import img8 from "../components/images/mainNavImg/projects8.jpg";
import img9 from "../components/images/mainNavImg/projects9.jpg";
import img10 from "../components/images/mainNavImg/projects10.jpg";
import img11 from "../components/images/mainNavImg/projects11.jpg";
import img12 from "../components/images/mainNavImg/projects12.jpg";
import img13 from "../components/images/mainNavImg/projects13.jpg";
import img14 from "../components/images/mainNavImg/projects14.jpg";
import img15 from "../components/images/mainNavImg/projects15.jpg";
import img16 from "../components/images/mainNavImg/projects16.jpg";
import ProjectFooter from "../components/projects/ProjectFooter";
import gsap from 'gsap';
import {ScrollTrigger }from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/projects/ProjectCard";



function projects() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];

  //  pairing
  const pairs = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }

  // ===============================================================

  
  gsap.registerPlugin(ScrollTrigger)



  // useGSAP(function(){
  //   const tl = gsap.timeline();
  //   gsap.from('.imagDiv', {
  //       height: '100px',
  //       // stagger: {
  //       //   amount: 0.1
  //       // },
        
  //       scrollTrigger: {
  //         trigger: '.parentDiv',
  //         // start: 'top 100%',
  //         // end: 'top -150%',
  //         toggleActions: "restart none none none",
  //         scrub: 1,
          
  //       }
  //     })

  // })

   useGSAP(function () {
    gsap.from('.hero', {
      height: '20px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: 2
      }
    })
  })

  


  return (
    <div className=" w-full  text-black">
      <div className="leading-40">
        <h1 className="text-black text-[11vw] uppercase font-[fonttwo] font-bold pt-[46vh]">
          projets
        </h1>
      </div>
      {/* ================================================= */}
       <div className='-lg:mt-20 lol'>
        {pairs.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            {/* <ProjectCard image1={elem[idx]} image2={elem[idx+1]} /> */}
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={elem[0]} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
            </div>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={elem[1]} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>Vior le projet</h2>
                </div>
            </div>
          </div>
        })}

      </div>
      <ProjectFooter />
    </div>
  );
}

export default projects;
