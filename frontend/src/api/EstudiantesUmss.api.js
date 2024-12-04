import axios from "axios";
import { URL_API_UMSS } from "../services/EndPoint";

export const getEstudianteUmssRequest = async (id) =>
  await axios.get(URL_API_UMSS + id);
