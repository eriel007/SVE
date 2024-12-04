import FondoUmss from "../../../components/others/FondoUmss";
import { Box, Typography, TextField } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/FingerprintOutlined";
import { pink } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../../../components/others/Button";
import Modal from "../../../components/others/Modal";
import { useEstudiantesUmss } from "../../../context/EstudiantesUmssProvider";
import { useRegistroVotante } from "../../../context/RegistroVotanteProvider";
import { useSession } from "../../../context/SessionProvider";

function VerificadorBiometric() {
  const { getEstudianteUmss } = useEstudiantesUmss();
  const { getRegistroVotante } = useRegistroVotante();
  const { login } = useSession();
  const [studentId, setStudentId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMensaje, setModalMensaje] = useState("");
  const navigate = useNavigate();

  const verificar = async () => {
    try {
      const student = await getEstudianteUmss(studentId);
      const verificarRegistro = await getRegistroVotante(student.codigo_sis);

      if (student && !verificarRegistro?.existe) {
        login({
          codigo_sis: student.codigo_sis,
          nombre: student.nombre,
          carrera: student.carrera,
          foto: student.foto,
        });
        navigate(`/informacion`);
      } else {
        setModalMensaje(
          "Ya hemos registrado su voto. Gracias por participar en el proceso de elecciones."
        );
        setModalOpen(true);
      }
    } catch (error) {
      setModalMensaje("Hubo un error con el servidor DB.");
      setModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <FondoUmss>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='100vh'>
        <Typography
          variant='h2'
          component='h2'
          height={150}
          sx={{
            mt: 2,
            mb: 2,
            fontSize: "2rem",
            fontWeight: "bold",
            justifyContent: "center",
            textAlign: "center",
            padding: "0px",
          }}>
          POSICIONE SU HUELLA PARA CONTINUAR CON LA VERIFICACIÓN DE IDENTIDAD
        </Typography>
        <FingerprintIcon sx={{ color: pink[500], fontSize: 120 }} />
        <TextField
          label='ID del Estudiante'
          variant='outlined'
          onChange={(e) => setStudentId(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Boton texto='verificar' tamañoTexto={25} onClick={verificar} />
      </Box>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        title='Mensaje'
        message={modalMensaje}
        buttonText='Aceptar'
      />
    </FondoUmss>
  );
}
export default VerificadorBiometric;
