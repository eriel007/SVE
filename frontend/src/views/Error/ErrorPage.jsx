import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorPage({ direccion }) {
  const navigate = useNavigate();

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      bgcolor='#f7f7f7'
      textAlign='center'
      p={3}>
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "#f44336" }} />
      <Typography
        variant='h1'
        component='h1'
        sx={{ mt: 2, mb: 2, fontSize: "3rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant='h6' component='h6' sx={{ mb: 2 }}>
        Lo sentimos, se encontro un error al cargar los datos.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => navigate(direccion)}
        sx={{ mt: 2 }}>
        Volver al Atras
      </Button>
    </Box>
  );
}

export default ErrorPage;
