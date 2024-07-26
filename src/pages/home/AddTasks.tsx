// src/components/TaskInput.js
import { useState } from "react";
import useTaskStore from "../../store/task";
import taskManagement from "../../assets/task-management.png";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTask = useTaskStore((state: any) => state.addTask);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(title, description);
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <div className="wrapper py-4 mb-6">
        <h2 className="header-two text-center mb-6">Task Management</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-between md:gap-6 items-center mt-[4rem]">
          <div className="w-full md:w-[40%]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block mb-1 text-[14px]">Title</label>
                <input
                  type="text"
                  value={title}
                  className="text-black-100 text-primary w-full h-[2rem] px-2 focus:outline-blue-200 rounded-md"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-[14px]">Description</label>
                <input
                  type="text"
                  value={description}
                  className="text-black-100 text-primary w-full h-[2rem] px-2 focus:outline-blue-200 rounded-md"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-[180px] py-2 px-2 bg-white text-black-100 rounded-[16px]"
              >
                Add New Task
              </button>
              </div>
              
            </form>
          </div>

          <div className="w-full md:w-[40%]">
            <img
              src={taskManagement}
              className="w-full h-[300px]"
              alt="Task Management"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
