import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "../../Pages/projects";
import Agance from "../../Pages/agance";
function Bottom() {
  return (
    <div className="font-[fonttwo]  mx-auto flex justify-center gap-3 ">
      <div className="hover:border-[#D3FD50] hover:text-[#D3FD50] font-bold flex items-end uppercase leading-[7vw] pb-0 pt-3 text-white border-2 border-white rounded-[6vw] px-8">
        <Link className="text-[6vw]  " to="/projects">
          PROJECTS
        </Link>
      </div>
      <div className="hover:border-[#D3FD50] hover:text-[#D3FD50] font-bold flex items-end uppercase leading-[7vw] pb-0 pt-3 text-white border-2 border-white rounded-[6vw] px-8">
        <Link className="text-[6vw] " to="/agance">
          AGENCE
        </Link>
      </div>
    </div>
  );
}

export default Bottom;
