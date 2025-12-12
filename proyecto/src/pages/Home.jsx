import "../styles/estilos.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header>
        <div className="container">
          <h1 className="logo">Juguetería Coquita</h1>
          <br />
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/#sobre">Sobre Nosotros</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container">
          <h1>¡Bienvenidos a Juguetería Coquita!</h1>
          <p>
            Donde la diversión nunca termina. Descubre juguetes mágicos para niños de todas las edades.
          </p>
          <Link to="/productos" className="cta-button">
            Explora Nuestros Juguetes
          </Link>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="destacados" className="featured">
        <div className="container">
          <h2>Productos Destacados</h2>
          <div className="grid">
            <div className="product-card">
              <img src="/img/spidy2.png.jpeg" alt="Spider-Man Titan Hero" />
              <h3>Spider-Man Titan Hero</h3>
              <p>Figura articulada de tu héroe favorito.</p>
            </div>

            <div className="product-card">
              <img src="/img/babrie.png.jpeg" alt="Barbie Fashion Star" />
              <h3>Barbie Fashion Star</h3>
              <p>La muñeca más glamorosa y moderna.</p>
            </div>

            <div className="product-card">
              <img src="/img/stitch.png.jpeg" alt="Stitch Peluche" />
              <h3>Stitch Peluche</h3>
              <p>El tierno extraterrestre en versión abrazable.</p>
            </div>
          </div>

          <Link to="/productos" className="cta-button">
            Ver Más Productos
          </Link>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="sobre" className="about">
        <div className="container">
          <h2><q>¿Quiénes somos?</q></h2>
          <p>
            Somos una juguetería familiar apasionada por llevar alegría a los más pequeños.
            Con años de experiencia, seleccionamos los mejores juguetes educativos y divertidos,
            desde peluches hasta juegos de mesa. ¡Ven y crea recuerdos inolvidables!
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          
          <p>
            <Link to="/aviso">Visita nuestro Aviso de privacidad</Link>
          </p>
        </div>
      </footer>
    </>
  );
}