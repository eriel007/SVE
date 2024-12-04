import { useContext, useState } from "react";
import {
  getCarrerasRequest,
  getCarreraRequest,
  createCarreraRequest,
  updateCarreraRequest,
  deleteCarreraRequest,
} from "../api/Carrera.api";
import { CarreraContext } from "./CarreraContext";

export const useCarrera = () => {
  const context = useContext(CarreraContext);
  if (!context) {
    throw Error("usecarrera is not available");
  }
  return context;
};

export const CarreraContextProvider = ({ children }) => {
  const [carreras, setCarreras] = useState([]);
  const [carrera, setCarrera] = useState(null);

  async function loadCarreras() {
    const response = await getCarrerasRequest();
    setCarreras(response.data);
  }

  async function getCarrera(id) {
    const response = await getCarreraRequest(id);
    setCarrera(response.data);
  }

  async function createCarrera(carrera) {
    const response = await createCarreraRequest(carrera);
    setCarreras([...carreras, response.data]);
  }

  async function updateCarrera(id, newData) {
    const response = await updateCarreraRequest(id, newData);
    setCarreras(
      carreras.map((carrera) => (carrera.id === id ? response.data : carrera))
    );
  }

  async function deleteCarrera(id) {
    await deleteCarreraRequest(id);
    setCarreras(carreras.filter((carrera) => carrera.id !== id));
  }

  return (
    <CarreraContext.Provider
      value={{
        carreras,
        carrera,
        loadCarreras,
        getCarrera,
        createCarrera,
        updateCarrera,
        deleteCarrera,
      }}>
      {children}
    </CarreraContext.Provider>
  );
};
