import React from "react";
import logo from "../assets/logoHorizontalSinFondo.png";
function Footer() {
  return (
    <div className="w-full h-auto bg-custom-gradient  py-5 flex lg:flex-row justify-center items-center">
      <div className="w-[90%] mx-auto flex  flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-40 h-15" />
        </div>

        <div>
          <p className="lg:text-xl text-2xl text-center font-tiny5 font-bold uppercase">
            Made with 👾 by Santiago Servera
          </p>
          <div className="flex flex-col gap-2 items-center">
            <p className="lg:text-lg text-2xl font-tiny5 font-bold uppercase">
              santiagoservera21@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              />
            </svg>
            <p className="text-white lg:uppercase lg:text-lg text-4xl font-bold font-tiny5">
              2645762629
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
            <p className="text-white lg:uppercase lg:text-lg text-4xl font-bold font-tiny5">
              servera.santi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
