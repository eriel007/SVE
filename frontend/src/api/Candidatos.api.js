import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getCandidatosRequest = async () =>
  await axios.get(URL_API + "/Candidatos/");

export const getCandidatoRequest = async (id) =>
  await axios.get(URL_API + "/Candidatos/" + id);

export const createCandidatoRequest = async (candidatos) =>
  await axios.post(URL_API + "/Candidatos/" + candidatos);

export const updateCandidatoRequest = async (id, newData) =>
  await axios.put(URL_API + "/Candidatos/" + id, newData);

export const deleteCandidatoRequest = async (id) =>
  await axios.delete(URL_API + "/Candidatos/" + id);

export const getCandidatosEleccionRequest = async (id) =>
  await axios.get(URL_API + "/Elecciones/" + id + "/candidatos");
