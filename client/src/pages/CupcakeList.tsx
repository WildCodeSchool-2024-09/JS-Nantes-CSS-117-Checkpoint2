import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useLoaderData } from "react-router-dom";
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

export type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */
interface AccessoriesI {
  id: number;
  name: string;
  slug: string;
}

function CupcakeList() {
  // Step 1: get all cupcakes
  // console.info(useLoaderData() as CupcakeArray);
  const cupcakes = useLoaderData() as CupcakeArray;

  const [accessories, setAccessories] = useState<AccessoriesI[] | null>(null);
  // Step 3: get all accessories
  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data));
  }, []);
  // Step 5: create filter state
  const [cupFilt, setCupFilt] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event) {
      setCupFilt(event.currentTarget.value);
    }
  };

  const filterTheCup = cupcakes?.filter((el) => el.accessory.includes(cupFilt));

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onChange={handleChange}>
            {accessories ? (
              accessories.map((el) => (
                <option value={el.slug} key={el.id}>
                  {el.name}
                </option>
              ))
            ) : (
              <p>no accessories</p>
            )}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {filterTheCup.map((cupcake) => (
          <Link to={`/cupecakedetails/${cupcake.id}`} key={cupcake.id}>
            <li className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          </Link>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
