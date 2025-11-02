import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-56 bg-gray-900 text-white flex flex-col p-5 max-[500px]:hidden">
        <h1 className="text-xl font-semibold mb-8">Task Manager App</h1>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 px-3 py-2 rounded-md"
                : "hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/get-started"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 px-3 py-2 rounded-md"
                : "hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
            }
          >
            Get started
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 px-3 py-2 rounded-md"
                : "hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-200 ease-in-out"
            }
          >
            Dashboard
          </NavLink>
        </nav>

        
      </div>
    </>
  );
};

export default Navigation;
