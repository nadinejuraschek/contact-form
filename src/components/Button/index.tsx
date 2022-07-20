// STYLED COMPONENTS
import { Icon, Label, Language, Primary, Secondary } from './styles';

interface ButtonProps {
  handleClick?: () => void;
  label: string;
  styleType: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

const Button = ({
  disabled,
  handleClick,
  label,
  styleType,
  type,
}: ButtonProps): JSX.Element => (
  <>
    {styleType === 'primary' ? (
      <Primary onClick={handleClick} type={type} disabled={disabled}>
        {label}
      </Primary>
    ) : styleType === 'secondary' ? (
      <Secondary onClick={handleClick} type={type} disabled={disabled}>
        {label}
      </Secondary>
    ) : (
      <Language onClick={handleClick}>
        <Icon />
        <Label>{label}</Label>
      </Language>
    )}
  </>
);

export default Button;
