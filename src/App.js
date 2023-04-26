import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/index.jsx";
import About from "./Pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ab" element={<About />} />
      </Route>
    </Routes>
  );
}
