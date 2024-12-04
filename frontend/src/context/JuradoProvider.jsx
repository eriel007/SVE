import { useContext, useState } from "react";
import {
  getJuradosRequest,
  getJuradoRequest,
  createJuradoRequest,
  updateJuradoRequest,
  deleteJuradoRequest,
  getJuradoDetallesRequest,
} from "../api/Jurado.api";
import { JuradoContext } from "./JuradoContext";

export const useJurado = () => {
  const context = useContext(JuradoContext);
  if (!context) {
    throw Error("useJurado is not available");
  }
  return context;
};

export const JuradoContextProvider = ({ children }) => {
  const [jurados, setJurados] = useState([]);
  const [jurado, setJurado] = useState(null);

  async function loadJurados() {
    const response = await getJuradosRequest();
    setJurados(response.data);
  }

  async function getJurado(id) {
    const response = await getJuradoRequest(id);
    setJurado(response.data);
  }

  async function createJurado(rol) {
    const response = await createJuradoRequest(rol);
    setJurados([...jurados, response.data]);
  }

  async function updateJurado(id, newData) {
    const response = await updateJuradoRequest(id, newData);
    setJurados(
      jurados.map((jurado) => (jurado.id === id ? response.data : jurado))
    );
  }

  async function deleteJurado(id) {
    await deleteJuradoRequest(id);
    setJurados(jurados.filter((jurado) => jurado.id !== id));
  }

  async function getJuradoDetalles() {
    const response = await getJuradoDetallesRequest();
    setJurados(response.data);
    return response.data;
  }

  return (
    <JuradoContext.Provider
      value={{
        jurados,
        jurado,
        getJuradoDetalles,
        loadJurados,
        getJurado,
        createJurado,
        updateJurado,
        deleteJurado,
      }}>
      {children}
    </JuradoContext.Provider>
  );
};
