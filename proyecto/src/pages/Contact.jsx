import { Link } from "react-router-dom";


function Contact() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <div className="container">
          <h1 style={styles.logo}>Juguetería Coquita</h1>

          <nav>
            <ul style={styles.navList}>
              <li><Link to="/" style={styles.navLink}>Inicio</Link></li>
              <li><Link to="/#sobre" style={styles.navLink}>Sobre Nosotros</Link></li>
              <li><Link to="/productos" style={styles.navLink}>Productos</Link></li>
              <li><Link to="/contacto" style={styles.navLink}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* SECTION CONTACT */}
      <section id="contacto" style={styles.contact}>
        <h2 style={styles.title}>Contáctanos</h2>

        <div style={styles.card}>
          <ul style={styles.list}>
            <li><i className="fa-solid fa-location-dot" style={styles.icon}></i><strong>Dirección:</strong> Fraccionamiento Hacienda Cuautitlán, calle Hacienda el Nogal</li>
            <li><i className="fa-solid fa-map-pin" style={styles.icon}></i><strong>Referencia:</strong> Papelería-Internet frente a la Casa de la Cultura, cerca de la torre de agua</li>
            <li><i className="fa-solid fa-phone" style={styles.icon}></i><strong>Teléfono:</strong> (55) 1900 3914</li>
            <li><i className="fa-solid fa-envelope" style={styles.icon}></i><strong>Correo:</strong> xrepizo9@gmail.com</li>
          </ul>

          <p><strong>¡Estamos aquí para ayudarte a encontrar el juguete perfecto!</strong></p>
        </div>

        {/* MAPA */}
        <div style={styles.mapContainer}>
          <h3>¡Visítanos!</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.979178395434!2d-99.1380003!3d19.4770001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f02c3a7a7aef%3A0x1d2b3a66f08a5d2b!2sFraccionamiento%20Hacienda%20Cuautitl%C3%A1n%2C%20Calle%20Hacienda%20el%20Nogal%2C%20Cuautitl%C3%A1n%20Izcalli%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1730065200000!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Juguetería Coquita. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Contact;

/* --- ESTILOS EN OBJETO --- */
const styles = {
  header: {
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "1rem 0",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
  },

  logo: {
    fontSize: "1.8rem",
    fontWeight: "700"
  },

  navList: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem"
  },

  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.3s"
  },

  contact: {
    flex: 1,
    padding: "3rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  title: {
    color: "#2c3e50",
    fontSize: "2.5rem",
    marginBottom: "1.5rem"
  },

  card: {
    background: "white",
    borderRadius: "15px",
    padding: "2rem 3rem",
    maxWidth: "600px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    animation: "fadeIn 1s ease-in-out"
  },

  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.1rem",
    lineHeight: "1.8"
  },

  icon: {
    color: "#4a90e2",
    marginRight: "10px"
  },

  mapContainer: {
    marginTop: "2rem",
    width: "100%",
    maxWidth: "700px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "15px",
    overflow: "hidden"
  },

  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "1.5rem 0",
    marginTop: "auto"
  }
};

