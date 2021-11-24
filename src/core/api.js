import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.quran.sutanlab.id",
});

export const getAllSurah = async () => {
  return await api.get("surah");
};

export const getSurahById = async (id) => {
  return await api.get("surah/" + id);
};
