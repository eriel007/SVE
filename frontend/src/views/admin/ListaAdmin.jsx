import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import { useUsuario } from "../../context/UsuarioProvider";
import { useEffect } from "react";

function ListaAdmin() {
  const { getUsuarioRol } = useUsuario();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getUsuarioRol(1);
      setAdmin(data);
      console.log("usuarios admin", data);
    };
    loadData();
  }, []);
  return (
    <Box>
      <Typography variant='h5' sx={{ color: "#1565c0", marginBottom: "8px" }}>
        Administrador
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Contraseña</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admin && admin.length > 0 ? (
              admin.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.contraseña}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>
                    <Button
                      variant='contained'
                      color='primary'
                      size='small'
                      sx={{ marginRight: "8px" }}>
                      Editar
                    </Button>
                    <Button variant='contained' color='secondary' size='small'>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>No hay usuarios disponibles</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default ListaAdmin;
