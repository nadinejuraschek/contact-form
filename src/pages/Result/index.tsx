// TRANSLATION
import { useTranslation } from 'react-i18next';

// COMPONENTS
import Header from 'components/Header';
import Preview from 'components/Preview';

interface ResultProps {}

const Result: React.FC<ResultProps> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('RESULT.TITLE')} caption={t('RESULT.CAPTION')} />
      <Preview />
    </>
  );
};

export default Result;
