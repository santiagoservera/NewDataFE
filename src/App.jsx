import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PedidosPage from "./pages/PedidosPage";
import PedidoFormPage from "./pages/PedidoFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import { PedidosProvider } from "./context/PedidosContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <PedidosProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Rutas privadas */}
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/pedidos" element={<PedidosPage />} />
            <Route path="/crearPedido" element={<PedidoFormPage />} />
            <Route path="/pedido/:id" element={<PedidoFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* </Route> */}
          </Routes>
          <FooterConditional />
        </BrowserRouter>
      </PedidosProvider>
    </AuthProvider>
  );
}

// Componente condicional para el Footer
function FooterConditional() {
  const location = useLocation();

  // Verifica si la ruta actual es "/"
  return location.pathname === "/" ? <Footer /> : null;
}

export default App;
