import React from "react";

export interface IFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
