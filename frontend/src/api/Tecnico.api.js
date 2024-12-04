import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getTecnicosRequest = async () =>
  await axios.get(URL_API + "/Tecnico/");

export const getTecnicoRequest = async (id) =>
  await axios.get(URL_API + "/Tecnico/" + id);

export const createTecnicoRequest = async (tecnico) =>
  await axios.post(URL_API + "/Tecnico/", tecnico);

export const updateTecnicoRequest = async (id, newData) =>
  await axios.put(URL_API + "/Tecnico/" + id, newData);

export const deleteTecnicoRequest = async (id) =>
  await axios.delete(URL_API + "/Tecnico/" + id);

export const getTecnicosFacultadesRequest = async () =>
  await axios.get(URL_API + "/Tecnico/getTecnicosFacultades");
