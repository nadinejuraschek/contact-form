// STYLED COMPONENTS
import { Caption, Container, Title } from './styles';

interface HeaderProps {
  caption?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ caption, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
    </Container>
  );
};

export default Header;
