import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import type { CupCakeList } from "../types/CupcakeList";

function CupcakeList() {
  const dataAcces = useLoaderData() as CupCakeList[];

  const [cupcakes, setCupcakes] = useState<null | CupCakeList[]>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((response) => response.json())
      .then((Cup) => setCupcakes(Cup));
  }, []);

  const [selectAcces, setSelectAcces] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectAcces(e.currentTarget.value);
  }

  console.warn(selectAcces);

  // const selectAccesoir = cupcakes?.filter((el) =>
  //   el.name.toLowerCase().includes(selectAcces),
  // );

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select onChange={handleChange} id="cupcake-select">
            <option value="">---</option>
            <option value={dataAcces[0].id}>Cherry</option>
            <option value={dataAcces[1].id}>Donut</option>
            <option value={dataAcces[2].id}>Chocolate</option>
            <option value={dataAcces[3].id}>Wild</option>
            <option value={dataAcces[4].id}>Christmas Candy</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* // ?.filter((cupcake) => {
          //   return cupcake.accessory === selectAcces;
          // })  */}
        {cupcakes?.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
