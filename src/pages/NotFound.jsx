import { Link } from "react-router";
import slika from "../assets/pogresan-smjer.jpg";

const NotFound = ({
  naslov = "Stanica nije pronađena",
  putanja = "/",
  povratakTekst = "Na naslovnicu",
}) => {
  return (
    <section className="section stranica-404">
      <div className="tekst-404">
        <p className="oznaka">Izgleda da smo skrenuli s puta</p>
        <h1>{naslov}</h1>
        <p>
          Ova adresa ne vodi do traženog sadržaja. Vratite se na poznatu
          stranicu i nastavite pregledavati naš autoservis.
        </p>
        <Link className="gumb" to={putanja}>
          {povratakTekst}
        </Link>
      </div>
      <img src={slika} className="slika-404" alt="krivi smjer prometni znak" />
    </section>
  );
};

export default NotFound;
