// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';

// STYLED COMPONENTS
import { Label, Option, Select, Wrapper } from './styles';

interface OptionsProps {
  label: string;
  value: string;
}

interface SelecterProps {
  handleSelect: (event: any) => void;
  label: string;
  name: string;
  options: Array<OptionsProps>;
  inputRef: any;
  error: any;
}

const Selecter: React.FC<SelecterProps> = ({
  error,
  handleSelect,
  inputRef,
  label,
  name,
  options,
}) => {
  return (
    <Wrapper htmlFor={name}>
      <Label>{label}</Label>
      <Select name={name} ref={inputRef}>
        {options.map((option, index) => (
          <Option key={index} value={option.value} onChange={handleSelect}>
            {option.label}
          </Option>
        ))}
      </Select>
      {error && <ErrorMessage message={error.message} />}
    </Wrapper>
  );
};

export default Selecter;
