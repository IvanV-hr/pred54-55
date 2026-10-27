import { useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

const PretplataForma = () => {
  const navigate = useNavigate();

  const [podatci, setPodatci] = useState({
    email: "",
    privola: false,
    obavijest: "",
  });

  function promijeniPodatke(naziv, vrijednost) {
    setPodatci({
      ...podatci,
      [naziv]: vrijednost,
      obavijest: "",
    });
  }

  function posalji(e) {
    e.preventDefault();

    if (
      !/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(podatci.email.trim()) ||
      !podatci.privola
    ) {
      setPodatci({
        ...podatci,
        obavijest: `Prijava za email ${podatci.email} nije prosla.`,
      });
      return;
    }

    navigate("/novosti/potvrda", { state: { email: podatci.email.trim() } });
  }

  return (
    <form className="forma" onSubmit={posalji} noValidate>
      <label htmlFor="email">Adresa e-pošte za novosti</label>
      <input
        id="email"
        name="email"
        value={podatci.email}
        type="email"
        onChange={(e) => promijeniPodatke(e.target.name, e.target.value)}
      />
      <label htmlFor="privola" className="privola">
        <input
          type="checkbox"
          name="privola"
          checked={podatci.privola}
          onChange={(e) => promijeniPodatke(e.target.name, e.target.checked)}
        />
        Želim primati novosti o uslugama autoservisa
      </label>
      {podatci.obavijest && <p>{podatci.obavijest}</p>}
      <Button type="Submit">Prijavite se na novosti</Button>
    </form>
  );
};

export default PretplataForma;
