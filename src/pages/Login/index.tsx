import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';
import { ImageBrandForm } from 'components/Structure/ImageBrandForm';
import { SignLink } from 'components/Structure/SignLink';
import { SignContainer } from 'containers/SignContainer';
import { Col, Form, Row } from 'react-bootstrap';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'store/auth/auth.ducks';
import { useEffect } from 'react';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import { defaultSignInValues, signInFormSchema } from './login.validation';

type SignInFormData = {
  email: string;
  password: string;
};

export function Login() {
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: defaultSignInValues,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginSuccess } = useSelector((state: RootState) => state.auth);

  const handleSave: SubmitHandler<SignInFormData> = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/');
    }
  }, [loginSuccess, navigate]);

  return (
    <SignContainer>
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={5} xl={4}>
          <Form
            className="shadow mt-3 bg-white py-5 px-4 rounded"
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
            <LineButton type="submit" size="lg" className="mt-3 mb-2">
              Entrar
            </LineButton>
            <SignLink url="/register">Ainda não possuo uma conta.</SignLink>
          </Form>
        </Col>
      </Row>
    </SignContainer>
  );
}
