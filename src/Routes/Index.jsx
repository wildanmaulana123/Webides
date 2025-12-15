import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/Pages/Dashboard";
import Profile from "@/Pages/Profile";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
