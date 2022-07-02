import React from "react";
import Nav from "./components/Nav";

import HomeView from "./view/HomeView";
import CartView from "./view/CartView";
import ProductDetailView from "./view/ProductDetailView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductSearchView from "./view/ProductSearchView";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeView />} />
            <Route exact path="/search" element={<ProductSearchView />} />
            <Route exact path="/product/:id" element={<ProductDetailView />} />
            <Route exact path="/cart" element={<CartView />} />
            <Route path="/search/:keyword" component={<HomeView />} exact />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
