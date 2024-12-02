import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

// Exemple de cupcakes pour initialiser les données
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;

function CupcakeList() {
  console.info(useLoaderData() as CupcakeArray);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {}
        {sampleCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
