import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./StateManagement/ProductContext.jsx";
import { FilterContextProvider } from "./StateManagement/FilterContext.jsx";
// import './API/MirageFetching.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductProvider>
  </React.StrictMode>
);
