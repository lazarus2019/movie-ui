import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./config/Router";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Header />
        <Router />
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
