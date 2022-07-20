// STYLED COMPONENTS
import { Container, Dot, Wrapper } from './styles';

const Spinner = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Wrapper>
    </Container>
  );
};

export default Spinner;
