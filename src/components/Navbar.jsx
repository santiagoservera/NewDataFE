import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Tooltip } from "@nextui-org/react";
import logoFinal from "../assets/logoHorizontalSinFondo.png";

function Navbar() {
  const { isAuthenticated, logout, user, isLoading } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <div className="text-white">Cargando...</div>;
  }

  return (
    <nav className="py-5 flex justify-between bg-custom-gradient items-center w-full relative">
      <div className="w-[85%] mx-auto flex justify-between">
        <div>
          <Link to="/">
            <img src={logoFinal} alt="logo" className="w-40 h-15" />
          </Link>
        </div>

        {/* Menú hamburguesa para dispositivos móviles */}

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Menú principal */}

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-5 md:gap-10 lg:gap-44 text-white font-bold absolute md:relative top-full md:top-auto left-0 lg:w-[90%] lg:mx-auto lg:justify-end md:w-auto w-full md:justify-between  md:bg-transparent bg-[#623c9c] py-4 md:py-0 z-10`}
        >
          {location.pathname === "/" && (
            <ul className="flex flex-col md:flex-row items-center gap-5">
              <li className="p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border rounded-lg hover:border-white cursor-pointer">
                <a
                  href="#quienes-somos"
                  className="font-tiny5"
                  onClick={(e) => {
                    e.preventDefault(); // Evita el comportamiento por defecto
                    document.querySelector("#quienes-somos").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  NOSOTROS
                </a>
              </li>
              <li className="p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border rounded-lg hover:border-white cursor-pointer">
                <a
                  href="#beneficios"
                  className="font-tiny5"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#beneficios").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  BENEFICIOS
                </a>
              </li>
              <li className="p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border rounded-lg hover:border-white cursor-pointer">
                <a
                  href="#contacto"
                  className="font-tiny5"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contacto").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  CONTACTANOS
                </a>
              </li>
            </ul>
          )}

          <ul className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:gap-y-0 items-center">
            {isAuthenticated ? (
              <>
                <li className="rounded-lg p-2 capitalize">
                  Bienvenid@, {user?.name}
                </li>

                {user?.rol === "admin" ? (
                  <>
                    {/* <Tooltip content="Panel Admin">
                      <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                        <Link to="/admin">Panel Admin</Link>
                      </li>
                    </Tooltip>
                    <Tooltip content="Gestionar Usuarios">
                      <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                        <Link to="/manage-users">Gestionar Usuarios</Link>
                      </li>
                    </Tooltip> */}
                  </>
                ) : (
                  <Tooltip content="Perfil">
                    <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                      <Link to="/profile">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 1024 1025"
                        >
                          <path
                            fill="#ffffff"
                            d="M1024 958q0 12-13.5 22T969 996.5t-57.5 12t-75.5 8.5t-80 4.5t-87.5 2.5t-81 1h-151l-81-1l-87.5-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 980L0 958q2-88 110-155.5T384 713v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-64 25-114t69-80.5t101-46T512 0t125 15.5t101 46t69 80.5t25 114q0 350-192 426v31q166 22 274 89.5T1024 958"
                          />
                        </svg>
                      </Link>
                    </li>
                  </Tooltip>
                )}

                <Tooltip content="Cerrar sesión">
                  <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                    <Link
                      to="/"
                      onClick={() => {
                        logout();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                          d="M23.992 6H6v36h18m9-9l9-9l-9-9m-17 8.992h26"
                        />
                      </svg>
                    </Link>
                  </li>
                </Tooltip>
              </>
            ) : (
              <ul className="flex gap-2 justify-end w-full">
                <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                  <Link to="/login" className="font-tiny5">
                    INGRESA
                  </Link>
                </li>
                <li className="border border-white rounded-lg p-2 flex items-center justify-center hover:bg-[#6034a3] hover:border-black cursor-pointer">
                  <Link to="/register" className="font-tiny5">
                    REGISTRATE
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
