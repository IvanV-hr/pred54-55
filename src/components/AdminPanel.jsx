import { useState } from "react";
import { Button } from "./Button";
import AdminModal from "./AdminModal";

const AdminPanel = ({
  vrstaPodatka,
  naslov,
  podatci,
  onObrisi,
  onPrikazDetalja,
  onPromjeniEmail
}) => {
  const [detalji, setDetalji] = useState(null);

  async function prikaziDetalje(id) {
    setDetalji(await onPrikazDetalja(vrstaPodatka, id));
  }

  async function promjeniEmail(email) {
    setDetalji(await onPromjeniEmail(email, detalji.id));
  }

  return (
    <div className="admin-panel">
      <div className="admin-zaglavlje">
        <h2>{naslov}</h2>
        <span className="admin-broj">{podatci.length} zapisa</span>
      </div>
      <ul className="admin-lista">
        {podatci.map((podatak) => (
          <li key={podatak.id} className="admin-podatak">
            <h3>
              {vrstaPodatka === "users"
                ? `${podatak.firstName} ${podatak.lastName}`
                : `${podatak.user.fullName}`}
            </h3>
            <p>
              {vrstaPodatka === "users"
                ? `${podatak.email}`
                : `${podatak.body}`}
            </p>
            <div className="admin-actions">
              <Button onClick={() => prikaziDetalje(podatak.id)}>
                Prikažite detalje
              </Button>
              <Button
                className="gumb gumb-povratak"
                onClick={() => onObrisi(vrstaPodatka, podatak.id)}
              >
                Obriši
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {detalji && (
        <AdminModal
          vrstaPodatka={vrstaPodatka}
          detalji={detalji}
          onPromjeniEmail={promjeniEmail}
          onZatvori={() => setDetalji(null)}
        />
      )}
    </div>
  );
};

export default AdminPanel;
