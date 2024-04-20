import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";


function App() {
  return (
    <Router>

      <ContextProvider>

        <Header />

        <Routes>
          <Route path="/" element={<Watchlist />}></Route>
          <Route path="/watched" element={<Watched />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>

      </ContextProvider>
    </Router>
  );
}

export default App;
