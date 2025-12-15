import {  Route, Routes } from "react-router-dom";
import Agance from "./Pages/agance";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Navbar from "./components/Nav/Navbar";
import FullNav from "./components/Nav/FullNav";
// import Dummy from "./components/agance/Dummy";







// ==================================
// this it orginal site link
// https://k72.ca/agence

function App() {
  
  return (
    <div className="text-white pb-0 ">
      {/* <h1 className="text-black">heyy</h1> */}
     
      
      <Navbar />
      <FullNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agance" element={<Agance />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/dummy" element={<Dummy />} /> */}
      </Routes>
    </div>
  );
}

export default App;
