import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Episodes from "../pages/episodes/Episodes";
import Episode from "../pages/episodes/Episode";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
    </>
  );
}
