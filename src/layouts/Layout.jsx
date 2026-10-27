import { Outlet } from "react-router";
import { Header } from "../components/Header";
import HeroSekcija from "../components/HeroSekcija";
import { Footer } from "../components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <HeroSekcija />
      <main id="glavni-sadrzaj">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
