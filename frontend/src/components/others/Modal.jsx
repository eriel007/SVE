import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import Boton from "./Button"; // Asegúrate de ajustar esta importación según tu estructura

const Modal = ({
  open,
  onClose,
  title = "Notificación",
  message = "",
  buttonText = "Aceptar",
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Boton
          onClick={onClose}
          color='primary'
          texto={buttonText}
          ancho={100}
          largo={50}
          borde={2}
        />
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
