// src/config/reactQueryConfig.ts
import { QueryClient } from "react-query";
import showAlert from "@/utils/showAlert";
//all errors are in central place
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      onError: (error) => {
        //can log here to sentry or some error logging service
        console.error("Query error:", error);
        showAlert("An error occurred while fetching data.");
      },
    },
    mutations: {
      retry: false,
      onError: (error) => {
        console.error("Mutation error:", error);
        showAlert("An error occurred while processing your request.");
      },
    },
  },
});

export default queryClient;
