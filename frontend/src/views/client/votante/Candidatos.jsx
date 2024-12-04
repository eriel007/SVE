import FondoUmss from "../../../components/others/FondoUmss";
import Cardd from "../../../components/others/Cardd";
import { Box, Typography } from "@mui/material";
import Boton from "../../../components/others/Button";
import { useCandidatos } from "../../../context/CandidatosProvider";
import { useElecciones } from "../../../context/EleccionesProvider";
import { useVotos } from "../../../context/VotacionesProvider";
import { useRegistroVotante } from "../../../context/RegistroVotanteProvider";
import { useSession } from "../../../context/SessionProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../../Error/ErrorPage";

function Candidatos() {
  const { candidatos, getCandidatosEleccion } = useCandidatos();
  const { eleccion, getEleccion, indices } = useElecciones();
  const { user } = useSession();
  const { createRegistroVotante } = useRegistroVotante();
  const { createVoto } = useVotos();
  const { logout } = useSession();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [votosSeleccionados, setVotosSeleccionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datosEstudiante, setDatosEstudiante] = useState({
    nombre: user.nombre,
    codigoSis: user.codigo_sis,
    id_elecciones: [2],
  });

  //console.log(localStorage.getItem("session"));
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await getEleccion(indices[index]);
        await getCandidatosEleccion(indices[index]);
      } catch (err) {
        return <ErrorPage direccion={"/verificacion"} />;
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [index]);

  const registrarVoto = (idCandidato, seleccionado) => {
    if (seleccionado) {
      setVotosSeleccionados([idCandidato]);
    } else {
      setVotosSeleccionados([]);
    }
  };

  const enviarVotos = async () => {
    const votesData = votosSeleccionados.map((idCandidato) => ({
      id_estudiante: user.codigo_sis, // Incluye el ID del estudiante
      id_candidato: idCandidato,
    }));

    // Envía los votos seleccionados al backend
    for (let voto of votesData) {
      await createVoto(voto);
    }
  };

  const next = async () => {
    if (votosSeleccionados.length === 0) {
      const votoNulo = {
        id_estudiante: user.codigo_sis,
        id_candidato: null,
      };
      await createVoto(votoNulo);
    } else {
      await enviarVotos();
    }

    if (index >= indices.length - 1) {
      await createRegistroVotante(datosEstudiante);
      logout();
      navigate("/");
    } else {
      setVotosSeleccionados([]); // Resetea los votos seleccionados para la siguiente elección
      setIndex(index + 1);
    }
  };

  return (
    <>
      <FondoUmss>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
          }}>
          <Typography
            sx={{
              mt: 2,
              mb: 2,
              fontSize: "2rem",
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
            {candidatos.map((candidato) => (
              <Cardd
                key={candidato.id}
                idCandidato={candidato.id}
                description={candidato.descripcion}
                nombre={candidato.nombre}
                onVotar={registrarVoto}
                seleccionado={votosSeleccionados.includes(candidato.id)}
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
              texto={index < indices.length - 1 ? "Siguiente" : "Finalizar"}
              ancho='160px'
              largo='70px'
              borde='10px'
              tamañoTexto='20px'
              onClick={next}
              //disabled={votosSeleccionados.length === 0}
            />
          </Box>
        </Box>
      </FondoUmss>
    </>
  );
}

export default Candidatos;
