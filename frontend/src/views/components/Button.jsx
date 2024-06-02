import Button from "@mui/material/Button";

function Boton({ texto, ancho, largo, borde, tamañoTexto }) {
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
        }}>
        {texto}
      </Button>
    </>
  );
}

export default Boton;
