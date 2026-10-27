import Kartica from "../components/Kartica";
import KontaktCTA from "../components/KontaktCTA";
import { nacinRada } from "../konstante/constants";
import slikaAlat from "../assets/alat.jpg";
import slikaKutijaAlata from "../assets/alat-kutija.jpg";

const ONama = () => {
  return (
    <>
      <section className="section o-nama-uvod">
        <p className="oznaka">Upoznajte Autoservis FE</p>
        <h2>Briga o vozilu počinje dobrim održavanjem</h2>
        <p>
          Pomažemo vam pri redovitom održavanju, provjeri kočnica i uzroku
          problema na vozilu. Važno nam je da razumijete što se radi i zašto.
        </p>
        <p>
          Prije svakog zahvata provjeravamo zatečeno stanje i dogovaramo
          potrebne radove. Nakon servisa objašnjavamo što je učinjeno i na što
          obratiti pozornost.
        </p>
        <div className="kartice">
          {nacinRada.map((nacinRada) => (
            <Kartica
              key={nacinRada.naslov}
              podatci={nacinRada}
              varijanta="pristup"
            />
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Od pregleda do održavanja</h2>
        <div className="kartice">
          <Kartica
            varijanta="img"
            podatci={{
              slika: slikaAlat,
              opisSlike: "Alat za popravak auta",
              opis: "Redovito održavanje",
            }}
          />
          <Kartica
            varijanta="img"
            podatci={{
              slika: slikaKutijaAlata,
              opisSlike: "Alat za popravak auta u kutiji",
              opis: "Dijagnostika auta",
            }}
          />
        </div>
      </section>
      <KontaktCTA />
    </>
  );
};

export default ONama;
