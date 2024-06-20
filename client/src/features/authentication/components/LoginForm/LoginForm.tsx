import React, { useState } from "react";
import FormInput from "@/components/Form/FormInput";
import * as S from "./LoginForm.styles";
import Button from "@/components/UI/Button";
import { inputFields } from "../../config/inputFields";
import { useLogin } from "../../hooks/queries/useLogin";
import { IFormData } from "./LoginForm.types";

/**
 * LoginForm component for handling user login.
 *
 * @component
 * @example
 * return (
 *   <LoginForm />
 * )
 */
const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const loginMutation = useLogin();

  /**
   * Handles the change event for the input fields.
   * Updates the form data state with the new input values.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Handles the form submission.
   * Calls the login mutation with the username and password from the form data.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = formData;
    loginMutation.mutate({ username, password });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {inputFields.map((input, index) => (
        <S.InputWrapper key={index}>
          <FormInput
            {...input}
            handleOnChange={handleChange}
            value={formData[input.name as keyof typeof formData]}
          />
        </S.InputWrapper>
      ))}
      <S.ButtonWrapper>
        <Button disabled={loginMutation.isLoading} type="submit">
          Login
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
};

export default LoginForm;
