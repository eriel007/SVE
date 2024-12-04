import Button from "@mui/material/Button";

function Boton({
  texto,
  ancho,
  largo,
  borde,
  tamañoTexto,
  color,
  color2,
  onClick,
}) {
  return (
    <>
      <Button
        variant='contained'
        sx={{
          margin: 1,
          width: ancho || "150px",
          height: largo || "60px",
          borderRadius: borde || "4px",
          fontSize: tamañoTexto || "16px",
          textTransform: "none",
          backgroundColor: color || "#1976d2", // Corregido: backgroundColor en lugar de background-color
          boxShadow:
            color2 ||
            "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        }}
        onClick={onClick}>
        {texto}
      </Button>
    </>
  );
}

export default Boton;
