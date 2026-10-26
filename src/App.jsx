import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import HeroSekcija from "./components/HeroSekcija.jsx";
import Naslovnica from "./pages/Naslovnica.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import { Route, Routes } from "react-router";
import Usluge from "./pages/Usluge.jsx";
import DetaljiUsluge from "./pages/DetaljiUsluge.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <Header />
      <HeroSekcija />
      <main id="glavni-sadrzaj">
        <Routes>
          <Route path="/" element={<Naslovnica />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/usluge/:id" element={<DetaljiUsluge />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
