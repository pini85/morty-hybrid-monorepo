import { useQuery } from "react-query";
import useDebounce from "@/hooks/useDebounce";
import apiProxyService from "../../services/apiProxyService";

/**
 * Custom hook to fetch characters based on a search query.
 *
 * This hook debounces the search query to minimize the number of API calls.
 * It uses `react-query` to manage the API call and cache the results.
 * The hook is enabled only if there is a valid token and a debounced query.
 *
 * @param {string} searchQuery - The search query to filter characters.
 * @returns {object} An object containing the fetched data and the loading status.
 *
 * @example
 * const { data, isLoading } = useGetCharactersByQuery("rick");
 *
 */
const useGetCharactersByQuery = (searchQuery: string) => {
  const debouncedQuery = useDebounce(searchQuery, 200);
  const token = localStorage.getItem("token");
  const { data, isLoading } = useQuery(
    ["characters", debouncedQuery],
    () => apiProxyService.getCharacterByFilter(debouncedQuery),
    {
      enabled: !!token && !!debouncedQuery,
    }
  );

  return { data, isLoading };
};

export default useGetCharactersByQuery;
