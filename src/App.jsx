import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Photo from "./pages/photo";
import Location from "./pages/location";
import Contact from "./pages/contact";
import GalleryForm1 from "./pages/galleryform";
import Log from "./pages/log";
import Signup from "./components/signup/signup";
import About from "./pages/about";


function App() {
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/gallery" element={<Photo />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galleryform" element={<GalleryForm1 />} />
        <Route path="/login" element={<Log />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
