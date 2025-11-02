import React from "react";
import axios from "axios";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "sonner";

type itemType = {
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  _id: string;
};

interface AllTaskProps {
  item: itemType;
  index: number;
  setdeleted: React.Dispatch<React.SetStateAction<boolean>>;
  setEditingTask: React.Dispatch<React.SetStateAction<itemType | null>>;
  setisclicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllTask: React.FC<AllTaskProps> = ({
  item,
  setdeleted,
  setEditingTask,
  setisclicked,
}) => {
  async function deleteTask(id: string) {
    try {
      const res = await axios.delete(`http://localhost:4000/app/deleteTask/${id}`);
      if (res.data.ok) {
        setdeleted(true);
        toast.success("Task deleted successfully");
      }
    } catch (error) {
      toast.error("Error deleting task");
    }
  }

  return (
    <div className="flex p-3 justify-between items-center rounded-md">
      <div className="w-full">
        <p><strong>Title:</strong> {item.title}</p>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Status:</strong> {item.status}</p>
        <p><strong>Due:</strong> {item.dueDate.split("T")[0]}</p>
      </div>

      <div className="flex gap-3">
        {/* 🖊 Edit */}
        <FaPen
          onClick={() => {
            setEditingTask(item);
            setisclicked(true); 
          }}
          className="text-blue-400 hover:text-blue-600 cursor-pointer text-lg"
        />

        <RiDeleteBin5Line
          onClick={() => deleteTask(item._id)}
          className="text-red-400 hover:text-red-600 cursor-pointer text-lg"
        />
      </div>
    </div>
  );
};

export default AllTask;
