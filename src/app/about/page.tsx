import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Footer from "../component/Footer/Footer";
const Aboutpage = () => {
  return (
    <div>
      <Header />

      <h1>
        {" "}
        <strong>THIS IS ABOUT PAGE</strong>
      </h1>
      <ul className="about">
        <h1>About us </h1>
        <p> Information about the company </p>
      </ul>
      <Hero />
      <Footer />
    </div>
  );
};
export default Aboutpage;
