import api from "@/config/axiosInstance";

const API_URL = "http://localhost:5001/api";

const getCharacters = async () => {
  const response = await api.get(`${API_URL}/characters`);
  return response.data;
};
const getCharacterByFilter = async (name: string) => {
  const response = await api.get(`${API_URL}/character`, {
    params: { name },
  });
  return response.data;
};

const apiProxyService = {
  getCharacters,
  getCharacterByFilter,
};
export default apiProxyService;
