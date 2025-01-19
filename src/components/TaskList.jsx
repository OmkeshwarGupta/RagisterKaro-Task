import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import TaskDetail from "../pages/TaskDetailPage";
import { toast } from "react-hot-toast";

const TaskList = ({ tasks, onTaskUpdate, onTaskDelete ,onFilterAndSortTasks ,onFilterChange }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleStatus = (index) => {
    const updatedTask = {
      ...tasks[index],
      status: tasks[index].status === "complete" ? "incomplete" : "complete",
    };
    onTaskUpdate(index, updatedTask);

    toast(
      `Task marked as ${updatedTask.status === "complete" ? "Complete" : "Incomplete"}`,
      {
        icon: updatedTask.status === "complete" ? "🎉" : "😢",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };

  const handleUpdate = (index) => {
    const updatedTitle = prompt("Enter the new task title:", tasks[index].title);
    const updatedDescription = prompt(
      "Enter the new task description:",
      tasks[index].description
    );

    if (updatedTitle && updatedDescription) {
      const updatedTask = {
        ...tasks[index],
        title: updatedTitle,
        description: updatedDescription,
      };
      onTaskUpdate(index, updatedTask);
    }
  };

  const handleViewDetails = (index) => {
    setSelectedTask(tasks[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };


  const handleSortChange = (e) => {
    onFilterAndSortTasks(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
    }

  return (
    <div className="max-w-3xl w-full mx-auto p-5">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <select
            value={filteredStatus}
            onChange={handleFilterChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-sm focus:outline-none"
          >
            <option value="all">All Tasks</option>
            <option value="complete">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-sm focus:outline-none"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {filterAndSortTasks().map((task, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg p-5 mb-6 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{task.title}</h3>
              <p className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleString()}</p>
            </div>
            <div className="flex space-x-3">
              <button
                className="p-3 text-gray-700 hover:text-gray-900 transition"
                onClick={() => handleUpdate(index)}
              >
                <FaEdit size={20} />
              </button>
              <button
                className="p-3 text-red-600 hover:text-red-700 transition"
                onClick={() => onTaskDelete(index)}
              >
                <FaTrashAlt size={20} />
              </button>
              <button
                className="p-3 text-blue-600 hover:text-blue-700 transition"
                onClick={() => handleViewDetails(index)}
              >
                <FaEye size={20} />
              </button>
              <button
                className="p-3 text-green-600 hover:text-green-700 transition"
                onClick={() => handleToggleStatus(index)}
              >
                {task.status === "complete" ? (
                  <FaCheckCircle size={20} />
                ) : (
                  <FaTimesCircle size={20} className="text-red-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <TaskDetail
              title={selectedTask.title}
              description={selectedTask.description}
              status={selectedTask.status}
            />
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
