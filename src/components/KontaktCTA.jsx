import { Link } from "react-router";

const KontaktCTA = ({
  naslov = "Niste sigurni odakle početi?",
  opis = "Opišite što ste primjetili i zajedno ćemo dogovoriti sljedeći korak.",
}) => {
  return (
    <section className="section kontakt">
      <div className="kontakt-text">
        <p className="oznaka">Dogovorite sljedeći korak</p>
        <h2>{naslov}</h2>
        <p>{opis}</p>
      </div>
      <div className="kontakt-box">
        <p>Pošaljite pitanje ili dogovorite pregled vozila.</p>
        <Link className="gumb" to="/kontakt">
          Javite nam se
        </Link>
      </div>
    </section>
  );
};

export default KontaktCTA;
