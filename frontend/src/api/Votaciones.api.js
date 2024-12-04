import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getVotacionesRequest = async () =>
  await axios.get(URL_API + "/Voto/");

export const getVotacionRequest = async (id) =>
  await axios.get(URL_API + "/Voto/" + id);

export const createVotacionRequest = async (voto) =>
  await axios.post(URL_API + "/Voto/", voto);

export const updateVotacionRequest = async (id, newData) =>
  await axios.put(URL_API + "/Voto/" + id, newData);

export const deleteVotacionRequest = async (id) =>
  await axios.delete(URL_API + "/Voto/" + id);
