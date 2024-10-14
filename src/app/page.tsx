import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
import React from "react";

export default function Home() {
  return (
    <div className="home">
      <Header />

      <h1>
        {" "}
        <strong>THIS IS HOME PAGE </strong>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
        </ul>
      </nav>
      <Hero />
      <Footer />
    </div>
  );
}
