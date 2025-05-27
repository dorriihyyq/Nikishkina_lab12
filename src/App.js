import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import Calculation from "./pages/Calculation";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import MakeRequest from "./pages/MakeRequest";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/services" element={<Services />}>
        </Route>
        <Route path="/products" element={<Products />}>
        </Route>
        <Route path="/" element={<AboutUs />}>
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/FAQ" element={<FAQ />}>
        </Route>
        <Route path="/contacts" element={<Contacts />}>
        </Route>
        <Route path="/makerequest" element={<MakeRequest />}>
        </Route>
        <Route path="/calculation" element={<Calculation />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
