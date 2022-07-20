// STYLED COMPONENTS
import { InputItem, Label, Wrapper } from './styles';

// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';

type Mode =
  | 'text'
  | 'none'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search';

interface InputProps {
  error: any;
  handleChange?: (event: any) => void;
  label: string;
  max?: number;
  mode?: Mode;
  name: string;
  placeholder: string;
  register: any;
  type: string;
}

const Input = ({
  error,
  handleChange,
  label,
  max,
  mode,
  name,
  placeholder,
  register,
  type,
}: InputProps): JSX.Element => (
  <Wrapper htmlFor={name}>
    <Label>{label}</Label>
    <InputItem
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      {...register(name)}
      type={type}
      inputMode={mode}
      maxLength={max}
    />
    {error && <ErrorMessage message={error.message} />}
  </Wrapper>
);

export default Input;
