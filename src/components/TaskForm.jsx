import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const TaskForm = ({ onTaskCreate }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      status,
      createdAt: new Date().toISOString(),
    };

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (onTaskCreate) {
      onTaskCreate(newTask); // Notify the parent component about the new task
    }

    toast.success("Task created successfully!");
    setTitle("");
    setDescription("");
    setStatus("incomplete");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-[#FEF3EF] shadow-sm"
    >
      <h2 className="text-center text-2xl font-semibold mb-6">Create Task</h2>
      <fieldset className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Task Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-bold mb-2">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-bold mb-2">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
            required
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      </fieldset>

      <div className="mt-6 flex justify-between gap-4">
        <button
          type="submit"
          className="mt-4 bg-[#1C4670] text-white px-4 py-2 rounded hover:bg-[#3a79b7]"
        >
          Create Task
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
