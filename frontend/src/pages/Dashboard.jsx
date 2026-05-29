import React from "react";
import Sidebar from "../components/Sidebar";

function Dashboard() {

  return (

    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-6">
          Welcome to Dashboard 🚀
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Uploaded Resumes
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">
              Job Descriptions
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">
              AI Analyses
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;