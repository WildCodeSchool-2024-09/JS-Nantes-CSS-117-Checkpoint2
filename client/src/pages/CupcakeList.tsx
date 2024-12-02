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
type AccessoryArray = { id: number; name: string; slug: string }[];
type data = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const data = useLoaderData() as data;
  const [accessoire, setAccessoire] = useState();

  // console.info(useLoaderData() as data);

  // Step 3: get all accessories
  // useEffect(() => {
  //   fetch("http://localhost:3310/api/accessories")
  //     .then((response) => response.json)
  //     .then((accessory) => setAccessoire(accessory));
  // }, []);

  console.info(accessoire);
  // Step 5: create filter state
  const handleChange = () => {
    setAccessoire(accessoire);
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select onChange={handleChange} id="cupcake-select">
            <option value="">---</option>
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {data.map((el) => {
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
