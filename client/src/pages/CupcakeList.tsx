import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import type { accessoriesList } from "../types/accessories.d";

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
  // Step 1: get all cupcakes
  const cupcakes = useLoaderData() as CupcakeArray;

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<[] | accessoriesList[]>([]);
  useEffect(() => {
    async function getAccesories() {
      const res = await fetch("http://localhost:3310/api/accessories");
      const accs = await res.json();
      setAccessories(accs as accessoriesList[]);
    }
    getAccesories();
  }, []);

  // Step 5: create filter state
  const [filter, setFilter] = useState<null | string>(null);

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setFilter(e.target.value.toLowerCase());
  }

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select onChange={handleSelectChange} id="cupcake-select">
            {accessories.map((accessorie: accessoriesList) => (
              <option key={accessorie.id}>{accessorie.name}</option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {cupcakes.map((cupcake) => {
          if (!filter || cupcake.accessory === filter)
            return (
              <Link key={cupcake.id} to={`${cupcake.id}`}>
                <li className="cupcake-item">
                  <Cupcake data={cupcake} />
                </li>
              </Link>
            );
        })}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
