import React from "react";
import ListaAdmin from "../../../views/admin/ListaAdmin";
import ListTecnico from "../../../views/admin/ListTecnico";
import ListJurado from "../../../views/admin/ListJurado";
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

function ListaRoles() {
  return (
    <Box sx={{ padding: "16px" }}>
      <Box
        sx={{
          marginBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "550px",
          overflowY: "auto",
        }}>
        <ListaAdmin />
        <ListTecnico />
        <ListJurado />
      </Box>
    </Box>
  );
}

export default ListaRoles;
