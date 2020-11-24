import "./navbarStyles.css";

export default function NavBar() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="background_styles.css" />
        <link rel="stylesheet" href="styles.css" />
        <title>Responsive Navbar</title>
      </head>
      <body>
        <nav className="navbar">
          <div className="brand-title">Brand Name</div>
          <div className="navbar-links">
            <ul>
              <li>
                <a href="link-nav-bar">Home</a>{" "}
              </li>
              <li>
                <a href="link-nav-bar">Abount</a>{" "}
              </li>
              <li>
                <a href="link-nav-bar">Contact</a>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </body>
    </>
  );
}
