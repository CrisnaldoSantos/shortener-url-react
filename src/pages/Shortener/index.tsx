/* eslint-disable camelcase */
import { PageContainer } from 'containers/PageContainer';
import { Container, Form, Image } from 'react-bootstrap';
import shortImg from 'assets/short-url.svg';
import { UrlResult } from 'components/Contexts/Shortener/UrlResult';
import { LineButton } from 'components/Form/Button/LineButton';
import { Input } from 'components/Form/Input';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUserData } from 'utils/dataStorage';
import { useDispatch, useSelector } from 'react-redux';
import { setUrl } from 'store/url/url.ducks';
import { RootState } from 'store';
import {
  defaultShortenerValues,
  shortenerValidationSchema,
} from './shortener.validation';

type UrlFormData = {
  url: string;
};

export function Shortener() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UrlFormData>({
    resolver: yupResolver(shortenerValidationSchema),
    defaultValues: defaultShortenerValues,
  });

  const dispatch = useDispatch();
  const { urlResponse } = useSelector((state: RootState) => state.url);
  const handleSave: SubmitHandler<UrlFormData> = (data) => {
    const user = getUserData();
    const shortUrlData = {
      destinationUrl: data.url,
      user_fk: user.userId,
    };
    dispatch(setUrl(shortUrlData));
    reset(defaultShortenerValues);
  };

  return (
    <PageContainer>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center w-100 mt-5"
      >
        <Image fluid src={shortImg} style={{ width: '200px' }} />
        <Form className="mt-3 w-75" onSubmit={handleSubmit(handleSave)}>
          <Controller
            control={control}
            name="url"
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Input
                name={name}
                type="text"
                placeholder="Insira a URL a ser encurtada"
                size="lg"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.url}
              />
            )}
          />
          <LineButton type="submit" size="lg">
            Encurtar
          </LineButton>
        </Form>
        <UrlResult url={urlResponse} />
      </Container>
    </PageContainer>
  );
}
