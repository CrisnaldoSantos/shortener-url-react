import * as yup from 'yup';

export const shortenerValidationSchema = yup.object().shape({
  url: yup.string().required('O campo URL é obrigatório!'),
});

export const defaultShortenerValues = {
  url: '',
};
