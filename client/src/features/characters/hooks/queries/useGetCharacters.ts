import { useQuery } from "react-query";
import apiProxyService from "@/features/characters/services/apiProxyService";

const useGetCharacters = () => {
  const token = localStorage.getItem("token");
  const { data, isLoading, error } = useQuery(
    "characters",
    apiProxyService.getCharacters,
    { enabled: !!token }
  );

  return { data, isLoading, error };
};

export default useGetCharacters;
