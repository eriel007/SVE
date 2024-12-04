import { useContext, useState } from "react";
import {
  createVotacionRequest,
  getVotacionRequest,
} from "../api/Votaciones.api";
import { VotacionesContext } from "./VotacionesContext";

export const useVotos = () => {
  const context = useContext(VotacionesContext);
  if (!context) {
    throw Error("useParqueos must be used within a ParqueoscontextProvider");
  }
  return context;
};

export const VotosContextProvider = ({ children }) => {
  const [voto, setVoto] = useState(null);
  const [votos, setVotos] = useState([]);

  async function loadVotos() {
    const response = await getVotacionRequest();
    setVotos(response.data);
  }

  async function createVoto(voto) {
    const response = await createVotacionRequest(voto);
    setVotos([...votos, response.data]);
  }

  return (
    <VotacionesContext.Provider
      value={{
        voto,
        votos,
        createVoto,
        loadVotos,
      }}>
      {children}
    </VotacionesContext.Provider>
  );
};
