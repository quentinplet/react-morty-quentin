import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Episodes from "../pages/episodes/Episodes";
import Episode from "../pages/episodes/Episode";
import { useEffect } from "react";
import ErrorPage from "../pages/error/ErrorPage";

export default function Router() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
