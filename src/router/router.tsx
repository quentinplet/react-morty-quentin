import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Episodes from "../pages/episodes/Episodes";
import Episode from "../pages/episodes/Episode";
import { useEffect } from "react";

export default function Router() {
  const location = useLocation();
  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

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
