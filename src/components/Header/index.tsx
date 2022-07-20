// STYLED COMPONENTS
import { Caption, Container, Title } from './styles';

interface HeaderProps {
  caption?: string;
  title?: string;
}

const Header = ({ caption, title }: HeaderProps): JSX.Element => (
  <Container>
    <Title>{title}</Title>
    <Caption>{caption}</Caption>
  </Container>
);

export default Header;
