import { Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import logoProbando from "../assets/logovertical.jpg";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  //Si el usuario esta autenticado redirige a la pagina de pedidos
  useEffect(() => {
    if (isAuthenticated) navigate("/pedidos");
  }, [isAuthenticated]);

  return (
    <div className="w-full h-[calc(100vh-92px)] flex flex-col items-center justify-center bgLogin relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
      {signinErrors.map((error, i) => (
        <div className="bg-red-900 p-2 rounded-xl shadow-2xl my-2" key={i}>
          <p className="text-white">{error}</p>
        </div>
      ))}
      <div className="lg:w-1/2 lg:h-1/2 h-[50%] w-[80%]  flex mx-auto rounded-lg py-5 items-center bg-opacity-45 bg-white shadow-2xl z-10">
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 p-5">
          <div className="flex justify-center items-center">
            <form
              onSubmit={onSubmit}
              className="flex flex-col w-full mx-auto gap-4"
            >
              <Input
                type="email"
                label="Email"
                {...register("email", { required: true })}
                isInvalid={errors.email}
                errorMessage={errors.email && "El email es requerido"}
                color={errors.email ? "danger" : "primary"}
                variant="faded"
              />
              <Input
                type="password"
                label="Contraseña"
                {...register("password", { required: true })}
                isInvalid={errors.password}
                errorMessage={errors.password && "La contraseña es requerida"}
                color={errors.password ? "danger" : "primary"}
                variant="faded"
              />
              <div className="flex w-full items-center gap-4">
                <Button
                  type="submit"
                  className="hover:bg-blue-900 border w-full hover:text-white hover:font-bold hover:border-black font-semibold shadow-lg"
                >
                  INGRESAR
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="font-tiny5 text-2xl font-bold text-purple-950">
              LOGIN
            </p>
            <img
              src={logoProbando}
              alt="logo"
              className="  rounded-lg h-[150px] w-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center mt-4">
        <Link to="/register">
          <Button className="bg-[#2B1BAA] w-full text-white border-white font-bold border shadow-lg hover:bg-[#671186] ">
            NO TENGO CUENTA
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
