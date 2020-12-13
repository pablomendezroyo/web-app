import "./navbarStyles.css";

export default function NavBar() {
  return (
    <>
      <title>Responsive Navbar</title>

      <nav className="navbar">
        <div className="brand-title">DAppNode</div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/home">Inicio</a>{" "}
            </li>
            <li>
              <a href="/about">Sobre mí</a>{" "}
            </li>
            <li>
              <a href="/content">Contenido</a>{" "}
            </li>
            <li>
              <a href="/contact">Contacto</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
