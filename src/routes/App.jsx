import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
