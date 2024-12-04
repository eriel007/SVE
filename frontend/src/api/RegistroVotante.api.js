import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getVotanteRegistradoRequest = async (codSis) =>
  await axios.get(URL_API + "/UsuariosRegistrados/yaVoto/" + codSis);

export const createRegistroVotanteRequest = async (votante) =>
  await axios.post(URL_API + "/UsuariosRegistrados/", votante);
