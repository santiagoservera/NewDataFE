import { createContext, useContext, useState } from "react";
import {
  getPedidosRequest,
  createPedidoRequest,
  updatePedidoRequest,
  deletePedidoRequest,
  getPedidoRequest,
  getAllPedidosRequest,
} from "../api/pedidos";

const PedidosContext = createContext();

export const usePedidos = () => {
  const context = useContext(PedidosContext);

  if (!context) {
    throw new Error("usePedidos must be used within a PedidosProvider");
  }

  return context;
};

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  const createPedido = async (pedido) => {
    const response = await createPedidoRequest(pedido);
    console.log(response);
  };

  const deletePedido = async (id) => {
    try {
      const res = await deletePedidoRequest(id);
      if (res.status === 204)
        setPedidos(pedidos.filter((pedido) => pedido._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getPedidos = async () => {
    try {
      const response = await getPedidosRequest();
      setPedidos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPedido = async (id) => {
    try {
      const response = await getPedidoRequest(id);
      setPedidos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePedido = async (pedido) => {
    try {
      const response = await updatePedidoRequest(pedido);
      setPedidos((prevPedidos) =>
        prevPedidos.map((p) => (p._id === pedido._id ? response.data : p))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPedidos = async (estado, logistica) => {
    try {
      const response = await getAllPedidosRequest(estado, logistica);
      console.log("Pedidos obtenidos:", response.data); // Para verificar
      setPedidos(response.data);
    } catch (error) {
      console.error("Error al obtener todos los pedidos:", error);
    }
  };

  return (
    <PedidosContext.Provider
      value={{
        pedidos,
        createPedido,
        getPedidos,
        deletePedido,
        getPedido,
        updatePedido,
        getAllPedidos,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
}
