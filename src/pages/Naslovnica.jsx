import { Link } from "react-router";
import { kategorije } from "../konstante/constants";
import Kartica from "../components/Kartica";

const Naslovnica = () => {
  return (
    <section className="section">
      <h2>Usluge našeg autoservisa</h2>
      <p>
        Od redovitog održavanja do provjere kvarova. Pošaljite upit i dogovorite
        termin.
      </p>
      <div className="kartice">
        {kategorije.map((kategorija) => (
          <Kartica key={kategorija.naslov} podatci={kategorija} />
        ))}
      </div>
      <div className="actions">
        <Link className="gumb" to="/kontakt">
          Pošalji upit
        </Link>
        <Link className="gumb" to="/usluge">
          Pogledajte usluge
        </Link>
      </div>
    </section>
  );
};

export default Naslovnica;
