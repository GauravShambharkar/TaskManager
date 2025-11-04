import React, { useEffect, useState } from "react";
import useStore from "../Store/store";
import axios from "axios";
import CreateTask from "../createTask/CreateTask";
import AllTask from "../AllTask/AllTask";
import { LuNotebookPen } from "react-icons/lu";

const GetStarted = () => {
  const tasks = useStore((state: any) => state.tasks);
  const addTask = useStore((state: any) => state.addTask);
  const [reloadOnTaskCreate, setReloadOnTaskCreate] = useState(false);
  const [reloadOnTaskUpdate, setreloadOnTaskUpdate] = useState(false);

  const [isclicked, setisclicked] = useState(false);
  const [deleted, setdeleted] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [editingTask, setEditingTask] = useState<any>(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_GET_TASK_API_ENDPOINT}`);
      addTask(res.data.task);
    } catch (error: any) {
      console.log("Server error:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [reloadOnTaskCreate, reloadOnTaskUpdate]);

  useEffect(() => {
    if (deleted || editingTask) {
      fetchTasks();
      setdeleted(false);
    }
  }, [deleted]);

  // useEffect(()=>{
  //   if(){

  //   }

  // },[setreloadOnTaskUpdate])

  const filteredTasks =
    priorityFilter === "all"
      ? tasks
      : tasks.filter((t: any) => t.priority === priorityFilter);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between  flex-colitems-center mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Your Tasks</h1>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between  items-center mb-4">
        <button
          onClick={() => {
            setisclicked(true);
            setEditingTask(null);
          }}
          className="bg-blue-500  hover:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
        >
          <LuNotebookPen className="text-lg" />
          Create Task
        </button>
        <div className="flex gap-2 items-center">
          <p className="text-gray-400 text-sm">Filter by Priority:</p>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="border border-gray-600 bg-[#1e293b] text-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {isclicked && (
        <div className="mb-6 bg-[#1e293b] p-5 rounded-xl shadow-lg border border-gray-700">
          <CreateTask
            setisclicked={setisclicked}
            isclicked={isclicked}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            setReloadOnTaskCreate={setReloadOnTaskCreate}
            setreloadOnTaskUpdate={setreloadOnTaskUpdate}
          />
        </div>
      )}

      <div className="bg-[#1e293b] rounded-xl p-5 shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#475569] scrollbar-track-[#1e293b]">
        {filteredTasks.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filteredTasks.map((item: any, index: number) => (
              <AllTask
                key={item._id}
                item={item}
                index={index}
                setdeleted={setdeleted}
                setEditingTask={setEditingTask}
                setisclicked={setisclicked}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-lg">
            No tasks found
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
