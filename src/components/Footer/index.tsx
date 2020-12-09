// TRANSLATIONS
import { useTranslation } from 'react-i18next';

// STYLED COMPONENTS
import { Copyright, Container, Links, PlaceholderLink } from './styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
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
