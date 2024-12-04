import { useContext, useState } from "react";
import {
  getCandidatosRequest,
  getCandidatoRequest,
  createCandidatoRequest,
  updateCandidatoRequest,
  deleteCandidatoRequest,
  getCandidatosEleccionRequest,
} from "../api/Candidatos.api";
import { CandidatosContext } from "./CandidatosContext";

export const useCandidatos = () => {
  const context = useContext(CandidatosContext);
  if (!context) {
    throw Error("useParqueos must be used within a ParqueoscontextProvider");
  }
  return context;
};

export const CandidatosContextProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([]);
  const [candidato, setCandidato] = useState(null);

  async function loadCandidatos() {
    const response = await getCandidatosRequest();
    setCandidatos(response.data);
  }

  async function getCandidato(id) {
    const response = await getCandidatoRequest(id);
    setCandidato(response.data);
  }

  async function createCandidato(candidato) {
    const response = await createCandidatoRequest(candidato);
    setCandidatos([...candidatos, response.data]);
  }

  async function updateCandidato(id, newData) {
    const response = await updateCandidatoRequest(id, newData);
    setCandidatos(
      candidatos.map((candidato) =>
        candidato.id === id ? response.data : candidato
      )
    );
  }

  async function deleteCandidato(id) {
    await deleteCandidatoRequest(id);
    setCandidatos(candidatos.filter((candidato) => candidato.id !== id));
  }

  async function getCandidatosEleccion(id) {
    const response = await getCandidatosEleccionRequest(id);
    setCandidatos(response.data);
  }

  return (
    <CandidatosContext.Provider
      value={{
        candidatos,
        candidato,
        loadCandidatos,
        getCandidato,
        createCandidato,
        updateCandidato,
        deleteCandidato,
        getCandidatosEleccion,
      }}>
      {children}
    </CandidatosContext.Provider>
  );
};
