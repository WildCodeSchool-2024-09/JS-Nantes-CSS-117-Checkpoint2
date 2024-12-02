import { useEffect, useState } from "react";
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

type Accessories = {
  id: number;
  name: string;
  slug: string;
}[];

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

interface CupcakeArrayPlus extends CupcakeArray {
  cupcakeArray: CupcakeArray[];
  setCupcakeArray: (cupcakeArray: CupcakeArray) => void;
}

function CupcakeList() {
  const [accessories, setAccessories] = useState<Accessories>();
  const [cupcakeArray, setCupcakeArray] = useState<CupcakeArrayPlus>();
  // Step 1: get all cupcakes
  useEffect(() => {
    const url = "http://localhost:3310/api/cupcakes";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCupcakeArray(data);
      });
  }, []);
  console.info(cupcakeArray);

  // Step 3: get all accessories
  useEffect(() => {
    const url = "http://localhost:3310/api/accessories";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAccessories(data);
      });
  }, []);
  console.info(accessories);

  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{"accessory"}
          <select id="cupcake-select">
            {accessories?.map((el) => (
              <option key={el.id} value={el.name}>
                {el.slug}
              </option>
            ))}
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake - NOTE: j'avais une erreur 'undefined' quand j'ai essayé d'utiliser le data que j'ai fetché - j'imagine que c'est a cause de la manque du loader ? */}
        {cupcakeArray?.map((el) => (
          <li key={el.id} className="cupcake-item">
            <Cupcake data={el} />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* {<li className="cupcake-item">
          <Cupcake data={sampleCupcakes[0]} />
        </li> } */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
