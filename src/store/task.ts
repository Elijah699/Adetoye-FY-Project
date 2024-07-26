// src/store.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      addTask: ( title, description) => set((state: any) => ({
        tasks: [
          ...state.tasks,
          { id: Date.now(), title, description, state: 'pending' }
        ]
      })),
      updateTask: ({ id, updatedTask }: any) => set((state: any) => ({
        tasks: state.tasks.map((task: any) =>
          task.id === id ? { ...task, ...updatedTask } : task
        )
      }))
    }),
    { name: 'task-storage' } // name of the item in local storage
  )
);

export default useTaskStore;
