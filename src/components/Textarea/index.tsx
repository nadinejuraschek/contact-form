// REACT
import { useState } from 'react';

// COMPONENTS
import ErrorMessage from 'components/ErrorMessage';

// STYLED COMPONENTS
import { CharCount, Label, Textfield, Wrapper } from './styles';

interface TextareaProps {
  error: any;
  inputRef: any;
  label: string;
  max: number;
  name: string;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({
  error,
  inputRef,
  label,
  max,
  name,
  placeholder,
}) => {
  const [chars, setChars] = useState(0);
  const [rows, setRows] = useState(1);

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
        ref={inputRef}
        maxLength={max}
        onChange={(event: any) => setChars(event.target.value.length)}
        error={error}
      />
      {error && <ErrorMessage message={error.message} />}
    </Wrapper>
  );
};

export default Textarea;
