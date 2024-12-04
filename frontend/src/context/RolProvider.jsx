import { useContext, useState } from "react";
import {
  getRolesRequest,
  getRolRequest,
  createRolRequest,
  updateRolRequest,
  deleteRolRequest,
} from "../api/Rol.api";
import { RolContext } from "./RolContext";

export const useRol = () => {
  const context = useContext(RolContext);
  if (!context) {
    throw Error("useRol is not available");
  }
  return context;
};

export const RolContextProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [rol, setRol] = useState(null);

  async function loadRoles() {
    const response = await getRolesRequest();
    setRoles(response.data);
  }

  async function getRol(id) {
    const response = await getRolRequest(id);
    setRol(response.data);
  }

  async function createRol(rol) {
    const response = await createRolRequest(rol);
    setRoles([...roles, response.data]);
  }

  async function updateRol(id, newData) {
    const response = await updateRolRequest(id, newData);
    setRoles(roles.map((rol) => (rol.id === id ? response.data : rol)));
  }

  async function deleteRol(id) {
    await deleteRolRequest(id);
    setRoles(roles.filter((rol) => rol.id !== id));
  }

  return (
    <RolContext.Provider
      value={{
        roles,
        rol,
        loadRoles,
        getRol,
        createRol,
        updateRol,
        deleteRol,
      }}>
      {children}
    </RolContext.Provider>
  );
};
