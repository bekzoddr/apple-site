import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { HEROS } from "./static/Index";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Ipad from "./components/pages/ipad/Ipad";
import Iphone from "./components/pages/iphone/Iphone";
import Mac from "./components/pages/mac/Mac";
import Store from "./components/pages/store/Store";
import Vision from "./components/pages/vision/Vision";
import Watch from "./components/pages/watch/Watch";
import Loading from "./components/loading/Loading";
import { Route, Routes } from "react-router-dom";
function App() {
  let heros = HEROS?.map((el) => <Hero key={el.id} {...el} />);

  return (
    <div className="App">
      <Loading />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
