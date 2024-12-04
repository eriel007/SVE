import kali from "../../assets/image/fotosUsuarios/kali.webp";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";

function Cardd({
  imageSrc,
  description,
  nombre,
  idCandidato,
  onVotar,
  seleccionado,
}) {
  const manejarVoto = () => {
    onVotar(idCandidato, !seleccionado);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 230,
          minWidth: 230,
          m: 2,
          borderRadius: "8px" || "8px",
          border: "2px solid #1976d2",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
        }}>
        <CardMedia
          component='img'
          image={imageSrc || kali}
          alt='Card Image'
          sx={{
            width: "130px",
            height: "100px",
            objectFit: "cover",
            marginTop: "10px",
            borderRadius: "20%",
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
          }}>
          <Typography variant='body1' color='text.primary'>
            {description}
          </Typography>
          <Typography variant='body1' color='text.primary'>
            {nombre}
          </Typography>
        </CardContent>
        <Box display='flex' justifyContent='center' alignItems='center' p={2}>
          <Checkbox
            sx={{ transform: "scale(3)", color: "text.primary" }}
            checked={seleccionado}
            onChange={manejarVoto}
          />
        </Box>
      </Card>
    </>
  );
}

export default Cardd;
