import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { fullNavbarContext } from "../../context/NavContext";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import { style } from "motion/react-client";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const close = useRef(null);
  const close2 = useRef(null);

  const navigate = useLocation()
  // console.log(navigate)

  const [clickNav, setClickNav] = useContext(fullNavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    // tl.from('.closebutton',{
    //     x:150,
        
    // })
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    
    // tl.to('.closebutton',{
    //     x:150,
        
    // })
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
    tl.from('.closebutton',{
        x:150,
        
    })
  }
  // =================================================
  // const closeTheNav = () =>{
  //   // document.querySelector(".fullscreennav").style.display = "none"
  //   document.querySelector(".fullscreennav").classList.remove = "none"

  // }


  useGSAP(
    function () {
      if (clickNav) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [clickNav]
  );

  return createPortal(
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 fixed inset-0"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNavLinksRef} className="relative">
        {/* logo */}
          <div className="absolute top-0 left-0 z-20 ">
          <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-4 w-30 cursor-pointer"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
        </div>
        {/* close button */}
        <div
          onClick={() => {
            setClickNav(false);
          }}
          onMouseEnter={() => {
            close.current.style.background = "#d2fd51";
            close2.current.style.background = "#d2fd51";
          }}
          onMouseLeave={() => {
            close.current.style.background = "white";
            close2.current.style.background = "white";
          }}
          className="closebutton flex justify-end absolute w-35 z-30 top-0 right-0 cursor-pointer h-30 "
        >
          <hr
            ref={close}
            className="rotate-45 absolute top-1/2 bg-white w-35 h-0.7 "
          />
          <hr
            ref={close2}
            className="-rotate-45 absolute top-1/2 bg-white w-35 h-0.7 "
          />
        </div>
        {/* ==================================================== */}
        <div className=" py-56">
          <div className="link origin-top relative border-t-1 border-white">
            <Link to="/projects" onClick={()=>{
              setClickNav(false)
            }}>
            <h1 className="font-[font2] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.8] lg:py-3 py-1 uppercase">
              Projets
            </h1>
            <div className="moveLink absolute text-black flex top-0 bottom-0 my-auto bg-[#D3FD50]">
              <div className="moveX flex items-center justify-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
            </Link>
            
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <Link to={"/agance"} onClick={()=>{
              setClickNav(false)
            }}>
              <h1 className="font-[font2] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.8] lg:py-3 py-1 uppercase">
              AGENCE
            </h1>
            <div className="moveLink absolute text-black flex top-0 bottom-0 my-auto bg-[#D3FD50]">
              <div className="moveX flex items-center justify-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
            </Link>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.8] lg:py-3 py-1 uppercase">
              CONTACT
            </h1>
            <div className="moveLink absolute text-black flex top-0 bottom-0 my-auto bg-[#D3FD50]">
              <div className="moveX flex items-center justify-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-b-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[6.5vw] text-center lg:leading-[0.8] lg:py-3 py-1 uppercase">
              BOLGUE
            </h1>
            <div className="moveLink absolute text-black flex top-0 bottom-0 my-auto bg-[#D3FD50]">
              <div className="moveX flex items-center justify-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[fontone] pt-4 lg:text-[8vw] text-5xl  text-center lg:leading-[0.8]  uppercase">
                  Pour Tout voir
                </h2>
                <img
                  className="lg:h-30 h-12 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>,
    document.body
  );
};

export default FullScreenNav;
