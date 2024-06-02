import FondoUmss from "../../components/FondoUmss";
import Cardd from "../../components/Cardd";
import { Box, Typography } from "@mui/material";
import Boton from "../../components/Button";
import { useCandidatos } from "../../../context/CandidatosProvider";
import { useElecciones } from "../../../context/EleccionesProvider";
import { useEffect } from "react";

function Candidatos() {
  const { candidatos, loadCandidatos } = useCandidatos();
  const { eleccion, getEleccion } = useElecciones();

  useEffect(() => {
    loadCandidatos();
    getEleccion(1);
  }, []);

  return (
    <>
      <FondoUmss>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
          }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              mt: 2,
              mb: 2,
              fontSize: "3rem",
              fontWeight: "bold",
              justifyContent: "center",
              textAlign: "center",
              padding: "15px",
            }}>
            {eleccion ? eleccion.nombre : "Loading..."}
          </Typography>
          <Box
            display='flex'
            flexWrap='wrap'
            marginTop='4%'
            sx={{ justifyContent: "center" }}>
            {candidatos.map((candidato, index) => (
              <Cardd
                key={index}
                description={candidato.descripcion}
                nombre={candidato.nombre}
              />
            ))}
          </Box>
          <Box
            display='flex'
            sx={{
              justifyContent: "center",
              paddingTop: "3%",
            }}>
            <Boton
              texto='Finalizar'
              ancho='160px'
              largo='70px'
              borde='4px'
              tamañoTexto='16px'
            />
          </Box>
        </Box>
      </FondoUmss>
    </>
  );
}

export default Candidatos;
