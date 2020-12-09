// STYLED COMPONENTS
import { Error, ErrorIcon } from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Error>
      <ErrorIcon />
      {message}
    </Error>
  );
};

export default ErrorMessage;
