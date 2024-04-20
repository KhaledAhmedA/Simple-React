import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        React And Firebase Authantication App
      </h1>
      <AuthContextProvider>

        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />

        </Routes>

      </AuthContextProvider>
    </div>
  );
}

export default App;
