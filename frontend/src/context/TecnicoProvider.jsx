import { useContext, useState } from "react";
import {
  getTecnicosRequest,
  getTecnicoRequest,
  createTecnicoRequest,
  updateTecnicoRequest,
  deleteTecnicoRequest,
  getTecnicosFacultadesRequest,
} from "../api/Tecnico.api";
import { TecnicoContext } from "./TecnicoContext";

export const useTecnico = () => {
  const context = useContext(TecnicoContext);
  if (!context) {
    throw Error("useTecnico is not available");
  }
  return context;
};

export const TecnicoContextProvider = ({ children }) => {
  const [tecnicos, setTecnicos] = useState([]);
  const [tecnico, setTecnico] = useState(null);

  async function loadTecnicos() {
    const response = await getTecnicosRequest();
    setTecnicos(response.data);
  }

  async function getTecnico(id) {
    const response = await getTecnicoRequest(id);
    setTecnico(response.data);
  }

  async function createTecnico(rol) {
    const response = await createTecnicoRequest(rol);
    setTecnicos([...tecnicos, response.data]);
  }

  async function updateTecnico(id, newData) {
    const response = await updateTecnicoRequest(id, newData);
    setTecnicos(
      tecnicos.map((tecnico) => (tecnico.id === id ? response.data : tecnico))
    );
  }

  async function deleteTecnico(id) {
    await deleteTecnicoRequest(id);
    setTecnicos(tecnicos.filter((tecnico) => tecnico.id !== id));
  }

  async function getTecnicosFacultades() {
    const response = await getTecnicosFacultadesRequest();
    setTecnicos(response.data);
  }

  return (
    <TecnicoContext.Provider
      value={{
        tecnicos,
        tecnico,
        getTecnicosFacultades,
        loadTecnicos,
        getTecnico,
        createTecnico,
        updateTecnico,
        deleteTecnico,
      }}>
      {children}
    </TecnicoContext.Provider>
  );
};
