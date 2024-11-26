import React from "react";
import descuentoHard from "../assets/descuentoHardware.webp";
import logotecno from "../assets/logoTecnobyte.png";
import logohard from "../assets/logoPchardware.webp";
function Beneficios() {
  return (
    <div className="w-[90%] mx-auto h-auto">
      <div className="w-full bg-custom-gradient h-auto rounded-lg p-14 shadow-xl">
        <p className="text-white text-center text-4xl font-bold uppercase font-tiny5 ">
          CONSEGUI DESCUENTOS EN COMPONENTES <br />
          EN LAS CASAS ASOCIADAS A NEW DATA
        </p>
        <div className="text-center w-full pt-10 flex flex-col lg:flex-row justify-between items-center">
          <img src={logotecno} alt="logo" className=" w-[300px] h-[100px]" />

          <p className="text-white text-center text-2xl font-bold uppercase  ">
            SI VAS DE PARTE DE NEWDATA TENES HASTA UN 20% DE DESCUENTO EN
            COMPONENTES PARA ARREGLAR TU PC
          </p>

          <img src={logohard} alt="logo" className="lg:mt-[-40px] " />
        </div>
        <div className="flex w-full gap-5 justify-center items-center pt-10">
          <img
            src={descuentoHard}
            alt="logo"
            className="lg:w-[1400px] h-[300px] lg:h-full rounded-lg lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
