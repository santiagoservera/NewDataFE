import React, { useEffect, useState } from "react";
import { usePedidos } from "../context/PedidosContext";
import { useAuth } from "../context/AuthContext";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

function UserPedidosPage() {
  const { getPedidos, pedidos, deletePedido, updatePedido } = usePedidos();
  const { user, isLoading } = useAuth();

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "" });

  const estadoColorMap = {
    pendiente: "bg-yellow-500 text-white",
    aceptado: "bg-green-500 text-white",
    resuelto: "bg-red-500 text-white",
  };

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onOpenChange: onEditOpenChange,
  } = useDisclosure();
  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onOpenChange: onDetailOpenChange,
  } = useDisclosure();

  useEffect(() => {
    if (!isLoading) {
      getPedidos();
    }
  }, [isLoading]);

  const handleEditClick = (pedido) => {
    setSelectedPedido(pedido);
    setEditData({ title: pedido.title, description: pedido.description });
    onEditOpen();
  };

  const handleDetailClick = (pedido) => {
    setSelectedPedido(pedido);
    onDetailOpen();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await updatePedido({ ...selectedPedido, ...editData });
      onEditOpenChange(false);
    } catch (error) {
      console.error("Error al actualizar el pedido", error);
    }
  };

  if (isLoading) {
    return <div className="text-white">Cargando...</div>;
  }

  // En caso de que no tenga pedidos
  if (pedidos.length === 0) {
    return (
      <div className="w-full min-h-screen h-screen flex flex-col bgPedidos overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
        <div className="w-[80%] flex flex-col items-center justify-center mx-auto h-auto mt-40 mb-10 relative z-1 gap-5">
          <h1 className="text-white font-tiny5 text-5xl">
            NO POSEE PEDIDOS DE ARREGLO
          </h1>
          <Link to="/crearPedido">
            <Button className="bg-indigo-800 text-white text-3xl font-tiny5 font-bold py-8 px-10 hover:bg-[#6034a3] hover:text-black rounded-lg shadow-lg">
              CREAR PEDIDO
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bgPedidos ">
      <div className="w-[80%] flex flex-col items-center justify-center mx-auto h-auto mt-10 mb-10">
        <div className="w-full flex text-center justify-center flex-col gap-4">
          <p className="text-white relative z-1 capitalize font-tiny5 font-bold text-4xl">
            {user?.name}
          </p>
          <p className="font-tiny5 font-bold text-2xl text-white relative z-1 capitalize">
            INFORMACIÓN DE TUS PEDIDOS
          </p>
          <Link to="/crearPedido">
            <Button className="bg-indigo-800 text-white text-xl font-tiny5 font-bold py-4 px-5 hover:bg-[#6034a3] hover:text-black rounded-lg shadow-lg">
              CREAR OTRO PEDIDO
            </Button>
          </Link>
        </div>
        <div className="my-10 lg:w-auto w-full mx-auto h-full p-1 rounded-lg relative z-1">
          <Table
            isStriped
            aria-label="Tabla de pedidos removeWrapper"
            className="capitalize font-bold "
          >
            <TableHeader className=" text-white">
              <TableColumn className="font-bold text-xl bg-[#46235e] text-white font-tiny5">
                TÍTULO
              </TableColumn>
              <TableColumn className="font-bold text-xl bg-[#46235e] text-white font-tiny5">
                DESCRIPCIÓN
              </TableColumn>
              <TableColumn className="font-bold text-xl bg-[#46235e] text-white font-tiny5">
                ESTADO DEL PEDIDO
              </TableColumn>
              <TableColumn className="font-bold text-xl bg-[#46235e] text-white font-tiny5">
                FECHA DE CREACIÓN
              </TableColumn>

              <TableColumn className="font-bold text-xl bg-[#46235e] text-white font-tiny5 flex text-center items-center justify-center">
                ACCIONES
              </TableColumn>
            </TableHeader>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow key={pedido._id}>
                  <TableCell className="font-semibold">
                    {pedido.title}
                  </TableCell>
                  <TableCell className="font-semibold max-w-xs">
                    <div className="truncate overflow-hidden whitespace-nowrap ">
                      {pedido.description}
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold max-w-xs">
                    {/* Estado del pedido con color dinámico */}
                    <div
                      className={`truncate overflow-hidden whitespace-nowrap text-center py-1 px-2 rounded-lg font-bold  uppercase font-tiny5 ${
                        estadoColorMap[pedido.estado.toLowerCase()] ||
                        "bg-gray-500 text-white "
                      }`}
                    >
                      {pedido.estado}
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {new Date(pedido.createdAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="font-semibold text-center flex justify-center items-center gap-3">
                    <Tooltip content="Ver detalles">
                      <svg
                        onClick={() => handleDetailClick(pedido)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        className="cursor-pointer"
                      >
                        <path
                          fill="#000000"
                          d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0-2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zM12 8a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0-3zm-2.5 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-.5z"
                        />
                      </svg>
                    </Tooltip>
                    <Tooltip content="Eliminar pedido">
                      <svg
                        onClick={() => deletePedido(pedido._id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        className="cursor-pointer"
                      >
                        <path
                          fill="#000000"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                        />
                      </svg>
                    </Tooltip>
                    <Tooltip content="Actualizar pedido">
                      <svg
                        onClick={() => handleEditClick(pedido)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        className="cursor-pointer"
                      >
                        <path
                          fill="#000000"
                          d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                        />
                      </svg>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal para editar pedido */}
      <Modal
        isOpen={isEditOpen}
        onOpenChange={onEditOpenChange}
        isDismissable={false}
        className="bg-[#46235e]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white font-tiny5 font-bold uppercase">
                Editar Pedido
              </ModalHeader>
              <ModalBody>
                {selectedPedido && (
                  <>
                    <div className="flex justify-between items-center gap-2">
                      <p className="font-tiny5 uppercase font-bold text-white">
                        Título:
                      </p>
                      <Input
                        type="text"
                        name="title"
                        value={editData.title}
                        onChange={handleEditChange}
                        className="input-class"
                      />
                    </div>

                    <div className="flex justify-between items-center gap-2">
                      <p className="font-tiny5 uppercase font-bold text-white">
                        Descripción:
                      </p>
                      <Input
                        type="text"
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                        className="input-class"
                      />
                    </div>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-red-500 text-white hover:bg-red-300 hover:text-black font-bold uppercase"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  className="bg-indigo-800 hover:bg-[#6034a3] hover:text-black font-bold uppercase text-white"
                  onPress={handleUpdate}
                >
                  Guardar Cambios
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal de detalles */}
      <Modal
        isOpen={isDetailOpen}
        className="bg-[#46235e] text-white font-tiny5"
        onOpenChange={onDetailOpenChange}
      >
        <ModalContent>
          <ModalHeader className="uppercase text-2xl">
            Detalle del pedido
          </ModalHeader>
          <ModalBody>
            <div className="flex gap-2 items-center">
              <strong className="text-2xl uppercase">Título:</strong>{" "}
              <p>{selectedPedido?.title}</p>
            </div>
            <div>
              <p>
                <strong className="text-2xl uppercase">Descripción:</strong>{" "}
              </p>
              <p>{selectedPedido?.description}</p>
            </div>
            <div className="flex gap-2 items-center ">
              <p>
                <strong className="text-2xl uppercase">
                  Fecha de Creación:
                </strong>{" "}
              </p>
              <p>
                {new Date(selectedPedido?.createdAt).toLocaleDateString(
                  "es-ES",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
            {/* Puedes agregar más detalles aquí */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => onDetailOpenChange(false)}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserPedidosPage;
