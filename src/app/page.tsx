export default function Home() {
  return (
    <div className="home">
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
    </div>
  );
}
