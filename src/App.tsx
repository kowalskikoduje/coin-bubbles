import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages/";
import "./styles/App.css";

function App() {
  return (
    <div className="text-black bg-black">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
