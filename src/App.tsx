import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useFetchAll, useFetchOne } from "./hooks/useFetch";
import Home from "./pages/Home";
import Episode from "./pages/episodes/Episode";
import Episodes from "./pages/episodes/Episodes";
import Router from "./router/router";
import ScrollToTop from "./router/scrollToTop";

export default function App() {
  // console.log(useFetchAll());
  // console.log(useFetchOne());
  return (
    <div className="relative">
      {/* <Episode /> */}
      {/* <Episodes /> */}
      {/* <Home /> */}
      <Navbar />
      <Router />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
