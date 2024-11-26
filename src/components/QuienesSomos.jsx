import React from "react";
import logoFinal from "../assets/logovertical.jpg";
function QuienesSomos() {
  return (
    <div className="w-[90%] mx-auto pb-10 flex flex-col justify-center gap-5 my-16 ">
      <div className="w-full h-auto flex lg:flex-row flex-col justify-center gap-10">
        <div className="flex justify-center items-center shadow-lg">
          <img
            className="rounded-lg lg:h-[300px] lg:w-[400px]"
            src={logoFinal}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col gap-6 lg:gap-0 h-auto justify-center">
          <div className="flex justify-center h-full ">
            <p className="text-6xl font-bold text-gradiente text-center uppercase  font-tiny5">
              Quienes somos?
            </p>
          </div>
          <div className="flex flex-col gap-16 pb-5 w-">
            <div className="flex gap-1 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 42 42"
              >
                <path
                  className=""
                  fill="#3b0764"
                  d="M20.938 10.725C14.51.796 1.5 6.205 1.5 17.021c0 8.122 17.836 20.827 19.438 22.479C22.551 37.848 39.5 25.143 39.5 17.021c0-10.734-12.122-16.225-18.562-6.296"
                />
              </svg>

              <p className="text-xl font-semibold  text-center">
                Somos una EMPRESA de la tecnologia dedicada al arreglo de
                computadoras de los usuarios de San Juan. <br />
              </p>
            </div>
            <div className="flex gap-1 items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  className=""
                  fill="#3b0764"
                  d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"
                />
              </svg>

              <p className="text-xl font-semibold text-center">
                Asumimos un compromiso y ofrecemos un acompañamiento a nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1  lg:grid-cols-3 gap-5 my-16">
        <div className="border h-[350px] border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg bgVision">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <p className="text-2xl font-bold uppercase font-tiny5 text-white relative z-1">
            Misión
          </p>
          <p className="text-center text-lg font-semibold text-white relative z-1">
            Proporcionar soluciones rápidas, confiables y accesibles en
            mantenimiento y reparación de computadoras, maximizando el
            rendimiento y la vida útil de los dispositivos de nuestros clientes.
          </p>
        </div>
        <div className="border border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg bgMision">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <p className="text-2xl font-bold text-gradiente uppercase font-tiny5 text-white relative z-1">
            Visión
          </p>
          <p className="text-center text-lg font-semibold text-white relative z-1">
            Ser reconocidos como líderes en servicios tecnológicos integrales,
            destacándonos por la calidad de nuestro trabajo y el impacto
            positivo que generamos en la vida de nuestros clientes y sus
            negocios.
          </p>
        </div>
        <div className="border border-[#436854] rounded-lg flex flex-col justify-evenly items-center p-3 shadow-lg bgValores">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
          <p className="text-2xl font-bold text-gradiente uppercase font-tiny5 text-white relative z-1">
            Valores
          </p>
          <p className="text-center text-lg font-semibold text-white relative z-1">
            ✓ Compromiso <br /> ✓ Innovación <br /> ✓ Profesionalismo <br />
            ✓ Transparencia <br /> ✓ Orientación al cliente
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
