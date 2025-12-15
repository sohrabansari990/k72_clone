import { motion } from "framer-motion";
import { div } from "motion/react-client";
import { useRef, useState } from "react";

export default function StackedPanels() {
  const navGreen = useRef(null);
  const imgRef = useRef(null);
  const panel3 = useRef(null);
  const left_names = [
    "Directeur principal",
    "Conceptrice-rédactrice",
    "Conseillère principale",
    "VPP et directeur général",
    "VPP et directeur général",
    "Directrice de la stratégie",
    "Directrice conseil",
    "Conseiller",
    "Conseillère",
    "Planificateur stratégique principal",
    "Conseillère",
    "Conseillère principale",
    "Opérations et développement des affaires",
    "Directrice principale",
    "Directrice principale",
    "Directeur de création adjoint",
    "Directrice de création",
    "Directeur de création adjoint",
  ];
  const right_names = [
    "Carl Godbout",
    "Camille Brière",
    "Stéphanie Brunelle",
    "Pierre-Luc Paiement",
    "Mélanie Laviolette",
    "Michèle Riendeau",
    "Meggie Lavoie",
    "Philippe Perreault",
    "Lou Gravel-Jean",
    "Olivier Roeyaerts",
    "Hélène Conti",
    "Véronique Demers",
    "Maëlle  Jacot-Descombes",
    "Isabelle Beauchemin",
    "Olivier Duclos",
    "Joël Letarte",
    "Chantal Chantal",
    "Sébastien Roy",
  ];
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
    "/src/components/images/15.png",
    "/src/components/images/12.png",
    "/src/components/images/13.png",
    "/src/components/images/15.png",
    "/src/components/images/14.png",
    "/src/components/images/15.png",
    "/src/components/images/4.png",
  ];

  const [hoverIdx, setHoverIdx] = useState(null);


  return (
    <div className="stack-container">
      {/* /* Panel 1 */}
      <motion.div
        className="panel"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }}
        style={{ background: "#000" }}
      >
        <div className="panel-content h-screen relative flex items-center justify-center">
          <div className="moving_text z-10   text-[10vw] text-[#D3FD50]">
            <h1 className="moving-headings">BEATRICE</h1>
            <h1 className="moving-headings">BEATRICE</h1>
          </div>
          <div className="z-20 h-screen">
            <img
              src="/src/components/images/8.png"
              className="h-full object-cover w-[32vw] rounded-2xl"
            />
            <div className="moving_text2 z-10   text-[10vw] text-[#D3FD50]">
              <h1 className="moving-headings2">ROUSSIN</h1>
              <div className="moving-headings2 pair_text flex">
                <h1 className="">ROUSSIN</h1>
                <h4 className="small_text text-2xl">STRATEGE</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Panel 2 */}
      <motion.div
        className="panel"
        initial={{ opacity: 1, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ amount: 0.5 }}
        style={{ background: "#000" }}
      >
        <div className="panel-content h-screen relative flex items-center justify-center">
          <div className="moving_text z-10   text-[10vw] text-[#D3FD50]">
            <h1 className="moving-headings">ALEX</h1>
            <h1 className="moving-headings">ALEX</h1>
          </div>
          <div className="z-20 h-screen">
            <img
              src="/src/components/images/10.png"
              className="h-full object-cover w-[32vw] rounded-2xl"
            />
            <div className="moving_text2 z-10   text-[10vw] text-[#D3FD50]">
              <h1 className="moving-headings2">SAUVAGEAU</h1>
              <div className="moving-headings2 pair_text flex">
                <h1 className="">SAUVAGEAU</h1>
                <h4 className="small_text text-2xl whitespace-nowrap">
                  DIRECTEUR ARTISTIQUE
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="spacer h-[90vh]"></div>

      {/* Panel 3 */}
      <motion.div
        ref={panel3}
        className="panel "
        initial={{ opacity: 1, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ amount: 0.5 }}
        style={{ background: "#000" }}
      >
        <div className="panel-content  w-full flex flex-col  bg-black pb-[44vh]">
          <div className=" w-full flex flex-col mt-[20vh] justify-between border-b-2">
            {/* list of names  */}
            {left_names.map((elem, idx) => (
              <div
                key={idx}
                className="list_name flex items-center justify-between border-t-2 px-3  cursor-pointer border-white w-full"
                onMouseEnter={() => {
                  navGreen.current.style.width = "24%";
                  // imgRef.current.style.width = "100%";
                  setHoverIdx(idx);
                }}
                onMouseLeave={() => {
                  navGreen.current.style.width = "0%";
                  // imgRef.current.style.width = "0%";
                  setHoverIdx(null);
                }}
              >
                <div className="text-left text-[1vw] pb-3 ">{elem}</div>
                <div className="text-right text-[2.4vw] uppercase">
                  {right_names[idx]}
                </div>
              </div>
            ))}
            <div
              ref={navGreen}
              className="navGreen  absolute pointer-events-none w-[0%] h-[75%] top-1/5 left-1/3 rounded-3xl transition-all duration-200 ease-in-out"
            >
              {hoverIdx !== null && imageArray[hoverIdx] && (
                <img
                  ref={imgRef}
                  className="w-[100%] h-full object-cover rounded-3xl"
                  src={imageArray[hoverIdx]}
                  alt="imgs"
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
      
      
    </div>
  );
}
