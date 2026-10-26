import { useState } from "react";
import { Button } from "./Button.jsx";
import { Link } from "react-router";

export function Header() {
  const [otvoren, setOtvoren] = useState(false);

  return (
    <>
      <a className="skip-veza" href="#glavni-sadrzaj">
        Preskoci na sadrzaj
      </a>
      <header>
        <div className="header-wrapper">
          <Link className="header-logo" to="/">
            Autoservis FE
          </Link>
          <Button
            className="hamburger"
            aria-label={otvoren ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-controls="header-nav"
            aria-expanded={otvoren}
            onClick={() => setOtvoren(!otvoren)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Button>
          <nav
            id="header-nav"
            className={`nav-izbornik ${otvoren ? "otvoren" : ""}`}
            aria-label="Glavna navigacija"
          >
            <ul className="header-linkovi">
              <li>
                <Link to="/" onClick={() => setOtvoren(false)}>
                  Naslovnica
                </Link>
              </li>
              <li>
                <Link to="/usluge" onClick={() => setOtvoren(false)}>
                  Usluge
                </Link>
              </li>
              <li>
                <Link to="/kontakt" onClick={() => setOtvoren(false)}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
