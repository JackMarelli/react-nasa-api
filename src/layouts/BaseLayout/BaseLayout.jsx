import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./BaseLayout.module.scss";

export default function BaseLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="min-h-screen h-fit">{children}</div>
      <Footer />
    </>
  );
}
