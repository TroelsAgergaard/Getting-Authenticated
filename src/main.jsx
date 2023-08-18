import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import DetailsView from "./views/DetailsView.jsx";
import ListView from "./views/ListView.jsx";
import SelectView from "./views/SelectView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ListView />} />
      <Route path="/detailsview" element={<DetailsView />} />
      <Route path="/selectview" element={<SelectView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
