import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";
import Todo from "./todo";
import Work from "./work";
import Settings from "./settings";

export default function Root() {
  return (
    <div className="app">

      {/* DRAG SECTION */}
      <div className="top" />

      <div className="app-wrapper">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Todo />} />
            <Route path="/work" element={<Work />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}
