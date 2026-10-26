import { Link } from "react-router";

export function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <Link className="footer-logo" to="/">
          Autoservis FE
        </Link>
        <nav aria-label="Navigacija u podnozju">
          <ul className="footer-linkovi">
            <li>
              <Link to="/">Naslovnica</Link>
            </li>
            <li>
              <Link to="/usluge">Usluge</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
