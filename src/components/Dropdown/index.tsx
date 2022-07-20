// STYLED COMPONENTS
import { Blur, Container, English, German, Item, Label } from './styles';

// TRANSLATION
import { useTranslation } from 'react-i18next';

interface DropdownProps {
  handleClick: (state: boolean) => void;
}

const Dropdown = ({ handleClick }: DropdownProps): JSX.Element => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Blur />
      <Container>
        <Item
          onClick={() => {
            changeLanguage('de');
            handleClick(false);
          }}
        >
          <German />
          <Label>{t('LANG.DE')}</Label>
        </Item>
        <Item
          onClick={() => {
            changeLanguage('en');
            handleClick(false);
          }}
        >
          <English />
          <Label>{t('LANG.EN')}</Label>
        </Item>
      </Container>
    </>
  );
};

export default Dropdown;
