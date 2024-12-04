import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getJuradosRequest = async () =>
  await axios.get(URL_API + "/Jurado/");

export const getJuradoRequest = async (id) =>
  await axios.get(URL_API + "/Jurado/" + id);

export const createJuradoRequest = async (jurado) =>
  await axios.post(URL_API + "/Jurado/", jurado);

export const updateJuradoRequest = async (id, newData) =>
  await axios.put(URL_API + "/Jurado/" + id, newData);

export const deleteJuradoRequest = async (id) =>
  await axios.delete(URL_API + "/Jurado/" + id);

export const getJuradoDetallesRequest = async () =>
  await axios.get(URL_API + "/Jurado/getJuradoDetalles");
