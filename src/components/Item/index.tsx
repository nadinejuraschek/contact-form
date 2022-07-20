// STYLED COMPONENTS
import { Label, Result, Wrapper } from './styles';

interface ItemProps {
  data?: string;
  label: string;
}

const Item = ({ data, label }: ItemProps): JSX.Element => (
  <Wrapper>
    <Label>{label}</Label>
    <Result>{data}</Result>
  </Wrapper>
);

export default Item;
