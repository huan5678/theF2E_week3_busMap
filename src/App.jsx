import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./views/Index";
import Station from "./views/Station";
import Transfer from "./views/Transfer";

function App() {

  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" extends element={<Index />} />
        <Route path="/station" element={<Station />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
      </Router>
  );
}

export default App;
