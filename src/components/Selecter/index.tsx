// STYLED COMPONENTS
import { Label, Option, Select, Wrapper } from './styles';

// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';
// REACT
import { FormEvent } from 'react';

interface OptionsProps {
  label: string;
  value: string;
}

interface SelecterProps {
  handleSelect: (event: FormEvent) => void;
  label: string;
  name: string;
  options: Array<OptionsProps>;
  error: any;
  register: any;
}

const Selecter = ({
  error,
  handleSelect,
  label,
  name,
  options,
  register,
}: SelecterProps): JSX.Element => (
  <Wrapper htmlFor={name}>
    <Label>{label}</Label>
    <Select name={name} {...register(name)}>
      {options.map((option, index) => (
        <Option key={index} value={option.value} onChange={handleSelect}>
          {option.label}
        </Option>
      ))}
    </Select>
    {error && <ErrorMessage message={error.message} />}
  </Wrapper>
);

export default Selecter;
