// COMPONENTS
import Header from 'components/Header';
import Preview from 'components/Preview';
// @ts-nocheck
// TRANSLATION
import { useTranslation } from 'react-i18next';

const Result = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('RESULT.TITLE')} caption={t('RESULT.CAPTION')} />
      <Preview />
    </>
  );
};

export default Result;
