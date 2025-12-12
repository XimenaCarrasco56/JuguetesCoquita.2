import { useState } from "react";
import "../styles/estilos.css";

export default function Productos() {
  const [modalData, setModalData] = useState({
    open: false,
    name: "",
    price: "",
    img: "",
  });

  const abrirModal = (data) => {
    setModalData({
      open: true,
      name: data.name,
      price: data.price,
      img: data.img,
    });
  };

  const cerrarModal = () => {
    setModalData({ ...modalData, open: false });
  };

  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">Juguetería Coquita</h1>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/#sobre">Sobre Nosotros</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* -------------------- SECCIÓN ESTÁTICA -------------------- */}
      <section id="destacados" className="featured">
        <div className="container">
          <h2>Productos Destacados</h2>

          <div className="grid">

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Spider-Man Titan Hero", price: "$230 mx", img: "/img/spidy2.png.jpeg" })
            }>
              <img src="/img/spidy2.png.jpeg" alt="Spider-Man Titan Hero" />
              <h3>Spider-Man Titan Hero</h3>
              <p>Figura articulada de tu héroe favorito.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Patitas Peluche", price: "$35 mx", img: "/img/patitas.png.jpeg" })
            }>
              <img src="/img/patitas.png.jpeg" alt="Patitas Peluche" />
              <h3>Patitas Peluche</h3>
              <p>Suave y adorable compañero para abrazar.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Estrellita Musical", price: "$35 mx", img: "/img/estrella.png.jpeg" })
            }>
              <img src="/img/estrella.png.jpeg" alt="Estrellita Musical" />
              <h3>Estrellita Musical</h3>
              <p>Brilla y canta melodías suaves.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Hulk Figura de Acción", price: "$65 mx", img: "/img/hulk.png.jpeg.jpeg" })
            }>
              <img src="/img/hulk.png.jpeg.jpeg" alt="Hulk Figura de Acción" />
              <h3>Hulk Figura de Acción</h3>
              <p>El increíble Hulk para los más fuertes del hogar.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Barbie Fashion Star", price: "$270 mx", img: "/img/babrie.png.jpeg" })
            }>
              <img src="/img/babrie.png.jpeg" alt="Barbie Fashion Star" />
              <h3>Barbie Fashion Star</h3>
              <p>La muñeca más glamorosa con atuendos únicos.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Mario Bros Figura", price: "$250 mx", img: "/img/mario.png.jpeg" })
            }>
              <img src="/img/mario.png.jpeg" alt="Mario Bros Figura" />
              <h3>Mario Bros Figura</h3>
              <p>Salta al mundo de los videojuegos con Mario.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Stitch Peluche", price: "$280 mx", img: "/img/stitch.png.jpeg" })
            }>
              <img src="/img/stitch.png.jpeg" alt="Stitch Peluche" />
              <h3>Stitch Peluche</h3>
              <p>El travieso extraterrestre en versión abrazable.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Juego Basta!", price: "$180 mx", img: "/img/basta.png.jpeg" })
            }>
              <img src="/img/basta.png.jpeg" alt="Juego Basta!" />
              <h3>Juego Basta!</h3>
              <p>Diviértete adivinando palabras.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Set Carritos Turbo", price: "$10 mx", img: "/img/carritos.png.jpeg" })
            }>
              <img src="/img/carritos.png.jpeg" alt="Set Carritos Turbo" />
              <h3>Set Carritos Turbo</h3>
              <p>Mini autos coleccionables.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Señor Cara de Papa", price: "$252 mx", img: "/img/caradepapa.png.jpeg" })
            }>
              <img src="/img/caradepapa.png.jpeg" alt="Señor Cara de Papa" />
              <h3>Señor Cara de Papa</h3>
              <p>Arma y cambia su cara con piezas divertidas.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Nerf Blaster Turbo", price: "$210 mx", img: "/img/nerf1.png.jpeg" })
            }>
              <img src="/img/nerf1.png.jpeg" alt="Nerf Blaster Turbo" />
              <h3>Nerf Blaster Turbo</h3>
              <p>Dispara con precisión.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Spider-Man Junior", price: "$65 mx", img: "/img/spidy1.png.jpeg" })
            }>
              <img src="/img/spidy1.png.jpeg" alt="Spider-Man Junior" />
              <h3>Spider-Man Junior</h3>
              <p>Versión pequeña del héroe arácnido.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Stitch Azul Peluche", price: "$25 mx", img: "/img/stitchazul.png.jpeg" })
            }>
              <img src="/img/stitchazul.png.jpeg" alt="Stitch Azul Peluche" />
              <h3>Stitch Azul Peluche</h3>
              <p>Stitch azul celeste edición especial.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Pez Saltarín", price: "$35 mx", img: "/img/pez.png.jpeg.jpeg" })
            }>
              <img src="/img/pez.png.jpeg.jpeg" alt="Pez Saltarín" />
              <h3>Pez Saltarín</h3>
              <p>Juguete divertido de goma.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Pantera Negra Figura", price: "$65 mx", img: "/img/pantera.png.jpeg" })
            }>
              <img src="/img/pantera.png.jpeg" alt="Pantera Negra Figura" />
              <h3>Pantera Negra Figura</h3>
              <p>El rey de Wakanda.</p>
            </div>

            <div className="product-card" onClick={() =>
              abrirModal({ name: "Capitán América Escudo", price: "$65 mx", img: "/img/ca.png.jpeg" })
            }>
              <img src="/img/ca.png.jpeg" alt="Capitán América Escudo" />
              <h3>Capitán América Escudo</h3>
              <p>Defiende la justicia.</p>
            </div>

          </div>
        </div>
      </section>
      {/* -------------------------------------------------------- */}

      {/* MODAL */}
      {modalData.open && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={cerrarModal}>&times;</span>

            <img src={modalData.img} alt="" />
            <h3>{modalData.name}</h3>
            <p>{modalData.price}</p>
          </div>
        </div>
      )}

      <footer>
        <div className="container">
          
        </div>
      </footer>
    </>
  );
}
