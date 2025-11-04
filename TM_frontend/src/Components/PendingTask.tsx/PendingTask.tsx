import React, { useEffect, useState } from "react";

type DataType = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  priority: string;
};

type ItemProp = {
  item: DataType;
};

const PendingTask: React.FC<ItemProp> = ({ item }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (item.status !== "pending") {
      setMsg("No pending task available");
    } else {
      setMsg("");
    }
  }, []);

  if (msg) {
    return <div className="w-full h-screen allcenter">{msg}</div>;
  }

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <label className="font-semibold">Title:</label>
        <h1>{item.title}</h1>
      </div>

      <div className="flex gap-2">
        <label className="font-semibold">Description:</label>
        <p>{item.description}</p>
      </div>

      <div className="flex gap-2">
        <label className="font-semibold">Status:</label>
        <p>{item.status}</p>
      </div>

      <div className="flex gap-2">
        <label className="font-semibold">Due Date:</label>
        <p>{item.dueDate.split("T00:00:00.000Z")}</p>
      </div>
    </div>
  );
};

export default PendingTask;
