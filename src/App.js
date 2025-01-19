import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
import TaskForm from "./components/TaskForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Banner />
      <div className="mx-2 mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-task" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
