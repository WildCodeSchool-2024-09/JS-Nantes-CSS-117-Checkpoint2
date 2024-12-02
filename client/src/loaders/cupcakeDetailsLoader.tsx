import type { LoaderFunction } from "react-router-dom";

const CupcakeDetailsLoader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  return fetch(`http://localhost:3310/api/cupcakes/${id}`)
    .then((response) => response.json())
    .then((result) => result);
};

export default CupcakeDetailsLoader;
