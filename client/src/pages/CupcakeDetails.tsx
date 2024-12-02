import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

const sampleCupcakes = {
  id: 10,
  accessory_id: "4",
  accessory: "wcs",
  color1: "blue",
  color2: "white",
  color3: "red",
  name: "France",
};

function CupcakeDetails() {
  type CupcakeArray = typeof sampleCupcakes;

  const cupcake = useLoaderData() as CupcakeArray;

  return <Cupcake data={cupcake} />;
}

export default CupcakeDetails;
