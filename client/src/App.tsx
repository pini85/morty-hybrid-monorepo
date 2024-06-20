import Spinner from "./components/Spinner/Spinner";
import useCheckAuthStatus from "./features/authentication/hooks/queries/useCheckAuthStatus";
import { useLogin } from "./features/authentication/hooks/queries/useLogin";
import RouteConfig from "./routes/RouteConfig";
function App() {
  const { isLoading } = useCheckAuthStatus();
  useLogin();

  //bad for seo but client side react is anyways bad for it, but quick fix here to not have a flicker of guest,admin and user and make the routes more stable
  if (isLoading) return <Spinner />;
  return <RouteConfig />;
}

export default App;
