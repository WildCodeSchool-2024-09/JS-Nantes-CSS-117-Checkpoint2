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
  const loaderData = useLoaderData() as CupcakeArray;

  // Step 1: get all cupcakes

  console.info(useLoaderData() as CupcakeArray);
  console.info(loaderData);

  // Step 3: get all accessories

  const accessories = Array.from(
    new Set(loaderData.map((cupcake) => cupcake.accessory)),
  );
  console.info(accessories);

  // Step 5: create filter state
  const [cakeAccessory, setCakeAccessory] = useState("");
  const filteredCupcakes =
    cakeAccessory === ""
      ? loaderData
      : loaderData.filter((cupcake) => cupcake.accessory === cakeAccessory);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(e) => {
              setCakeAccessory(e.target.value);
              console.info(e.target.value);
            }}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory} value={accessory}>
                {accessory}
              </option>
            ))}

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {filteredCupcakes.map((el) => (
          <li key={el.id} className="cupcake-item">
            <Cupcake
              data={{
                accessory: el.accessory,
                color1: el.color1,
                color2: el.color2,
                color3: el.color3,
                name: el.name,
              }}
            />
          </li>
        ))}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
