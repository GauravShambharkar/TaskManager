import React, { useState } from "react";
import Navigation from "./Components/Routing/Navigation/Navigation";
import Routing from "./Components/Routing/Routing";
import { Toaster } from "sonner";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-full h-screen relative">
        {/* <h3 className="text-8xl font-bold tighter">Task Manager</h3> */}

        <div className="fixed px-2 bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-lg border border-gray-300 hidden max-[450px]:flex justify-around items-center py-2 z-50">
          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex-1 text-center text-sm font-medium py-2 rounded-xl transition-all duration-200 ease-in-out ${
                isActive
                  ? "bg-blue-500 text-white scale-105 shadow-md"
                  : "text-gray-700 hover:bg-gray-100 active:scale-95"
              }`
            }
          >
            Home
          </NavLink>

          {/* Get Started */}
          <NavLink
            to="/get-started"
            className={({ isActive }) =>
              `flex-1 text-center text-sm font-medium py-2 rounded-xl transition-all duration-200 ease-in-out ${
                isActive
                  ? "bg-blue-500 text-white scale-105 shadow-md"
                  : "text-gray-700 hover:bg-gray-100 active:scale-95"
              }`
            }
          >
            Get-Started
          </NavLink>

          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex-1 text-center text-sm font-medium py-2 rounded-xl transition-all duration-200 ease-in-out ${
                isActive
                  ? "bg-blue-500 text-white scale-105 shadow-md"
                  : "text-gray-700 hover:bg-gray-100 active:scale-95"
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className="ml-56 max-[500px]:ml-0 max-[450px]:text-sm ">
          <Toaster position="bottom-center" richColors />
          <Navigation />
          <Routing />
        </div>
      </div>
    </>
  );
};

export default App;
