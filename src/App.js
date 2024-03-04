import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Arts from "./pages/Arts";
import Pagenotfound from "./pages/Pagenotfound";
import SignInSide from "./pages/LoginSignup";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/login" element={<SignInSide />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
