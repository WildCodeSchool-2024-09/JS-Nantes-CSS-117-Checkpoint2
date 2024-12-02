import { useEffect, useState } from "react";
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
type AccessoryArray = { id: number; name: string; slug: string }[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  // console.info(useLoaderData() as CupcakeArray);
  const cupCakes = useLoaderData() as CupcakeArray;
  // console.log(cupCakes);
  // console.log(typeof cupCakes);

  // Step 3: get all accessories

  const [data, setData] = useState<AccessoryArray>();

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  // console.log(data);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            {data?.map((accessory) => {
              return (
                <option key={accessory.id} value="">
                  {accessory.name}
                </option>
              );
            })}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {cupCakes.map((el) => {
          return (
            <li key={el.id} className="cupcake-item">
              <Cupcake data={el} />
            </li>
          );
        })}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
