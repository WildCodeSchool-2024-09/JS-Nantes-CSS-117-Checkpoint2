import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

export type CupcakeArray = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}[];

function CupcakeList() {
  const cupcakes = useLoaderData() as CupcakeArray;

  if (!cupcakes) {
    return <div>Error loading cupcakes!</div>;
  }

  const [filter, setFilter] = useState("");

  const accessories = Array.from(
    new Set(cupcakes.map((cupcake) => cupcake.accessory)),
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const filteredCupcakes = cupcakes.filter((cupcake) => {
    if (!filter) return true;
    return cupcake.accessory === filter;
  });

  return (
    <>
      <h1>My cupcakes</h1>

      <form className="center">
        <label>
          Filter by{" "}
          <select
            id="cupcake-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">---</option>

            {accessories.map((accessory) => (
              <option key={accessory} value={accessory}>
                {accessory}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
