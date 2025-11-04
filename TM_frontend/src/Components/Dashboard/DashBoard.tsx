import { useEffect, useState } from "react";
import useStore from "../Store/store";
import axios from "axios";
import CompletedTask from "../CompletedTask.tsx/CompletedTask";
import PendingTask from "../PendingTask.tsx/PendingTask";
import InProgressTask from "../InProgressTask/InProgressTask";

const DashBoard = () => {
  const tasks = useStore((state: any) => state.tasks);
  const addTask = useStore((state: any) => state.addTask);
  const [toggle, settoggle] = useState("Completed");

  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/app/task/test@gmail.com"
      );
      addTask(res.data.task);
    } catch (error: any) {
      console.log("Server error:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        Manage Your Tasks
      </h1>

      {/* Container */}
      <div className="border border-gray-700 rounded-xl bg-[#1e293b] p-6 flex flex-col gap-4 shadow-lg h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#475569] scrollbar-track-[#1e293b]">
        {/* Toggle Buttons */}
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => settoggle("Completed")}
            className={`px-4 py-2 rounded-md flex gap-2 font-medium transition-all ${
              toggle === "Completed"
                ? "bg-green-500 text-white shadow-md"
                : "bg-[#334155] text-gray-300 hover:bg-[#475569]"
            }`}
          >
            Completed
            <span className="bg-blue-400 px-2.5 rounded-full" >
              {tasks.filter((item: any) => item.status === "completed").length}
            </span>
          </button>

          <button
            onClick={() => settoggle("pending")}
            className={`px-4 py-2 rounded-md flex gap-2 font-medium transition-all ${
              toggle === "pending"
                ? "bg-yellow-400 text-black shadow-md"
                : "bg-[#334155] text-gray-300 hover:bg-[#475569]"
            }`}
          >
            Pending
            <span className="bg-blue-400 px-2 rounded-full text-white" >
              {tasks.filter((item: any) => item.status === "pending").length}
            </span>
          </button>

          <button
            onClick={() => settoggle("in-progress")}
            className={`px-4 py-2 rounded-md flex gap-2 font-medium transition-all ${
              toggle === "in-progress"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-[#334155] text-gray-300 hover:bg-[#475569]"
            }`}
          >
            In Progress
            <span className="bg-blue-400 px-2.5 rounded-full text-white" >
              {tasks.filter((item: any) => item.status === "in-progress").length}
            </span>
          </button>
        </div>

        {/* Task Sections */}
        <div className="flex flex-col gap-4">
          {toggle === "Completed" &&
            (tasks.filter((item: any) => item.status === "completed").length >
            0 ? (
              tasks
                .filter((item: any) => item.status === "completed")
                .map((item: any, index: number) => (
                  <CompletedTask item={item} key={index} />
                ))
            ) : (
              <div className="w-full flex justify-center items-center text-gray-400 text-lg h-full">
                No completed tasks available
              </div>
            ))}

          {toggle === "pending" &&
            (tasks.filter((item: any) => item.status === "pending").length >
            0 ? (
              tasks
                .filter((item: any) => item.status === "pending")
                .map((item: any, index: number) => (
                  <PendingTask item={item} key={index} />
                ))
            ) : (
              <div className="w-full flex justify-center items-center text-gray-400 text-lg h-full">
                No pending tasks available
              </div>
            ))}

          {toggle === "in-progress" &&
            (tasks.filter((item: any) => item.status === "in-progress").length >
            0 ? (
              tasks
                .filter((item: any) => item.status === "in-progress")
                .map((item: any, index: number) => (
                  <InProgressTask item={item} key={index} />
                ))
            ) : (
              <div className="w-full flex justify-center items-center text-gray-400 text-lg h-full">
                No in-progress tasks available
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
