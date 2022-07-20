// REACT
import { ChangeEvent, useState } from 'react';
// STYLED COMPONENTS
import { CharCount, Label, Textfield, Wrapper } from './styles';

// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';

interface TextareaProps {
  error: any;
  label: string;
  max: number;
  name: string;
  placeholder: string;
  register: any;
}

const Textarea = ({
  error,
  label,
  max,
  name,
  placeholder,
  register,
}: TextareaProps): JSX.Element => {
  const [chars, setChars] = useState(0);
  const [rows, setRows] = useState(1);

  const handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLTextAreaElement;
    setChars(target.value.length);
  };

  return (
    <Wrapper htmlFor={name}>
      <Label>{label}</Label>
      <CharCount>
        {chars} / {max}
      </CharCount>
      <Textfield
        name={name}
        placeholder={placeholder}
        onFocus={() => setRows(5)}
        rows={rows}
        {...register(name)}
        maxLength={max}
        onChange={handleInputChange}
        error={error}
      />
      {error && <ErrorMessage message={error.message} />}
    </Wrapper>
  );
};

export default Textarea;
