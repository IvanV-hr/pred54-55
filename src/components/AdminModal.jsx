import { Button } from "./Button";

const AdminModal = ({ vrstaPodatka, onZatvori, detalji, onPromjeniEmail }) => {
function promjeniEmail() {
        const email = window.prompt("Unesite novi email", detalji.email)
        if(email) onPromjeniEmail(email.trim())
    }

  return (
    <div className="modal-overlay" onClick={onZatvori}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-zaglavlje">
          <h2>
            {vrstaPodatka === "users"
              ? "Detalji zaposlenika"
              : "Detalji komentara"}
          </h2>
          <Button onClick={onZatvori}>Zatvori</Button>
        </div>
        {vrstaPodatka === "users" ? (
          <div className="modal-sadrzaj">
            <h3>
              {detalji.firstName} {detalji.lastName}
            </h3>
            <p>
              <strong>Adresa e-pošte: </strong>
              {detalji.email}
            </p>
            <p>
              <strong>Oznaka zaposlenika: </strong>
              {detalji.username}
            </p>
            <p>
              <strong>Telefon: </strong>
              {detalji.phone}
            </p>
            <p>
              <strong>Dob: </strong>
              {detalji.age}
            </p>
            <p>
              <strong>Grad: </strong>
              {detalji.address.city}
            </p>
            <Button onClick={promjeniEmail}>Promijenite e-poštu</Button>
          </div>
        ) : (
          <div className="modal-sadrzaj">
            <h3>{detalji.user.fullName}</h3>
            <p>
              <strong>Oznaka zaposlenika: </strong>
              {detalji.user.username}
            </p>
            <p>
              <strong>Broj Reakcija: </strong>
              {detalji.likes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
