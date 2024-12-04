import axios from "axios";
import { URL_API } from "../services/EndPoint";

export const getCarrerasRequest = async () =>
  await axios.get(URL_API + "/Carreras/");

export const getCarreraRequest = async (id) =>
  await axios.get(URL_API + "/Carreras/" + id);

export const createCarreraRequest = async (carrera) =>
  await axios.post(URL_API + "/Carreras/", carrera);

export const updateCarreraRequest = async (id, newData) =>
  await axios.put(URL_API + "/Carreras/" + id, newData);

export const deleteCarreraRequest = async (id) =>
  await axios.delete(URL_API + "/Carreras/" + id);
