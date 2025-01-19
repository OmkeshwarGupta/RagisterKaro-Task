import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  
  const [filteredStatus, setFilteredStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const navigate = useNavigate();

  const handleCreateTask = () => {
    navigate("/create-task");
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleTaskUpdate = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleToggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "complete" ? "incomplete" : "complete";
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filterAndSortTasks = () => {
    let filteredTasks = tasks;

    // Filter tasks by status
    if (filteredStatus !== "all") {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === filteredStatus
      );
    }

    // Sort tasks by creation time
    filteredTasks.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
      }
      return new Date(a.createdAt) - new Date(b.createdAt); // Oldest first
    });

    return filteredTasks;
  };

  const handleFilterChange = (e) => {
    setFilteredStatus(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  }

  return (
    <div className="px-8 mt-8 flex flex-col items-center">
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onTaskDelete={handleTaskDelete}
          onTaskUpdate={handleTaskUpdate}
          onToggleStatus={handleToggleTaskStatus}
          onFilterChange={handleFilterChange}
          onFilterAndSortTasks={filterAndSortTasks}
        />
      ) : (
        <div className="text-center mt-8">
          <p className="text-lg text-[#272D37]">No tasks available.</p>
        </div>
      )}
      <button
        onClick={handleCreateTask}
        className="mt-4 bg-[#1C4670] text-white px-4 py-2 rounded hover:bg-[#FFA229] hover:text-black hover:border-2 hover:border-black transition"
      >
        Create Task
      </button>
    </div>
  );
};

export default HomePage;
