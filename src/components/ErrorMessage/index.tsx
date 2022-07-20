// STYLED COMPONENTS
import { Error, ErrorIcon } from './styles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => (
  <Error>
    <ErrorIcon />
    {message}
  </Error>
);

export default ErrorMessage;
