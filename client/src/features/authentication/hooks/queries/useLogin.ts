import { useMutation } from "react-query";
import authServiceRoutes from "../../services/authService";
import { useAuthContext } from "@/features/authentication/hooks/useAuthContext";

export const useLogin = () => {
  const { login } = useAuthContext();

  return useMutation(
    ({ username, password }: { username: string; password: string }) => {
      return authServiceRoutes.login(username, password);
    },
    {
      onSuccess: (data) => {
        login(data);
      },
    }
  );
};
