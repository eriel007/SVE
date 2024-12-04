import React from "react";
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
import { useJurado } from "../../context/JuradoProvider";
import { useEffect } from "react";

function ListJurado() {
  const { jurados, getJuradoDetalles } = useJurado();

  useEffect(() => {
    const loadData = async () => {
      await getJuradoDetalles();
    };
    loadData();
  }, []);

  return (
    <Box>
      <Typography variant='h5' sx={{ color: "#1565c0", marginBottom: "8px" }}>
        Jurado
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Contraseña</TableCell>
              <TableCell>Facultad</TableCell>
              <TableCell>Carrera</TableCell>
              <TableCell>Elecciones</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jurados && jurados.length > 0 ? (
              jurados.map((jurado) => (
                <TableRow key={jurado.id_jurado}>
                  <TableCell>{jurado.nombre_usuario}</TableCell>
                  <TableCell>{jurado.email_usuario}</TableCell>
                  <TableCell>{jurado.carrera.facultad}</TableCell>
                  <TableCell>{jurado.carrera.nombre_carrera}</TableCell>
                  <TableCell>
                    {jurado.eleccion?.nombre_eleccion || "No asignado"}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant='contained'
                        color='primary'
                        size='small'
                        sx={{ marginRight: "8px" }}>
                        Editar
                      </Button>
                      <Button
                        variant='contained'
                        color='secondary'
                        size='small'>
                        Eliminar
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align='center'>
                  No hay jurados registrados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default ListJurado;
