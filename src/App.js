import React from "react";
import Gradients from "./components/Gradients";
import GradientsHeader from "./components/GradientsHeader";
import Footer from "./components/Footer";
import FilterContextProvider from "./context/FilterContext";

function App() {
  return (
    <>
      <GradientsHeader>
        <h2 className="display-1">Alyra Gradients</h2>
        <p className="tagline">
          Ultimate collection of the most beautiful Background Gradients
        </p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <FilterContextProvider>
          <Gradients />
        </FilterContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
