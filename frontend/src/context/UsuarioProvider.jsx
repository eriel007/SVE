import { useContext, useState } from "react";
import {
  getUsuariosRequest,
  getUsuarioRequest,
  createUsuarioRequest,
  updateUsuarioRequest,
  deleteUsuarioRequest,
  getUsuarioRolRequest,
} from "../api/Usuario.api";
import { UsuarioContext } from "./UsuarioContext";

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw Error("useUsuario is not available");
  }
  return context;
};

export const UsuarioContextProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [usuarioRol, setUsuarioRol] = useState(null);

  async function loadUsuarios() {
    const response = await getUsuariosRequest();
    setUsuarios(response.data);
  }

  async function getUsuario(id) {
    const response = await getUsuarioRequest(id);
    setUsuario(response.data);
  }

  async function createUsuario(usuario) {
    const response = await createUsuarioRequest(usuario);
    setUsuario([...usuarios, response.data]);
  }

  async function updateUsuario(id, newData) {
    const response = await updateUsuarioRequest(id, newData);
    setUsuarios(
      usuarios.map((usuario) => (usuario.id === id ? response.data : usuario))
    );
  }

  async function deleteUsuario(id) {
    await deleteUsuarioRequest(id);
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  }

  async function getUsuarioRol(id) {
    const response = await getUsuarioRolRequest(id);
    setUsuarioRol(response.data);
    return response.data;
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        usuario,
        usuarioRol,
        loadUsuarios,
        getUsuario,
        getUsuarioRol,
        createUsuario,
        updateUsuario,
        deleteUsuario,
      }}>
      {children}
    </UsuarioContext.Provider>
  );
};
