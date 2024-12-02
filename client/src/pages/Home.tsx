import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./Home.css";

import Cupcake from "../components/Cupcake";

const sampleData = {
  accessory: "donut",
  color1: "var(--default-cream-color)",
  color2: "var(--default-cream-color)",
  color3: "var(--default-cream-color)",
  name: "",
};
useEffect(() => {
  fetch("http://localhost:3310/api/cupcakes.")
    .then((response) => response.json())
    .then(() => {});
});
function Home() {
  return (
    <>
      <h1>Cupcake Union</h1>
      <div className="home-cupcake">
        <Cupcake data={sampleData} />
      </div>
      <div className="home-content">
        <p>
          Welcome to the Cupcake Union 🧁 <br />
          On this application, you will:
        </p>
        <p>
          ✔️ Display cupcakes from an API <br />
          ✔️ Filter them by accessory
        </p>
        <p>
          Clic on <Link to="/instructions">Instructions</Link> to start !
        </p>
      </div>
    </>
  );
}

export default Home;
