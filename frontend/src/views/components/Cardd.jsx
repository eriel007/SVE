import kali from "../../assets/image/fotosUsuarios/kali.webp";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";

function Cardd({ imageSrc, description }) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 230,
          m: 2,
          borderRadius: "8px" || "8px",
          border: "2px solid #1976d2",
          boxShadow: 3,
          backgroundColor: "#D9D9D9",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 110,
            marginTop: 2, // Ajusta esto según el tamaño deseado
          }}>
          <CardMedia
            component='img'
            image={kali}
            alt='Card Image'
            sx={{
              width: "150px",
              height: "100%",
              borderRadius: "8px", // Esto mantiene la proporción de la imagen
            }}
          />
        </Box>
        <CardContent
          sx={{
            textAlign: "center",
          }}>
          <Typography variant='body1' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <Box display='flex' justifyContent='center' alignItems='center' p={2}>
          <Checkbox sx={{ transform: "scale(3)" }} />
        </Box>
      </Card>
    </>
  );
}

export default Cardd;
