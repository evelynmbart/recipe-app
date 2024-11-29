import { Route, Routes } from "react-router-dom";
import { Cuisine } from "./Cuisine";
import { Home } from "./Home";

export function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine" element={<Cuisine />} />
    </Routes>
  );
}
