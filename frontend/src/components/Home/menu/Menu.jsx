import Boton from "../../others/Button";
import { Box, Typography } from "@mui/material";
function Menu({ rol, onClick }) {
  const menuOptions = [
    { texto: "Facultades UMSS", roles: "admin", componente: "Facultades" },
    {
      texto: "Pruebas",
      roles: ["admin", "jurado", "tecnico"],
      componente: "Prueba",
    },
    { texto: "Lista de Roles", roles: "admin", componente: "ListaRoles" },
    {
      texto: "Registro de Frente",
      roles: "tecnico",
      componente: "RegistroFrente",
    },
    {
      texto: "Monitorear",
      roles: ["jurado", "tecnico"],
      componente: "Monitorear",
    },
    {
      texto: "Informe",
      roles: ["jurado", "tecnico"],
      componente: "Informe",
    },
    {
      texto: "Inicio",
      roles: ["admin", "tecnico", "jurado"],
      componente: "Inicio",
    },
    {
      texto: "Registro de Elecciones",
      roles: "tecnico",
      componente: "RegistroElecciones",
    },
    { texto: "ConexionDB", roles: "tecnico", componente: "ConexionDB" },
    {
      texto: "Cerrar Sesión",
      roles: ["admin", "tecnico", "jurado"],
      componente: "CerrarSesion",
    },
  ];

  const filtrarOpciones = menuOptions.filter((options) =>
    options.roles.includes(rol)
  );
  return (
    <Box
      sx={{
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography
        variant='h4'
        sx={{
          color: "#1565c0",
          paddingTop: "4px",
        }}>
        Menú
      </Typography>

      <Box
        sx={{
          background: "#DEDEDE",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "-1px",
          width: "80%",
        }}>
        {filtrarOpciones.map((opcion, index) => (
          <Boton
            key={index}
            texto={opcion.texto}
            ancho='100%'
            borde='10px'
            largo='55px'
            onClick={() => onClick(opcion.componente)}
          />
        ))}
      </Box>
    </Box>
  );
}
export default Menu;
