import Footer from "./components/Footer";
import { useFetchAll, useFetchOne } from "./hooks/useFetch";
import Home from "./pages/Home";
import Episode from "./pages/episodes/Episode";
import Episodes from "./pages/episodes/Episodes";
import Router from "./router/router";

export default function App() {
  // console.log(useFetchAll());
  // console.log(useFetchOne());
  return (
    <>
      {/* <Episode /> */}
      {/* <Episodes /> */}
      {/* <Home /> */}
      <Router />
      <Footer />
    </>
  );
}
