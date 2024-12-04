import FondoUmss from "../../../components/others/FondoUmss";
import Button from "../../../components/others/Button";
import { CardMedia, CardContent, Typography, Box } from "@mui/material";
//import kali from "../../../assets/image/fotosUsuarios/kali.webp";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../../context/SessionProvider";
import { useElecciones } from "../../../context/EleccionesProvider";
import ErrorPage from "../../Error/ErrorPage";
import { useEffect } from "react";

function Informacion() {
  const { user } = useSession();
  const { getIndices } = useElecciones();
  const navigate = useNavigate();

  console.log(localStorage.getItem("session"));

  useEffect(() => {
    const loadData = async () => {
      await getIndices();
    };
    loadData();
  }, []);
  if (!user) {
    return <ErrorPage direccion={"/verificacion"} />;
  }

  return (
    <FondoUmss>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
        <CardMedia
          backgroundColor='yellow'
          component='img'
          image={"http://127.0.0.1:8001/" + user.foto}
          alt='Card Image'
          sx={{
            width: "180px",
            height: "160px",
            objectFit: "cover",
            borderRadius: "20%",
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
          }}>
          <Typography
            variant='body1'
            color='text.primary'
            paddingTop='10px'
            fontSize='20px'>
            {user ? user.nombre : "Nombre del estudiante"}
          </Typography>
          <Typography
            variant='body1'
            color='text.primary'
            paddingTop='10px'
            fontSize='20px'>
            {user ? user.carrera : "Carrera"}
          </Typography>
        </CardContent>
        <Button
          texto='Aceptar'
          ancho='140px'
          largo='50px'
          borde='10px'
          tamañoTexto='25px'
          onClick={() => navigate("/candidatos")}
        />
      </Box>
    </FondoUmss>
  );
}

export default Informacion;
