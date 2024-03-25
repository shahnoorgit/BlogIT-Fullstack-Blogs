import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
