import { Outlet } from "react-router-dom";
import Navbar from "../1-navbar/Navbar";
import Footer from "../4-footer/Footer";

function App() {
  return (
    <section className="">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </section>
  );
}

export default App;
