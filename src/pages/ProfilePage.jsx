import React from "react";

import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="w-full min-h-[calc(100vh-104px)] bgPerfil">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
      <div className="w-[80%] flex flex-col items-center justify-center mx-auto h-auto relative z-1">
        <div className="w-full flex text-center justify-center flex-col gap-4 mt-10">
          <p className="text-white relative z-1 capitalize font-tiny5 font-bold text-4xl">
            Perfil de {user?.name}
          </p>
          <p className="font-tiny5 font-bold text-2xl text-white relative z-1 capitalize">
            INFORMACION DE TU USUARIO
          </p>
          <div className="bg-white lg:w-1/2 mx-auto h-auto bg-opacity-80 rounded-lg p-5 shadow-2xl">
            <div className="flex-col lg:flex-row lg:flex justify-center items-center gap-7 lg:gap-3">
              <p className="font-tiny5 text-2xl font-bold">
                Nombre y apellido:
              </p>
              <p className="capitalize font-tiny5 text-2xl">
                {" "}
                {user?.name} {user?.surname}
              </p>
            </div>
            <div className="flex-col lg:flex-row lg:flex justify-center items-center gap-3">
              <p className="font-tiny5 text-2xl font-bold">Email:</p>
              <p className=" capitalize font-tiny5 text-2xl"> {user?.email}</p>
            </div>
            <div className="flex-col lg:flex-row lg:flex justify-center items-center gap-3">
              <p className="font-tiny5 text-2xl font-bold">Numero:</p>
              <p className=" capitalize font-tiny5 text-2xl"> {user?.numero}</p>
            </div>
            <div className="flex-col lg:flex-row lg:flex justify-center items-center gap-3">
              <p>
                <strong className="font-tiny5 text-2xl font-bold">
                  Se unio el:
                </strong>{" "}
              </p>
              <p className="capitalize font-tiny5 text-2xl">
                {new Date(user?.createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <Link to="/Pedidos" className="w-full flex justify-center">
            <Button className="bg-indigo-800 text-white text-2xl lg:text-3xl font-tiny5 font-bold py-8 px-10 hover:bg-[#6034a3] hover:text-black rounded-lg shadow-lg uppercase">
              Quiero ver mis pedidos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
