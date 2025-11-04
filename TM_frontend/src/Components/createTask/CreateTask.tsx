import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const CreateTask = ({
  setisclicked,
  isclicked,
  setReloadOnTaskCreate,
  setreloadOnTaskUpdate,
  editingTask,
  setEditingTask,
}: any) => {
  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        email: "test@gmail.com",
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate.split("T00:00:00.000Z"),
      });
    }
  }, [editingTask]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingTask) {
        const res = await axios.put(
          `http://localhost:4000/app/updateTask/${editingTask._id}`,
          formData
        );
        if (res.data.ok) {
          setreloadOnTaskUpdate(true);
          toast.success("Task updated successfully!");
        }
      } else {
        const res = await axios.post(
          "http://localhost:4000/app/createTask",
          formData
        );
        if (res.data.ok) {
          setReloadOnTaskCreate(true);
          toast.success("Task created successfully!");
        }
      }
      setisclicked(false);
      setEditingTask(null);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#1e232d] p-4 bg-[#101828] rounded-md flex flex-col gap-3"
    >
      <h2 className="text-lg font-semibold">
        {editingTask ? "Edit Task" : "Create Task"}
      </h2>

      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        className="border border-[#252c3b] p-2 rounded-md"
      />
      <textarea
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Description"
        className="border border-[#252c3b] p-2 rounded-md"
      />
      <select
        value={formData.priority}
        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        className="border border-[#252c3b] p-2 rounded-md"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        className="border border-[#252c3b] p-2 rounded-md"
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {editingTask ? "Update Task" : "Create Task"}
        </button>
        <button
          type="button"
          onClick={() => {
            setisclicked(false);
            setEditingTask(null);
          }}
          className="border border-[#252c3b] px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
