import React from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section2 = () => {

    gsap.registerPlugin(ScrollTrigger)

//     useEffect(()=>{
//         gsap.to(".main",{
//             y:-200,
//             backgroundColor:"black",
           
            
//             scrollTrigger: {
//                 trigger: ".main",
//                 start: "top 40%",
//                 end: "top 0%",
//                 markers: true,
//                 scrub: 3,
    
                
//             }
//     })
// })


return (
    <div className="main w-full h-auto text-black select-none">
        <div className=" mt-65 w-full flex px-55 justify-center">
            <div >
                {/* three-column grid: left = title, center = list, right = spacer */}
                <div
                    className="last text-[1.1vw]"
                    
                >
                    <div className='flex w-[100%] mb-[8vw] gap-[22vw] '>

                        <h1 >
                            Expertise
                        </h1>

                        {/* center column: place the list in the same row as the paragraphs and center it vertically */}
                        <div
                        
                        >
                            <ul className="   ">
                                <li>Stratégie</li>
                                <li>Publicité</li>
                                <li>Branding</li>
                                <li>Design</li>
                                <li>Contenu</li>
                            </ul>
                        </div>

                    </div>

                    {/* paragraphs span the full width on the second row; list is vertically centered next to the middle paragraph */}
                    <div
                       
                        className=" flex gap-[6vw] justify-between mt-8 text-[1.1vw] leading-6"
                    >
                        <p >
                            Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce
                            à la créativité sous toutes ses formes.
                        </p>
                        <p >
                            Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser.
                            Où on se sent libre d’être la meilleure version de soi-même.
                        </p>
                        <p >
                            Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à
                            bâtir une agence dont on est fiers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Section2
