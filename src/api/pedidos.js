import axios from "./axios";

//Obtener un solo pedido
export const getPedidoRequest = () => axios.get(`/pedidos/${pedido._id}`);
//Obtener todos los pedidos
export const getPedidosRequest = () => axios.get("/pedidos");
//Crear un pedido
export const createPedidoRequest = (pedido) => axios.post("/pedidos", pedido);
//Actualizar un pedido
export const updatePedidoRequest = (pedido) =>
  axios.put(`/pedidos/${pedido._id}`, pedido);
//Eliminar un pedido
export const deletePedidoRequest = (id) => axios.delete(`/pedidos/${id}`);
//Obtener todos los pedidos
export const getAllPedidosRequest = (estado, logistica) =>
  axios.get(`/pedidos/all?estado=${estado || ""}&logistica=${logistica || ""}`);
