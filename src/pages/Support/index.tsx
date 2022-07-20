import Form from 'components/Form';
// COMPONENTS
import Header from 'components/Header';
// TRANSLATION
import { useTranslation } from 'react-i18next';

const Support = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Header caption={t('FORM.CAPTION')} title={t('FORM.TITLE')} />
      <Form />
    </>
  );
};

export default Support;
