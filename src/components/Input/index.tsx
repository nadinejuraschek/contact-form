// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';

// STYLED COMPONENTS
import { InputItem, Label, Wrapper } from './styles';

interface InputProps {
  handleChange?: (event: any) => void;
  label: string;
  name: string;
  placeholder: string;
  inputRef: any;
  error: any;
  type: string;
  mode?:
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;
  max?: number;
}

const Input: React.FC<InputProps> = ({
  error,
  handleChange,
  inputRef,
  label,
  max,
  mode,
  name,
  placeholder,
  type,
}) => {
  return (
    <Wrapper htmlFor={name}>
      <Label>{label}</Label>
      <InputItem
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        ref={inputRef}
        type={type}
        inputMode={mode}
        maxLength={max}
      />
      {error && <ErrorMessage message={error.message} />}
    </Wrapper>
  );
};

export default Input;
