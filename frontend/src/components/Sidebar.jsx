import React from "react";

function Sidebar() {

  return (

    <div className="w-[250px] h-screen bg-gray-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        CareerBoost AI
      </h1>

      <ul className="space-y-6">

        <li className="hover:text-blue-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Upload Resume
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Job Description
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          AI Analysis
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;