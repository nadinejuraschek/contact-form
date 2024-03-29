import * as yup from 'yup';

// STYLED COMPONENTS
import { Container, Text } from './styles';
// HELPERS
import {
  normalizePhoneNumber,
  normalizeVersionNumber,
} from 'helpers/validation';

// COMPONENTS
import Button from 'components/Button';
// CONTEXT
import { FormDataContext } from 'context/FormDataContext';
import Input from 'components/Input';
import Selecter from 'components/Selecter';
import Textarea from 'components/Textarea';
// @ts-nocheck
// REACT
import { useContext } from 'react';
// DEPENDENCIES
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// TRANSLATION
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInputs {
  name: string;
  email: string;
  topic: 'general' | 'software' | 'call';
  version?: number;
  phone?: number;
  description: string;
}

const Form = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, setData } = useContext(FormDataContext);

  // SCHEMA VALIDATION
  const schema = yup.object().shape({
    name: yup
      .string()
      .required(t('FORM.NAME.ERROR'))
      .matches(
        /^[\u00C0-\u017Fa-zA-Z'][\u00C0-\u017Fa-zA-Z-' ]+[\u00C0-\u017Fa-zA-Z']?$/,
        t('FORM.NAME.ERROR_NUM')
      ),
    email: yup
      .string()
      .lowercase()
      .required(t('FORM.EMAIL.ERROR'))
      .email(t('FORM.EMAIL.ERROR')),
    topic: yup
      .string()
      .oneOf(['general', 'software', 'call'], t('FORM.TOPIC.ERROR'))
      .required(t('FORM.TOPIC.ERROR')),
    version: yup.string().min(5, t('FORM.VERSION.ERROR')),
    phone: yup.string().min(10, t('FORM.PHONE.ERROR')),
    description: yup.string().required(t('FORM.DESC.ERROR')),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      name: data.name,
      email: data.email,
      topic: data.topic,
      version: data.version,
      phone: data.phone,
      description: data.description,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (formData: IFormInputs) => {
    setData(formData);
    navigate('/result');
  };

  const selecterOptions = [
    { label: t('FORM.TOPIC.CHOOSE'), value: '' },
    { label: t('FORM.TOPIC.GENERAL'), value: 'general' },
    { label: t('FORM.TOPIC.SOFTWARE'), value: 'software' },
    { label: t('FORM.TOPIC.CALL'), value: 'call' },
  ];

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Text>* {t('FORM.REQUIRED')}</Text>
      <Input
        label={`${t('FORM.NAME.LABEL')} *`}
        name='name'
        placeholder={t('FORM.NAME.PLACEHOLDER')}
        register={register}
        error={errors.name}
        type='text'
      />
      <Input
        label={`${t('FORM.EMAIL.LABEL')} *`}
        name='email'
        placeholder={t('FORM.EMAIL.PLACEHOLDER')}
        register={register}
        error={errors.email}
        type='email'
      />
      <Selecter
        handleSelect={(event: any) => console.log(event.value)}
        label={`${t('FORM.TOPIC.LABEL')} *`}
        name='topic'
        options={selecterOptions}
        register={register}
        error={errors.topic}
      />
      {watch('topic') === 'software' && (
        <Input
          label={`${t('FORM.VERSION.LABEL')} *`}
          name='version'
          placeholder='10.11.12'
          handleChange={(event: any) => {
            const { value } = event.target;
            event.target.value = normalizeVersionNumber(value);
          }}
          register={register}
          error={errors.version}
          type='tel'
          mode='numeric'
          max={10}
        />
      )}
      {watch('topic') === 'call' && (
        <Input
          label={`${t('FORM.PHONE.LABEL')} *`}
          name='phone'
          placeholder='+49 123 45678900'
          handleChange={(event: any) => {
            const { value } = event.target;
            event.target.value = normalizePhoneNumber(value);
          }}
          register={register}
          error={errors.phone}
          type='tel'
          mode='numeric'
        />
      )}
      <Textarea
        label={`${t('FORM.DESC.LABEL')} *`}
        name='description'
        placeholder={t('FORM.DESC.LABEL')}
        register={register}
        error={errors.description}
        max={800}
      />
      <Button
        label={t('FORM.SEND')}
        styleType='primary'
        type='submit'
        disabled={!formState.isValid}
      />
    </Container>
  );
};

export default Form;
