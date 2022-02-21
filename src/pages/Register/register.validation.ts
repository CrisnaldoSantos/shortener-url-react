import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('O campo E-mail é obrigatório!')
    .email('O campo E-mail não é um valor válido!'),
  password: yup.string().required('O campo Senha é obrigatório!'),
  passwordConfirmation: yup
    .string()
    .required('O campo Confirmação da Senha é obrigatório!')
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais!'),
});

export const defaultRegisterInValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};
