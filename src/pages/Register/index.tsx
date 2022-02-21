import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';
import { ImageBrandForm } from 'components/Structure/ImageBrandForm';
import { SignLink } from 'components/Structure/SignLink';
import { SignContainer } from 'containers/SignContainer';
import { Col, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, createUserSuccess } from 'store/users/users.ducks';
import { useEffect } from 'react';
import {
  defaultRegisterInValues,
  registerFormSchema,
} from './register.validation';

type RegisterFormData = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export function Register() {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
    defaultValues: defaultRegisterInValues,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { createSuccess } = useSelector((state: RootState) => state.users);

  const handleSave: SubmitHandler<RegisterFormData> = (data) => {
    const { email, password } = data;
    dispatch(createUser({ email, password }));
  };

  useEffect(() => {
    if (createSuccess) {
      navigate('/login');
      dispatch(createUserSuccess(false));
    }
  }, [createSuccess, dispatch, navigate]);

  return (
    <SignContainer>
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={4}>
          <Form
            className="shadow mt-1 bg-white py-4 px-4 rounded"
            onSubmit={handleSubmit(handleSave)}
          >
            <ImageBrandForm />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, name } }) => (
                <Input
                  name={name}
                  label="Email"
                  type="email"
                  size="lg"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={errors.email}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, name } }) => (
                <Input
                  name={name}
                  label="Senha"
                  type="password"
                  size="lg"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={errors.password}
                />
              )}
            />
            <Controller
              control={control}
              name="passwordConfirmation"
              render={({ field: { onChange, onBlur, value, name } }) => (
                <Input
                  name={name}
                  label="Confirmação da Senha"
                  type="password"
                  size="lg"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={errors.passwordConfirmation}
                />
              )}
            />

            <LineButton type="submit" size="lg" className="mt-3 mb-2">
              Registrar
            </LineButton>
            <SignLink url="/login">Já possuo uma conta.</SignLink>
          </Form>
        </Col>
      </Row>
    </SignContainer>
  );
}
