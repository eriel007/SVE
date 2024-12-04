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

function Prueba() {
  return (
    <Box sx={{ padding: "16px" }}>
      <Box sx={{ marginBottom: "32px" }}>
        <Typography variant='h5' sx={{ color: "#1565c0", marginBottom: "8px" }}>
          Administrador
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Contraseña</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Pedro Guitierrez Flores</TableCell>
                <TableCell>Gatitos321</TableCell>
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
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default Prueba;
