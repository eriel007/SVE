import { useContext, useState } from "react";
import {
  getEleccionesRequest,
  getEleccionRequest,
  createEleccionRequest,
  updateEleccionRequest,
  deleteEleccionRequest,
} from "../api/Elecciones.api";
import { EleccionesContext } from "./EleccionesContext";

export const useElecciones = () => {
  const context = useContext(EleccionesContext);
  if (!context) {
    throw Error("use Elecciones must be used within a ParqueoscontextProvider");
  }
  return context;
};

export const EleccionesContextProvider = ({ children }) => {
  const [elecciones, setElecciones] = useState([]);
  const [eleccion, setEleccion] = useState(null);

  async function loadElecciones() {
    const response = await getEleccionesRequest();
    setElecciones(response.data);
  }

  async function getEleccion(id) {
    const response = await getEleccionRequest(id);
    setEleccion(response.data);
  }

  async function createEleccion(eleccion) {
    const response = await createEleccionRequest(eleccion);
    setEleccion([...elecciones, response.data]);
  }

  async function updateEleccion(id, newData) {
    const response = await updateEleccionRequest(id, newData);
    setElecciones(
      elecciones.map((eleccion) =>
        eleccion.id === id ? response.data : eleccion
      )
    );
  }

  async function deleteEleccion(id) {
    await deleteEleccionRequest(id);
    setElecciones(elecciones.filter((eleccion) => eleccion.id !== id));
  }

  return (
    <EleccionesContext.Provider
      value={{
        elecciones,
        eleccion,
        loadElecciones,
        getEleccion,
        createEleccion,
        updateEleccion,
        deleteEleccion,
      }}>
      {children}
    </EleccionesContext.Provider>
  );
};
