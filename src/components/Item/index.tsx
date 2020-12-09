// STYLED COMPONENTS
import { Wrapper, Label, Result } from './styles';

interface ItemProps {
  data?: string;
  label: string;
}

const Item: React.FC<ItemProps> = ({ data, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Result>{data}</Result>
    </Wrapper>
  );
};

export default Item;
