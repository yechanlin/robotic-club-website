import "./index.css";

export default function Header() {
  return (
    <header>
      <NavBar />
    </header>
  );
}

function NavBar() {
  return (
    <nav>
      <ul className="nav-items">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Robots</a>
        </li>
        <li>
          <a href="#">Sponsors</a>
        </li>
        <li>
          <a href="#">Recruitment</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
