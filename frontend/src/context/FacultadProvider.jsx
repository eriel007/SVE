import { useContext, useState } from "react";
import {
  getFacultadRequest,
  getFacultadesRequest,
  createFacultadRequest,
  updateFacultadRequest,
  deleteFacultadRequest,
} from "../api/Facultad.api";
import { FacultadContext } from "./FacultadContext";

export const useFacultad = () => {
  const context = useContext(FacultadContext);
  if (!context) {
    throw Error("useFacultad is not defined");
  }
  return context;
};

export const FacultadContextProvider = ({ children }) => {
  const [facultades, setFacultades] = useState([]);
  const [facultad, setFacultad] = useState(null);

  async function loadFacultades() {
    const response = await getFacultadesRequest();
    setFacultades(response.data);
  }

  async function getFacultad(id) {
    const response = await getFacultadRequest(id);
    setFacultad(response.data);
  }

  async function createFacultad(facultad) {
    const response = await createFacultadRequest(facultad);
    setFacultades([...facultad, response.data]);
  }

  async function updateFacultad(id, newData) {
    const response = await updateFacultadRequest(id, newData);
    setFacultades(
      facultades.map((facultad) =>
        facultad.id === id ? response.data : facultad
      )
    );
  }

  async function deleteFacultad(id) {
    await deleteFacultadRequest(id);
    setFacultades(facultades.filter((facultad) => facultad.id !== id));
  }

  return (
    <FacultadContext.Provider
      value={{
        facultades,
        facultad,
        loadFacultades,
        getFacultad,
        createFacultad,
        updateFacultad,
        deleteFacultad,
      }}>
      {children}
    </FacultadContext.Provider>
  );
};
