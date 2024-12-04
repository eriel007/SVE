import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getRolesRequest = async () => await axios.get(URL_API + "/Roles/");

export const getRolRequest = async (id) =>
  await axios.get(URL_API + "/Roles/" + id);

export const createRolRequest = async (rol) =>
  await axios.post(URL_API + "/Roles/", rol);

export const updateRolRequest = async (id, newData) =>
  await axios.put(URL_API + "/Roles/" + id, newData);

export const deleteRolRequest = async (id) =>
  await axios.delete(URL_API + "/Roles/" + id);
