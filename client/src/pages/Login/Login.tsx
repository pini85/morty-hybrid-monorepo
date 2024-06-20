import LoginForm from "@/features/authentication/components/LoginForm";
import * as S from "./Login.styles";
import Title from "@/components/UI/Title";

const Login = () => {
  return (
    <S.Container>
      <Title>Login</Title>
      <LoginForm />
    </S.Container>
  );
};
export default Login;
