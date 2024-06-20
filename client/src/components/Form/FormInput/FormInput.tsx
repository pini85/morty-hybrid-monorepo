import * as S from "./FormInput.styles";
import { IFormInputProps } from "./FormInput.types";

const FormInput: React.FC<IFormInputProps> = ({ handleOnChange, ...props }) => {
  return (
    <label htmlFor={props.name}>
      <S.Input {...props} onChange={handleOnChange} />
    </label>
  );
};
export default FormInput;
