import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import logoNewData from "../assets/logovertical.jpg";
import logoProbando from "../assets/logovertical.jpg";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [step, setStep] = useState(1); // Estado para controlar el paso
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: "onChange" }); // Activa la validación en cada cambio
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/pedidos");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    const userValues = { ...values, rol: "user" }; // Agrega el rol 'user' por defecto
    signup(userValues);
  });

  // Controlador para pasar al siguiente paso si los campos son válidos
  const goToNextStep = async () => {
    const valid = await trigger(["name", "email", "surname"]); // Valida los campos del primer paso
    if (valid) {
      setStep(2); // Cambia al paso 2 si todos los campos son válidos
    }
  };

  return (
    <div className="w-full  h-[calc(100vh-92px)] flex flex-col items-center justify-center bgRegister">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
      {RegisterErrors.map((error, i) => (
        <div className="bg-red-900 p-2 rounded-xl shadow-2xl" key={i}>
          <p className="text-white">{error}</p>
        </div>
      ))}
      <div className="lg:w-1/2 lg:h-[80%] h-[70%] flex mx-auto rounded-lg py-5 items-center bg-opacity-45 bg-white shadow-2xl z-10">
        <div className="w-full grid lg:grid-cols-2 gap-4 p-5">
          <div className="flex flex-col items-center justify-center">
            <p className="font-tiny5 text-2xl font-bold text-purple-950">
              REGISTRO
            </p>
            <img
              src={logoProbando}
              alt="logo"
              className="  rounded-lg h-[250px] w-[250px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <form
              onSubmit={onSubmit}
              className="flex flex-col w-full mx-auto gap-4"
            >
              {step === 1 && (
                <>
                  <div>
                    <Input
                      type="text"
                      label="Nombre"
                      {...register("name", {
                        required: "El nombre es requerido",
                      })}
                      isInvalid={errors.name}
                      color={errors.name ? "danger" : "primary"}
                      variant="faded"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      label="Apellido"
                      {...register("surname", {
                        required: "El apellido es requerido",
                      })}
                      isInvalid={errors.surname}
                      color={errors.surname ? "danger" : "primary"}
                      variant="faded"
                    />
                    {errors.surname && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.surname.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      {...register("email", {
                        required: "El email es requerido",
                      })}
                      isInvalid={errors.email}
                      color={errors.email ? "danger" : "primary"}
                      variant="faded"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="button"
                    onClick={goToNextStep} // Llama a la función de validación
                    className="hover:bg-blue-900 border w-full hover:text-white hover:font-bold hover:border-black font-semibold shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="#ffffff"
                        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                      />
                    </svg>
                  </Button>
                </>
              )}
              {step === 2 && (
                <>
                  <div>
                    <Input
                      type="number"
                      label="Número de teléfono"
                      {...register("numero", {
                        required: "El número es requerido",
                        valueAsNumber: true,
                      })}
                      isInvalid={errors.numero}
                      color={errors.numero ? "danger" : "primary"}
                      variant="faded"
                    />
                    {errors.numero && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.numero.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="password"
                      label="Contraseña"
                      {...register("password", {
                        required: "La contraseña es requerida",
                      })}
                      isInvalid={errors.password}
                      color={errors.password ? "danger" : "primary"}
                      variant="faded"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="flex w-full items-center gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep(1)} // Regresa al paso 1
                      className="hover:bg-blue-900 border w-full hover:text-white hover:font-bold hover:border-black font-semibold shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 15 15"
                        className="rotate-180"
                      >
                        <path
                          fill="#ffffff"
                          d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                        />
                      </svg>
                    </Button>
                    <Button
                      type="submit"
                      className="hover:bg-blue-900 border w-full hover:text-white hover:font-bold hover:border-black font-semibold shadow-lg"
                    >
                      REGÍSTRATE
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center mt-4">
        <Link to="/login">
          <Button className="bg-[#2B1BAA] w-full text-white border-white font-bold border shadow-lg hover:bg-[#671186]">
            YA TENGO CUENTA
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
