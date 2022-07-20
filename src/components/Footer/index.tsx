// STYLED COMPONENTS
import { Container, Copyright, Links, PlaceholderLink } from './styles';

// TRANSLATIONS
import { useTranslation } from 'react-i18next';

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container>
      <Links>
        <PlaceholderLink>{t('FOOTER.TERMS')}</PlaceholderLink>
        <PlaceholderLink>{t('FOOTER.PRIVACY')}</PlaceholderLink>
        <PlaceholderLink>{t('FOOTER.IMPRESSUM')}</PlaceholderLink>
      </Links>
      <Copyright>© {new Date().getFullYear()} Company</Copyright>
    </Container>
  );
};

export default Footer;
