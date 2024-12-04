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
import { useTecnico } from "../../context/TecnicoProvider";
import { useEffect, useState } from "react";

function ListTecnico() {
  const { getTecnicosFacultades, tecnicos } = useTecnico();

  useEffect(() => {
    const loadData = async () => {
      await getTecnicosFacultades();
      console.log("lista de tecnicos", tecnicos);
    };
    loadData();
  }, []);
  return (
    <Box>
      <Typography variant='h5' sx={{ color: "#1565c0", marginBottom: "8px" }}>
        Tecnico
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Contraseña</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Facultad</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tecnicos && tecnicos.length > 0 ? (
              tecnicos.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.nombre_usuario}</TableCell>
                  <TableCell>{usuario.contraseña}</TableCell>
                  <TableCell>{usuario.email_usuario}</TableCell>
                  <TableCell>{usuario.facultad}</TableCell>
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
export default ListTecnico;
