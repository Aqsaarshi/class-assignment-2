import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";

const servicePage = () => {
  return (
    <div>
      <Header />

      <strong>THIS IS SERVICE PAGE</strong>
      <ul className="service">
        <h1>our services</h1>
        <p>We offer various services </p>
      </ul>
      <Hero />
      <Footer />
    </div>
  );
};
export default servicePage;
