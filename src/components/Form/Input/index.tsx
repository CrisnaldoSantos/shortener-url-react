/* eslint-disable react/function-component-definition */
import { Form, FormControlProps } from 'react-bootstrap';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends FormControlProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = undefined, ...rest }: InputProps,
  ref
) => {
  return (
    <Form.Group className="mb-3">
      {!!label && (
        <Form.Label htmlFor={name} className="fs-6 fw-bold text-secondary">
          {label}
        </Form.Label>
      )}
      <Form.Control
        id={name}
        {...rest}
        ref={ref}
        isInvalid={error !== undefined}
      />
      {!!error && (
        <Form.Text className="mx-1 text-danger fs-6">{error.message}</Form.Text>
      )}
    </Form.Group>
  );
};

export const Input = forwardRef(InputBase);
