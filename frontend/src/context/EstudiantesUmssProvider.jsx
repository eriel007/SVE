import { useContext, useState } from "react";
import { getEstudianteUmssRequest } from "../api/EstudiantesUmss.api";
import { EstudiantesUmssContext } from "./EstudiantesUmssContext";

export const useEstudiantesUmss = () => {
  const context = useContext(EstudiantesUmssContext);
  if (!context) {
    throw Error("use estudiantes context no esta disponible");
  }
  return context;
};

export const EstudiantesUmssContextProvider = ({ children }) => {
  const [estudiante, setEstudiante] = useState(null);

  async function getEstudianteUmss(id) {
    const response = await getEstudianteUmssRequest(id);
    setEstudiante(response.data);
    return response.data;
  }

  return (
    <EstudiantesUmssContext.Provider
      value={{
        estudiante,
        getEstudianteUmss,
      }}>
      {children}
    </EstudiantesUmssContext.Provider>
  );
};
