import React from "react";
import { lazy, Suspense } from 'react';
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));;
import "./index.css";
import Loader from "./pages/Loader/Loader";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
