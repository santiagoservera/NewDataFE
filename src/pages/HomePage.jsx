import React from "react";
import SliderHome from "../components/SliderHome";
import QuienesSomos from "../components/QuienesSomos";
import Contacto from "../components/Contacto";
import Beneficios from "../components/Beneficios";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full mx-auto h-full">
        <SliderHome />
        <div id="quienes-somos">
          <QuienesSomos />
        </div>

        <div id="beneficios">
          <Beneficios />
        </div>
        <div id="contacto">
          <Contacto />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
