import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

// Loader pour récupérer les cupcakes
const fetchCupcakes = async () => {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des cupcakes");
  }
  return response.json(); // Retourne les cupcakes au format JSON
};

// Définition des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: fetchCupcakes, // Ajout du loader ici
      },
    ],
  },
]);

// Rendu de l'application
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Votre fichier HTML doit inclure un <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

console.info;
