import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import { usePedidos } from "../context/PedidosContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PedidoFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createPedido } = usePedidos();
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSubmit = handleSubmit((data) => {
    createPedido(data);
    toast.success(
      "Su pedido fue creado exitosamente!, aguarde sera redireccionado"
    );
    setTimeout(() => navigate("/pedidos"), 2000); // Redirige después de 2 segundos
  });

  return (
    <div className="w-full min-h-[calc(100vh-104px)] flex flex-col items-center justify-center bgNuevoPedido relative bg-black">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
      <div className="w-[80%] flex mx-auto relative z-1">
        <div className="flex flex-col text-center gap-3 items-center justify-center">
          <p className="text-white relative z-1 capitalize font-tiny5 font-bold text-6xl">
            {user?.username}
          </p>
          <p className="font-tiny5 font-bold text-2xl text-white relative z-1 capitalize">
            INGRESE EL PROBLEMA QUE TIENE CON LA COMPUTADORA
          </p>
        </div>
        <form
          className="w-[50%] flex flex-col gap-4 p-5 mx-auto"
          onSubmit={onSubmit}
        >
          <Tooltip content="Nombre que le daria a su problema">
            <Input
              type="text"
              label="Titulo"
              {...register("title")}
              autoFocus
              isRequired
              variant="faded"
              {...register("title", { required: "El título es obligatorio" })}
              color={errors.title ? "danger" : "default"}
            ></Input>
          </Tooltip>
          <Tooltip content="Describa con los mayores datos posibles su problema">
            <Textarea
              rows={5}
              label="Descripción"
              {...register("description", {
                required: "La descripción es obligatoria",
              })}
              isRequired
              variant="faded"
              color={errors.description ? "danger" : "default"}
            ></Textarea>
          </Tooltip>
          {/* Nuevo campo de selección para Logística */}
          <Tooltip content="Seleccione la logística para su pedido">
            <label className=" font-bold font-tiny5">
              <p className="font-tiny5 uppercase font-bold text-white">
                {" "}
                Como organizamos para que se resuelva su problema?
              </p>
              <select
                className="w-full p-2 mt-2   border rounded-md  uppercase"
                {...register("logistica", {
                  required: "Debe seleccionar una opción de logística",
                })}
              >
                <option value="buscar">Necesito que la busquen</option>
                <option value="llevo">Yo la llevo</option>
              </select>
            </label>
          </Tooltip>

          <Button
            type="Submit"
            className="hover:bg-blue-900 border w-full hover:text-white hover:font-bold hover:border-black font-semibold shadow-lg font-tiny5 text-xl"
          >
            ENVIAR PEDIDO DE ARREGLO
          </Button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default PedidoFormPage;
