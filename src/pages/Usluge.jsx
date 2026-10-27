import Kartica from "../components/Kartica";
import KontaktCTA from "../components/KontaktCTA";
import { usluge } from "../konstante/constants";

const Usluge = () => {
  return (
    <>
      <section className="section">
        <h2>Ponuda usluga</h2>
        <p>Cijene su okvirne i ovise o vozilu te potrebnim dijelovima.</p>
        <div className="kartice">
          {usluge.map((usluga) => (
            <Kartica
              key={usluga.id}
              podatci={usluga}
              putanja={`/usluge/${usluga.id}`}
              varijanta="usluga"
            />
          ))}
        </div>
      </section>
      <KontaktCTA />
    </>
  );
};

export default Usluge;
