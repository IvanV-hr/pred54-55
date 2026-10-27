import { Link, Navigate, useLocation } from "react-router";

const Potvrda = () => {
  const { state } = useLocation();

  if (!state?.ime && !state?.email) {
    return <Navigate to="/kontakt" replace />;
  }

  return (
    <section className="section potvrda">
      <span className="potvrda-oznaka">OK</span>
      <h1>
        {state.ime
          ? "Poruka je zabilježena."
          : "Prijava na novosti je zabilježena."}
      </h1>
      <p>
        {state.ime
          ? `Hvala na javljanju, ${state.ime}.`
          : `Hvala!, adresa za novosti: ${state.email} `}
      </p>
      <Link to="/" className="gumb">
        Na naslovnicu
      </Link>
    </section>
  );
};

export default Potvrda;
