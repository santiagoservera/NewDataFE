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
  Pagination,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { getAllPedidosRequest } from "../api/pedidos";

function AdminPedidosPage() {
  const { getPedidos, pedidos, deletePedido, updatePedido, getAllPedidos } =
    usePedidos();
  const { user, isLoading } = useAuth();
  const [filtros, setFiltros] = useState({
    estado: "",
    logistica: "",
  });

  const [filter, setFilter] = useState();

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    estado: "",
  });

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

  // Estado para la paginación
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const totalPages = Math.ceil(pedidos.length / rowsPerPage);

  const handleFilterChange = (name, value) => {
    if (name === "estado") {
      setFiltros((prev) => ({
        ...prev,
        estado: value,
      }));
    }
    if (name === "logistica") {
      setFiltros((prev) => ({
        ...prev,
        logistica: value,
      }));
    }
  };

  useEffect(() => {
    getAllPedidos(filtros.estado, filtros.logistica);
  }, [filtros]);

  console.log(filtros);

  const handleEditClick = (pedido) => {
    setSelectedPedido(pedido);
    setEditData({
      title: pedido.title || "",
      description: pedido.description || "",
      estado: pedido.estado || "pendiente",
    });
    onEditOpen();
  };

  const filteredPedidos = pedidos.filter((pedido) => {
    return (
      (filtros.estado ? pedido.estado === filtros.estado : true) &&
      (filtros.logistica ? pedido.logistica === filtros.logistica : true)
    );
  });

  const handleDetailClick = (pedido) => {
    setSelectedPedido(pedido);
    onDetailOpen();
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target || {};
    if (!name || !value) {
      console.error("Cambio inválido detectado:", e); // Depura errores
      return;
    }

    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    console.log("Datos a actualizar:", editData);
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

  const paginatedPedidos = filteredPedidos.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  console.log(filter);

  return (
    <div className="w-full flex flex-col bgPedidos ">
      <div className="w-[80%] flex flex-col items-center justify-center mx-auto h-full mt-10 mb-10">
        <div className="w-full flex text-center justify-center flex-col gap-4">
          <p className="text-white relative z-1 capitalize font-tiny5 font-bold text-4xl">
            PANEL DE ADMIN
          </p>
          <p className="text-white relative z-1 capitalize font-tiny5 font-bold text-4xl">
            {user?.name} (Admin)
          </p>
          <p className="font-tiny5 font-bold text-2xl text-white relative z-1 capitalize">
            INFORMACIÓN DE TODOS LOS PEDIDOS
          </p>
        </div>

        <div className="my-10 lg:w-auto w-full mx-auto h-full p-1 rounded-lg relative z-1">
          <div className="w-full bg-custom-gradient h-auto rounded-lg my-3 p-3 flex flex-col">
            <div className="font-tiny5 text-2xl font-bold uppercase text-white text-center">
              Filtrar por
            </div>
            <div className="w-full flex-col lg:flex lg:flex-row justify-center  p-2">
              <div className="w-full flex flex-col items-center p-2">
                <div className="w-1/3">
                  <p className="text-center text-2xl text-white font-tiny5 font-bold">
                    ESTADO
                  </p>
                </div>
                <select
                  name="estado"
                  onChange={(e) => handleFilterChange("estado", e.target.value)}
                  className="lg:w-[70%] w-[80%] rounded-lg"
                >
                  <option value="">Todos</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="aceptado">Aceptado</option>
                  <option value="resuelto">Resuelto</option>
                </select>
              </div>
              <div className="w-full  flex items-center flex-col p-2">
                <div className="w-1/3">
                  <p className="text-center text-2xl text-white font-tiny5 font-bold">
                    LOGISTICA
                  </p>
                </div>
                <select
                  name="logistica"
                  onChange={(e) =>
                    handleFilterChange("logistica", e.target.value)
                  }
                  className="lg:w-[70%] w-[80%] rounded-lg"
                >
                  <option value="">Todos</option>
                  <option value="llevo">Clientes que me traen la PC</option>
                  <option value="buscar">Buscar PC</option>
                </select>
              </div>
            </div>
          </div>
          <Table
            isStriped
            aria-label="Tabla de pedidos con paginación"
            className="capitalize font-bold"
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
              {paginatedPedidos.map((pedido) => (
                <TableRow key={pedido._id}>
                  <TableCell className="font-semibold">
                    {pedido.title}
                  </TableCell>
                  <TableCell className="font-semibold max-w-xs">
                    <div className="truncate overflow-hidden whitespace-nowrap">
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
          <div className="flex mt-2 justify-center ">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={totalPages}
              onChange={(newPage) => setPage(newPage)}
            />
          </div>
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
                    <div className="flex justify-between items-center gap-2 w-full">
                      <p className="font-tiny5 uppercase font-bold text-white">
                        Estado:
                      </p>
                      <select
                        name="estado"
                        value={editData.estado}
                        onChange={handleEditChange}
                        className="w-full rounded-lg"
                      >
                        <option value="pendiente">Pendiente</option>
                        <option value="aceptado">Aceptado</option>
                        <option value="resuelto">Resuelto</option>
                      </select>
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
            <div className="flex flex-col gap-4 justify-center items-stretch w-[90%] mx-auto">
              <div className="flex gap-2 items-center justify-between">
                <strong className="text-2xl uppercase">Título:</strong>{" "}
                <p>{selectedPedido?.title}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <strong className="text-2xl uppercase">Descripción:</strong>{" "}
                </p>
                <p>{selectedPedido?.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <strong className="text-2xl uppercase">Logistica:</strong>{" "}
                </p>
                <p>{selectedPedido?.logistica}</p>
              </div>
              <div>
                <p>ESTADO DEL PEDIDO:</p>
                <div
                  className={`truncate overflow-hidden whitespace-nowrap text-center py-1 px-2 rounded-lg font-bold  uppercase font-tiny5 ${
                    estadoColorMap[selectedPedido?.estado.toLowerCase()] ||
                    "bg-gray-500 text-white "
                  }`}
                >
                  {selectedPedido?.estado}
                </div>
              </div>
              <div className="flex items-center justify-between">
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
              <div className="w-full h-[1px] bg-gray-400 my-2"></div>
              <div className="w-full">
                <p className="font-tiny5 text-2xl font-bold">
                  INFORMACION DEL SOLICITANTE:
                </p>
              </div>
              <div className="w-full mx-auto">
                <div className="flex gap-2 items-center justify-between">
                  <p className="font-tiny5 text-2xl font-bold">Nombre:</p>
                  <p className="capitalize font-tiny5 text-2xl">
                    {selectedPedido?.user?.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-between">
                  <p className="font-tiny5 text-2xl font-bold">Apellido:</p>
                  <p className="capitalize font-tiny5 text-2xl">
                    {selectedPedido?.user?.surname}
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-between">
                  <p className="font-tiny5 text-2xl font-bold">Numero:</p>
                  <p className=" font-tiny5 text-2xl">
                    {selectedPedido?.user?.numero}
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-between">
                  <p className="font-tiny5 text-2xl font-bold">Email:</p>
                  <p className=" font-tiny5 text-2xl">
                    {selectedPedido?.user?.email}
                  </p>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className="bg-indigo-800 hover:bg-[#6034a3] hover:text-black font-bold uppercase text-white"
              onClick={() => onDetailOpenChange(false)}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AdminPedidosPage;
