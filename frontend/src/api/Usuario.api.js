import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getUsuariosRequest = async () =>
  await axios.get(URL_API + "/Usuarios/");

export const getUsuarioRequest = async (id) =>
  await axios.get(URL_API + "/Usuarios/" + id);

export const createUsuarioRequest = async (Usuario) =>
  await axios.post(URL_API + "/Usuarios/", Usuario);

export const updateUsuarioRequest = async (id, newData) =>
  await axios.put(URL_API + "/Usuario/" + id, newData);

export const deleteUsuarioRequest = async (id) =>
  await axios.delete(URL_API + "/Usuario/" + id);

export const getUsuarioRolRequest = async (id) =>
  await axios.get(URL_API + "/Usuarios/getUsuarioRol/" + id);
