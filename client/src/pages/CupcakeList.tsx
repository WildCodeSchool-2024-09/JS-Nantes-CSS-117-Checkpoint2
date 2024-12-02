import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
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

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Étape 1 : récupérer tous les cupcakes
  const cupcakes = useLoaderData() as CupcakeArray;

  // Étape 3 : extraire tous les accessoires uniques
  const accessories = Array.from(
    new Set(cupcakes.map((cupcake) => cupcake.accessory)),
  );

  // Étape 5 : créer un état pour le filtre
  const [filter, setFilter] = useState("");

  // Filtrer les cupcakes en fonction de l’accessoire sélectionné
  const filteredCupcakes = cupcakes.filter((cupcake) =>
    filter === "" ? true : cupcake.accessory === filter,
  );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)} // Mettre à jour l'état lors de la sélection
          >
            <option value="">---</option>
            {/* Étape 4 : ajouter une option pour chaque accessoire */}
            {accessories.map((accessory) => (
              <option key={accessory} value={accessory}>
                {accessory}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Étape 2 & 5 : répéter ce bloc pour chaque cupcake filtré */}
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
