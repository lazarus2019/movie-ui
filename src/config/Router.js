import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Style from "../pages/Style";

function Router() {
  return (
    <Routes>
      <Route
        path="/:category/search/:keyword"
        element={<Catalog title="Movies" />}
      />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/t/:type" element={<Catalog />} />
      <Route path="/:category/g/:type" element={<Catalog />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
      <Route path="/style" element={<Style />} />
    </Routes>
  );
}

export default Router;
