// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import Header from 'components/Header';
import Form from 'components/Form';

interface SupportProps {}

const Support: React.FC<SupportProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header caption={t('FORM.CAPTION')} title={t('FORM.TITLE')} />
      <Form />
    </>
  );
};

export default Support;
