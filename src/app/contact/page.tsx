import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Footer from "../component/Footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />

      <strong> THIS IS CONTACT PAGE </strong>
      <ul className="contact">
        <h1>Contact us </h1>
        <p> feel free to reach out via email or phone </p>
      </ul>
      <Hero />
      <Footer />
    </div>
  );
};
export default ContactPage;
