import "./navbarStyles.css";

export default function NavBar() {
  return (
    <>
      <title>Responsive Navbar</title>

      <nav className="navbar">
        <div className="brand-title">Brand Name</div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/home">Home</a>{" "}
            </li>
            <li>
              <a href="/about">About</a>{" "}
            </li>
            <li>
              <a href="/todos">Todos</a>{" "}
            </li>
            <li>
              <a href="/contact">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
