import React from 'react'
import { motion } from "framer-motion";
import { div } from "motion/react-client";
import AgenceFooter from './AgenceFooter';


const Section4 = () => {
  return (
    <div className='w-full min-h-[300vh] stack-container2'>
      <motion.div
        className="panel2"              
        initial={false}              
        animate={undefined}
        transition={undefined}
        viewport={{ amount: 0.2 }}
        // style={{ background: "#000" }}
      >
        <div className="panel-content w-full h-[100vh]  relative flex items-center  justify-center ">
          <motion.div
            className="z-20 w-full h-screen rounded-[2.4vw] overflow-hidden"
            initial={{ opacity: 0, y: 80 }}   
            whileInView={{ opacity: 1, y: -25 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/images/mainNavImg/projects14.jpg"
              className="h-screen  origin-center w-full  hover:scale-[1.05] duration-700 transition-all ease-in-out"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* <div className="panel-spacer" /> */}

      <motion.div
        className="panel2"              
        initial={false}              
        animate={undefined}
        transition={undefined}
        viewport={{ amount: 0.2 }}
        // style={{ background: "#000" }}
      >
        <div className="panel-content w-full h-[100vh]  relative flex items-center  justify-center ">
          <motion.div
            className="z-20 w-full h-screen rounded-[2.4vw] overflow-hidden"
            initial={{ opacity: 0, y: -80 }}   
            whileInView={{ opacity: 1, y: -25 }}
            transition={{ duration: 0 }}
          >
            <img
              src="/images/mainNavImg/projects10.jpg"
              className="h-screen  origin-center w-full  hover:scale-[1.05] duration-700 transition-all ease-in-out"
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="panel-spacer" />

      <motion.div
        className="panel2"              
        initial={false}              
        animate={undefined}
        transition={undefined}
        viewport={{ amount: 0.2 }}
        // style={{ background: "#000" }}
      >
        <div className="panel-content w-full h-[100vh]  relative flex items-center  justify-center ">
          <motion.div
            className="z-20 w-full h-screen rounded-t-[2.4vw] overflow-hidden"
            initial={{ opacity: 0, y: -80 }}   
            whileInView={{ opacity: 1, y: -25 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/images/mainNavImg/projects12.jpg"
              className="h-screen  origin-center w-full  hover:scale-[1.05] duration-700 transition-all ease-in-out"
            />
          </motion.div>
        </div>
      </motion.div>
      {/* =================================================== */}
      {/* last-footer */}
      <div className="panel-spacer" />
      <motion.div
        className="panel2"              
        initial={false}              
        animate={undefined}
        transition={undefined}
        viewport={{ amount: 0.2 }}
        // style={{ background: "#000" }}
      >
        <div className="panel-content w-full h-[60%]  relative flex items-center  justify-center ">
          <motion.div
            className="z-20 w-full h-[100%] -translate-y-[5vw]  overflow-hidden"
            initial={{ opacity: 0, y: 0 }}   
            whileInView={{ opacity: 1, y: 320 }}
            transition={{ duration: 0.2 }}
            viewport={{ amount: 0.2, once: true }}
          >
            <div className='bg-black w-full h-screen'>
                <AgenceFooter />
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Section4
