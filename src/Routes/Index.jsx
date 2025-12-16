import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/Pages/Dashboard";
import Profile from "@/Pages/Profile";
import Infografis from "@/Pages/Infografis";
import Berita from "@/Pages/Berita";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/infografis" element={<Infografis />} />
      <Route path="/berita" element={<Berita />} />
    </Routes>
  );
};

export default AppRouter;
