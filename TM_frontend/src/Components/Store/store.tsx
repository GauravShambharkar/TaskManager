import { create } from "zustand";

const useStore = create((set) => ({
  tasks: [],
  addTask: (tasks: any) => set({ tasks }),
  clearTasks: () => set({ tasks: [] }),
  getTasks: async () => {
    const res = await fetch("https://localhost:4000/api/tasks/test@gmail.com");
    const data = await res.json();
    set({ tasks: data });
  },
}));

export default useStore;
