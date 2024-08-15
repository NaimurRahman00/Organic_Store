import { Outlet } from "react-router-dom";
import Navbar from "../1-navbar/Navbar";
import Footer from "../4-footer/Footer";

function App() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer/>
    </section>
  );
}

export default App;
