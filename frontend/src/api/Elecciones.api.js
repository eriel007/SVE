import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getEleccionesRequest = async () =>
  await axios.get(URL_API + "/Elecciones/");

export const getEleccionRequest = async (id) =>
  await axios.get(URL_API + "/Elecciones/" + id);

export const createEleccionRequest = async (eleccion) =>
  await axios.post(URL_API + "/Elecciones/" + eleccion);

export const updateEleccionRequest = async (id, newData) =>
  await axios.put(URL_API + "/Elecciones/" + id, newData);

export const deleteEleccionRequest = async (id) =>
  await axios.delete(URL_API + "/Elecciones/" + id);

export const getIndicesRequest = async () =>
  await axios.get(URL_API + "/Elecciones/indices");
