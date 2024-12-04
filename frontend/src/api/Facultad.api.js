import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getFacultadesRequest = async () =>
  await axios.get(URL_API + "/Facultades/");

export const getFacultadRequest = async (id) =>
  await axios.get(URL_API + "/Facultades/" + id);

export const createFacultadRequest = async (facultad) =>
  await axios.post(URL_API + "/Facultades/", facultad);

export const updateFacultadRequest = async (id, newData) =>
  await axios.put(URL_API + "/Facultades/" + id, newData);

export const deleteFacultadRequest = async (id) =>
  await axios.delete(URL_API + "/Facultades/" + id);
