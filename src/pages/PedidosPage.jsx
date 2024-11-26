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
import UserPedidosPage from "./UserPedidosPage";
import AdminPedidosPage from "./AdminPedidosPage";

function PedidosPage() {
  const { getPedidos, pedidos, deletePedido, updatePedido, getAllPedidos } =
    usePedidos();
  const { user, isLoading } = useAuth();

  const [selectedPedido, setSelectedPedido] = useState(null);
  const [editData, setEditData] = useState({ title: "", description: "" });

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

  useEffect(() => {
    if (!isLoading) {
      getAllPedidos();
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
          {user.rol === "user" ? (
            <Link to="/crearPedido">
              <Button className="bg-indigo-800 text-white text-3xl font-tiny5 font-bold py-8 px-10 hover:bg-[#6034a3] hover:text-black rounded-lg shadow-lg">
                CREAR PEDIDO
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bgPedidos ">
      {user.rol === "user" ? <UserPedidosPage /> : <AdminPedidosPage />}

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

export default PedidosPage;
