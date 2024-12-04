import { CandidatosContextProvider } from "../context/CandidatosProvider";
import { EleccionesContextProvider } from "../context/EleccionesProvider";
import { EstudiantesUmssContextProvider } from "../context/EstudiantesUmssProvider";
import { VotosContextProvider } from "../context/VotacionesProvider";
import { RegistroVotanteContextProvider } from "../context/RegistroVotanteProvider";

const ClienteProvider = ({ children }) => {
  return (
    <CandidatosContextProvider>
      <EleccionesContextProvider>
        <EstudiantesUmssContextProvider>
          <VotosContextProvider>
            <RegistroVotanteContextProvider>
              {children}
            </RegistroVotanteContextProvider>
          </VotosContextProvider>
        </EstudiantesUmssContextProvider>
      </EleccionesContextProvider>
    </CandidatosContextProvider>
  );
};

export default ClienteProvider;
