import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


import Header from "./components/Header";
import Footer from "./components/Footer";


import "./styles/estilos.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;