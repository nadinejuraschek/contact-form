// REACT
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

// TRANSLATION
import { useTranslation } from 'react-i18next';

// STYLED COMPONENTS
import { Container, BtnWrapper } from './styles';

// COMPONENTS
import Item from 'components/Item';

// CONTEXT
import { FormDataContext } from 'context/FormDataContext';

// COMPONENTS
import Button from 'components/Button';

interface PreviewProps {}

const Preview: React.FC<PreviewProps> = () => {
  const { t } = useTranslation();
  const { data, setData } = useContext(FormDataContext);
  const { name, email, topic, version, phone, description } = data;
  const history = useHistory();

  const topicLabel: { [topic: string]: string } = {
    general: t('FORM.TOPIC.GENERAL'),
    software: t('FORM.TOPIC.SOFTWARE'),
    call: t('FORM.TOPIC.CALL'),
  };

  const handleBackToForm = () => {
    history.push('/');
  };

  const handleNewForm = () => {
    setData({});
    history.push('/');
  };

  return (
    <Container>
      <Item label={t('FORM.NAME.LABEL')} data={name} />
      <Item label={t('FORM.EMAIL.LABEL')} data={email} />
      <Item label={t('FORM.TOPIC.LABEL')} data={topicLabel[topic]} />
      {version && <Item label={t('FORM.VERSION.LABEL')} data={version} />}
      {phone && <Item label={t('FORM.PHONE.LABEL')} data={phone} />}
      <Item label={t('FORM.DESC.LABEL')} data={description} />
      <BtnWrapper>
        <Button
          label={t('RESULT.EDIT')}
          handleClick={handleBackToForm}
          styleType='secondary'
        />
        <Button
          label={t('RESULT.NEW')}
          handleClick={handleNewForm}
          styleType='primary'
        />
      </BtnWrapper>
    </Container>
  );
};

export default Preview;
