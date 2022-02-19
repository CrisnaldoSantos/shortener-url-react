/* eslint-disable react/function-component-definition */
import { Form, FormControlProps } from 'react-bootstrap';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends FormControlProps {
  name: string;
  label?: string;
  error?: FieldError;
  passwordInput?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    error = undefined,
    passwordInput = false,
    ...rest
  }: InputProps,
  ref
) => {
  return (
    <Form.Group className="mb-3" controlId={`${name}.ControlInput`}>
      {!!label && <Form.Label htmlFor={name}>{label}</Form.Label>}
      <Form.Control id={name} {...rest} ref={ref} />
      {!!error && <Form.Text>{error.message}</Form.Text>}
    </Form.Group>
  );
};

export const Input = forwardRef(InputBase);
