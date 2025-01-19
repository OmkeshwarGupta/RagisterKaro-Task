import React from "react";

const TaskDetail = ({ title, description, status }) => {
  return (
    <div className="mt-6 max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-[#FEF3EF] shadow-sm">
      <h2 className="text-center text-2xl font-semibold mb-6">{title}</h2>
      
      {/* Description with label */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">Description:</label>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      {/* Status with label */}
      <div className="flex items-center justify-center">
        <label className="block text-sm font-bold text-gray-700 mr-2">Status:</label>
        <span
          className={`px-4 py-1 rounded-full text-white text-sm ${
            status === "complete" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status === "complete" ? "Complete" : "Incomplete"}
        </span>
      </div>
    </div>
  );
};

export default TaskDetail;
