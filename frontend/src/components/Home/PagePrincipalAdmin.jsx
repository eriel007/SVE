import Layout from "../others/Layout";
import Navbar from "../home/Navbar";
import Menu from "./menu/Menu";
import { Box } from "@mui/material";
import ConexionDB from "./menu/ConexionDB";
import Informe from "./menu/Informe";
import Monitorear from "./menu/Monitorear";
import RegistroElecciones from "./menu/RegistroElecciones";
import RegistroFrente from "./menu/RegistroFrente";
import ListaRoles from "./menu/ListaRoles";
import Prueba from "../../views/admin/Prueba";
import Facultades from "./menu/Facultades";
import { useState } from "react";

function PagePrincipalAdmin() {
  const [paginaActual, setPaginaActual] = useState("inicio");

  const cambiarPagina = (view) => {
    setPaginaActual(view);
  };

  const mostrarComponent = () => {
    switch (paginaActual) {
      case "Facultades":
        return <Facultades />;
      case "Prueba":
        return <Prueba />;
      case "ListaRoles":
        return <ListaRoles />;
      case "RegistroFrente":
        return <RegistroFrente />;
      case "Monitorear":
        return <Monitorear />;
      case "Informe":
        return <Informe />;
      case "RegistroElecciones":
        return <RegistroElecciones />;
      case "ConexionDB":
        return <ConexionDB />;
      case "CerrarSesion":
        return <div>Cerrando sesión...</div>; // Ejemplo: lógica de logout
      default:
        return <div>Bienvenido al panel de administración</div>;
    }
  };

  return (
    <Layout>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "20%" }}>
          <Menu rol='admin' onClick={cambiarPagina} />
        </Box>

        {/* Componente dinámico ocupa 80% */}
        <Box
          sx={{
            width: "80%",
            padding: "20px",
            overflow: "auto",
          }}>
          {mostrarComponent()}
        </Box>
      </Box>
    </Layout>
  );
}
export default PagePrincipalAdmin;
