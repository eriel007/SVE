import { useContext, useState } from "react";
import {
  getVotanteRegistradoRequest,
  createRegistroVotanteRequest,
} from "../api/RegistroVotante.api";
import { RegistroVotanteContext } from "./RegistroVotanteContext";

export const useRegistroVotante = () => {
  const context = useContext(RegistroVotanteContext);
  if (!context) {
    throw Error("no es valido el contexto Registro de Votantes");
  }
  return context;
};

export const RegistroVotanteContextProvider = ({ children }) => {
  const [registroVotante, setRegistroVotante] = useState(null);
  const [registroVotantes, setRegistroVotantes] = useState([]);

  async function getRegistroVotante(codSis) {
    const response = await getVotanteRegistradoRequest(codSis);
    setRegistroVotante(response.data);
    return response.data;
  }

  async function createRegistroVotante(votante) {
    const response = await createRegistroVotanteRequest(votante);
    setRegistroVotantes([...registroVotantes, response.data]);
  }

  return (
    <RegistroVotanteContext.Provider
      value={{
        registroVotante,
        registroVotantes,
        getRegistroVotante,
        createRegistroVotante,
      }}>
      {children}
    </RegistroVotanteContext.Provider>
  );
};
