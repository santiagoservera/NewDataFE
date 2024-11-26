import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

import imagenSlider1 from "../assets/imagenSlider1.jpg";
import { Button } from "@nextui-org/react";
// import required modules
import { Pagination } from "swiper/modules";

function SliderHome() {
  return (
    <div className="w-full flex justify-center items-center relative">
      <img
        className="w-full aspect-video object-cover h-[calc(100vh-100px)] flex opacity-70"
        src={imagenSlider1}
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[88%] h-full  flex flex-col justify-center gap-5">
          <h2 className="text-white lg:text-6xl text-5xl font-bold uppercase font-tiny5">
            Tenes problemas <br />
            con tu computadora?{" "}
          </h2>
          <p className="text-white text-2xl font-bold uppercase font-mono">
            Comunicate con nuestro equipo y solucionalos.
          </p>
          <Button className="bg-custom-gradient text-white hover:text-black font-tiny5 font-bold uppercase lg:w-[20%] py-2  text-lg rounded-full ">
            <a href="#contacto">CONTACTANOS</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
