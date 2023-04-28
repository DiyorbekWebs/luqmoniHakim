import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/index.jsx";
import About from "./Pages/About";
import ServisePage from "./Pages/Servise";
import Lakarstvo from "./Pages/Lekarstivo";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/ab" element={<About />} />
        <Route path="/uslugi" element={<ServisePage />} />
        <Route path="/lek" element={<Lakarstvo />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
