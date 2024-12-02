import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
const [data, setData] = useState(0);
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

    loader: "cupcakesLoader",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
    loader: "cupcakesLoader",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
    loader: "cupcakesLoader",
  },
];

type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  });
  const numbers = [1, 2, 3, 4];
  const new_numbers = [];
  for (const i = 0; i < numbers.length; ) {
    new_numbers[i] = numbers[i] * 2;
  }

  // Step 1: get all cupcakes
  console.info(useLoaderData() as CupcakeArray);

  // Step 3: get all accessories

  // Step 5: create filter state

  return (
    <>
      <section>
        <data />
      </section>

      <h1>My cupcakes</h1>
      <form className="center">
        <div>
          <p>{data}</p>
        </div>
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="christmas-candy">--</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
