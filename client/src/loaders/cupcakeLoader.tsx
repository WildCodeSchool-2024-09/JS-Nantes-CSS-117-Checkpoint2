import type { LoaderFunction } from "react-router-dom";

const CupcakeLoader: LoaderFunction = async () => {
  return fetch("http://localhost:3310/api/cupcakes")
    .then((response) => response.json())
    .then((result) => result);
};

export default CupcakeLoader;
