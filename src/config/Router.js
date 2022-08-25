import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

function Router() {
  return (
    <Routes>
      <Route
        path="/:category/search/:keyword"
        element={<Catalog title="Movies" />}
      />
      <Route
        path="/:category/:id"
        element={<Detail />}
      />
      <Route
        path="/:category"
        element={<Catalog />}
      />
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  );
}

export default Router;
 